import mongoose from "mongoose";

const connectDB = async () => {
    const dbConnectionString = process.env.SERVER_DB_CONNECTION_STRING;
    try {
        const conn = await mongoose.connect(dbConnectionString);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export { 
    connectDB
}