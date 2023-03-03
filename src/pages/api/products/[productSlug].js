import Products from '@/models/Products';
import dbConnect from '@/db/dbConnect';

export default async function getOneProduct(req, res) {
  await dbConnect();
  if (req.method === 'GET') {
    const { productSlug } = req.query;
    const product = await Products.findOne({ slug: productSlug });
    res.status(200).json(product);
  }
  if (req.method === 'DELETE') {
    const { productSlug } = req.query;

    await Products.findOneAndDelete({ slug: productSlug });
    res.status(200).json({});
  }
}
