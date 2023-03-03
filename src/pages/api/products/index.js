import dbConnect from '@/db/dbConnect';
import Products from '@/models/Products';

export default async function handler(req, res) {
  const db = await dbConnect(); // Wait for connection before executing queries
  // Get all products
  if (req.method === 'GET') {
    const products = await Products.find({}).select(
      'name price mediaUrl description campaign category slug'
    );
    res.status(200).json(products);
  }
  // Create a new Product
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
  // Delete a Product
  if (req.method === 'DELETE') {
    const { _id } = req.body;
    try {
      const deletedProduct = await Products.findByIdAndRemove(_id);
      res.status(200).json(deletedProduct);
    } catch (error) {
      res.status(400).json({ error: 'Error deleting product' });
    }
  }
}
