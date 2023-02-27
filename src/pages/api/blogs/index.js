import data from '../data';

// api/blogs

export default function getAllBlogs(req, res) {
  const { Blogs } = data;
  if (Blogs) {
    return res.status(200).json(Blogs);
  } else {
    return res.status(404).json({ error: 'data not found' });
  }
}
