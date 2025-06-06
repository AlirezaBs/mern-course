import dotenv from "dotenv"
import express from "express"
import path from "path"
import { connectDB } from "./config/db.js"

import productRoutes from "./routes/product.route.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

const __dirname = path.resolve()

app.use(express.json()) // allows us to accept json data in the req.body

app.use("/api/products", productRoutes)

if (process.env.NODE_ENV === "production") {
   app.use(express.static(path.join(__dirname, "/frontend/dist")))

   app.get("/*name", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
   })
}

app.listen(PORT, () => {
   connectDB()
   console.log(`server is started at http://localhost:${PORT}`)
})
