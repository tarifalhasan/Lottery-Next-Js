import connect from '@/db/dbConnect';
import User from '@/models/User';

export default async function handler(req, res) {
  await connect(); // Wait for connection before executing queries

  if (req.method === 'GET') {
    const users = await User.find({});
    res.status(200).json(users);
  }
  if (req.method === 'POST') {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ success: true, data: newUser });
  }
}
