import mongoose from "mongoose"

export const connectDB = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URI)
      console.log(`MongoDB connected: ${mongoose.connection.host}`)
   } catch (error) {
      console.log(`Error connecting to MongoDB: ${error.message}`)
      process.exit(1) // process code 1 means exit with failure, 0 means success
   }
}
