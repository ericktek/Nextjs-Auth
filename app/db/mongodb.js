import mongoose from "mongoose"

export const connectMongoDB  = async () => {
    try {
       const db = await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to MongoDB')
        
    } catch (error) {

        console.log('Error connecting to MongoDB')
    }
}