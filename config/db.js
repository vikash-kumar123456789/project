import mongoose from 'mongoose';
import colors from 'colors';

const connectDB =  async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connect to mongo db data base ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Error in Mango DB ${error}`.bgRed.white);
    }
};

export default connectDB;