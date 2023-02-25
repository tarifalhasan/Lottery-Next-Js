import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Campaigns from '@/components/Section/Campaigns';
import Link from 'next/link';
import { AiOutlineLink } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
// stop eslint next line

const SingleBlog = () => {
  const [post, setPost] = useState();
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const { blogSlug } = router.query;
  useEffect(() => {
    setLoading(true);
    async function fetchPosts() {
      const res = await fetch('/api/blog');
      const posts = await res.json();
      const post = posts.find(p => p.slug === blogSlug);

      setPost(post);
    }
    fetchPosts();
  }, [blogSlug]);
  if (!isLoading)
    return (
      <p className="text-xl text-center text-green-800 py-5">Loading...</p>
    );
  else {
    return (
      <div className="main-container py-16">
        <div className="header">
          <h2 className="text-[1.7em] md:text-[2.300em] text-[#434648]">
            {post?.title}
          </h2>
        </div>
        <div className="flex gap-y-5 justify-between items-center">
          <div className="date">
            <p className="text-[#434648]">{post?.publishedDate}</p>
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
          {post?.details.map(item => (
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
        <Campaigns btnBg={'bg-[#01A8FF]'} headingColor="text-[#434648]" />
      </div>
    );
  }
};

export default SingleBlog;
