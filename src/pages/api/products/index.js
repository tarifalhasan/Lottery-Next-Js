import dbConnect from '@/db/dbConnect';
import Products from '@/models/Products';

export default async function handler(req, res) {
  const db = await dbConnect(); // Wait for connection before executing queries
  if (req.method === 'GET') {
    const products = await Products.find({}).select(
      'name price mediaUrl description campaign category slug'
    );
    res.status(200).json(products);
  }
  if (req.method === 'POST') {
    const { name, price, mediaUrl, description, campaign, category, slug } =
      req.body;

    const newProduct = new Products({
      name,
      price,
      campaign,
      slug,
      mediaUrl,
      description,
      category,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  }
}
