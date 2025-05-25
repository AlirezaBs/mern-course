import express from "express"

const app = express()

app.get("/products", (req, res) => {
   
})

app.listen(4000, () => {
   console.log("server is started at http://localhost:4000")
})
