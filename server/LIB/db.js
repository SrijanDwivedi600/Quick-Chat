import mongoose from "mongoose"; 

export const connectDB = async () => { 
    try { 
        mongoose.connection.on('connected', () => console.log('Database Connected'));
        mongoose.connection.on('error', (err) => console.error('Mongoose connection error:', err));
        
        await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`, {
            serverSelectionTimeoutMS: 5000,
        });
    } catch (error) {
        console.error("MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
};
