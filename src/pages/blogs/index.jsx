import RaffleDraw from '@/components/Section/RaffleDraw';

import Image from 'next/image';
import Link from 'next/link';

import Spinner from '@/components/Section/Spinner';
import Error from '@/components/common/404';
import Layout from '@/components/Layout/Layout';

const BlogPage = ({ blogs, isError, isLoading }) => {
  if (isError) {
    return (
      <Layout>
        <Error />;
      </Layout>
    );
  }
  if (isLoading) {
    return (
      <Layout>
        <Spinner />;
      </Layout>
    );
  }

  return (
    <Layout>
      <section>
        <div className="blog_hero hero-gradient ">
          <div className="pt-6 main-container">
            <RaffleDraw />
          </div>
        </div>
        <main className="main-container py-20">
          <div className="blog place-items-center gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {blogs?.map(blog => (
              <div key={blog.slug}>
                <div className="features_image">
                  <Image
                    src={blog.featuresImage}
                    alt={blog.title}
                    width={250}
                    height={250}
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="blog_content flex pt-2 flex-col space-y-1">
                  {/* date */}
                  <div className="flex items-center justify-between pr-5">
                    <p className=" text-[#353A4DE5] font-normal text-[1em]">
                      {blog.publishedDate}
                    </p>
                    <hr className="bg-[#353A4DE5] w-[1.5px] h-4" />
                    <p className=" text-[#353A4DE5] font-normal text-[1em]">
                      3 min read
                    </p>
                  </div>
                  <h2 className="text-[#434648] text-[1.3em]">{blog.title}</h2>
                  <p className=" text-[#353A4DE5] font-normal text-[1em]">
                    {blog.shortDescription.slice(0, 100)}
                  </p>
                  <div>
                    <Link
                      href={`blogs/${blog.slug}`}
                      className="flex items-center gap-x-1 text-[#01A8FF]"
                    >
                      <span>Read More</span>
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6H15M15 6L10 1M15 6L10 11"
                          stroke="#01A8FF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
    </Layout>
  );
};

export default BlogPage;

export async function getServerSideProps() {
  const baseUrl = process.env.BASE_URL;
  let blogs = [];
  let isError = false;
  let isLoading = true;
  try {
    const res = await fetch(`${baseUrl}/api/blogs`);
    blogs = await res.json();
  } catch (error) {
    isError = true;
  } finally {
    isLoading = false;
  }
  return {
    props: {
      blogs: blogs,
      isError: isError,
      isLoading: isLoading,
    },
  };
}
