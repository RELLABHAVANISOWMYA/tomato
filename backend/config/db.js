import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Sowmya:9398987414@cluster0.lhm4v.mongodb.net/food-del');
        console.log('Database Connected');
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
};
