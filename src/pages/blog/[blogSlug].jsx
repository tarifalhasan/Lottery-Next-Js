import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const blogSlug = () => {
  // stop eslint next line
  const [post, setPost] = useState(null);
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
          <div>
            <p className="text-[1.2em] text-[#434648]">Share</p>
          </div>
        </div>
      </div>
    );
  }
};

export default blogSlug;
