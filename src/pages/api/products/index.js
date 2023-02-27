import data from '../data';

// api/products

export default function getAllProducts(req, res) {
  const { Products } = data;
  if (Products) {
    return res.status(200).json(Products);
  } else {
    return res.status(404).json({ error: 'data not found' });
  }
}
