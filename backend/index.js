import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:3000', // Allow only this origin
    methods: ['GET', 'POST'],       // Allow only specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
};


dotenv.config(); // Load .env first



const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;


async function mongoDBConnect() {
    try {
        await mongoose.connect(MONGODB_URL); // No need for deprecated options
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  mongoDBConnect();
});


export default app;