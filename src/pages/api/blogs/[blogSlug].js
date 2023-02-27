import data from '../data';

export default function getOneBlog(req, res) {
  const { blogSlug } = req.query;
  const { Blogs } = data;
  if (blogSlug) {
    const OneBlog = Blogs.find(blog => blog.slug === blogSlug);
    return res.status(200).json(OneBlog);
  } else {
    return res.status(404).json({ eoor: 'blog not found' });
  }
}
