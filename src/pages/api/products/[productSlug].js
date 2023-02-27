import data from '../data';

export default function getOneProduct(req, res, next) {
  const { productSlug } = req.query;
  const { Products } = data;

  if (productSlug) {
    const singleProduct = Products.find(
      product => product.slug === productSlug
    );
    return res.status(200).json(singleProduct);
  } else {
    return res.status(404).json({ error: 'Product not found' });
  }
}
