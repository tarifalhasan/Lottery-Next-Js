import Campaigns from '@/components/Section/Campaigns';
import Link from 'next/link';
import useFetcher from '@/lib/fetcher';
import { getBlogs } from '@/lib/fetchData';
import { AiOutlineLink } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import Spinner from '@/components/Section/Spinner';
import Error from '@/components/common/404';

// stop eslint next line

const SingleBlog = ({ posts }) => {
  const { data, isLoading, isError } = useFetcher('products');

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <div className="main-container py-16">
      <div className="header">
        <h2 className="text-[1.7em] md:text-[2.300em] text-[#434648]">
          {posts?.title}
        </h2>
      </div>
      <div className="flex gap-y-5 justify-between items-center">
        <div className="date">
          <p className="text-[#434648]">{posts?.publishedDate}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="text-[1.2em] text-[#434648]">Share</p>
          <ul className="flex items-center gap-x-2">
            <li>
              <Link
                href="/"
                className="flex w-8 h-8 border border-[#434648] rounded-full items-center justify-center"
              >
                <AiOutlineLink size={20} className="text-[#434648]" />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex w-8 h-8 border border-[#434648] rounded-full items-center justify-center"
              >
                <FaFacebookF size={20} className="text-[#434648]" />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex w-8 h-8 border border-[#434648] rounded-full items-center justify-center"
              >
                <FaLinkedinIn size={20} className="text-[#434648]" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="blog_descripetion py-4">
        {posts?.details.map(item => (
          <div key={item.description}>
            <h2
              className="text-[#434648] text-[1.7em] md:text-[2.1em]"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
            <div dangerouslySetInnerHTML={{ __html: item.description }} />
          </div>
        ))}
      </div>
      {/* compaign */}
      <Campaigns
        data={data}
        btnBg={'bg-[#01A8FF]'}
        headingColor="text-[#434648]"
        slugProduct="/products"
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default SingleBlog;

export async function getStaticProps({ params }) {
  const posts = await getBlogs(params.blogSlug);
  return {
    props: {
      posts, // pass posts array as a property of the props object
    },
  };
}

// Generates `/blog/[blogSlug]` for each blog post
export async function getStaticPaths() {
  const posts = await getBlogs();
  const paths = posts.map(value => {
    return {
      params: {
        blogSlug: value.slug, //
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
