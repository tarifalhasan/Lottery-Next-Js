import mongoose from 'mongoose';

function dbConnect() {
  if (mongoose.connections[0].readyState) {
    console.log('alredy connected');
    return;
  }
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    strictQuery: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  mongoose.connection.on('connected', () => {
    console.log('connected to mongo');
  });
  mongoose.connection.on('error', err => {
    console.log('error connecting', err);
  });
}

export default dbConnect;
