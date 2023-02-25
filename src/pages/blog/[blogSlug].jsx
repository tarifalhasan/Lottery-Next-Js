import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import { AiOutlineLink } from 'react-icons/ai';
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
  if (!isLoading) return <p>Loading...</p>;
  if (!post) return <p>Post not found</p>;
  else {
    return (
      <div className="main-container py-16">
        <div className="header">
          <h2 className="text-[2.300em] text-[#434648]">{post?.title}</h2>
        </div>
        <div className="flex justify-between items-center">
          <div className="date">
            <p className="text-[#434648]">{post?.publishedDate}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-[1.2em] text-[#434648]">Share</p>
            <div className="flex items-center justify-center">
              <AiOutlineLink />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleBlog;
