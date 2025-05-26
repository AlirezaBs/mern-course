import mongoose from "mongoose"
import Product from "../models/product.model.js"

export const getProducts = async (req, res) => {
   try {
      const products = await Product.find()
      res.status(200).json({
         success: true,
         data: products,
      })
   } catch (error) {
      console.error("Error fetching products", error.message)
      res.status(500).json({
         success: false,
         message: "Error fetching products",
      })
   }
}

export const createProduct = async (req, res) => {
   const product = req.body

   if (!product.name) {
      return res.status(400).json({
         success: false,
         message: "Name field is required",
      })
   }
   if (!product.price) {
      return res.status(400).json({
         success: false,
         message: "Price field is required", 
      })
   }
   if (isNaN(product.price)) {
      return res.status(400).json({
         success: false,
         message: "Price must be a number",
      })
   }
   if (!product.image) {
      return res.status(400).json({
         success: false,
         message: "Image field is required",
      })
   }

   const newProduct = new Product(product)
   try {
      await newProduct.save()
      res.status(201).json({
         success: true,
         message: "Product created successfully",
         data: newProduct,
      })
   } catch (error) {
      console.error("Error creating product", error.message)
      res.status(500).json({
         success: false,
         message: "Error creating product",
      })
   }
}

export const deleteProduct = async (req, res) => {
   const { id } = req.params

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
         success: false,
         message: "Product not found",
      })
   }

   try {
      await Product.findByIdAndDelete(id)
      res.status(200).json({
         success: true,
         message: "Product deleted successfully",
      })
   } catch (error) {
      console.error("Error deleting product", error.message)
      res.status(500).json({
         success: false,
         message: "Error deleting product",
      })
   }
}

export const updateProduct = async (req, res) => {
   const { id } = req.params
   const product = req.body

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
         success: false,
         message: "Product not found",
      })
   }

   try {
      const updatedProduct = await Product.findByIdAndUpdate(id, product, {
         new: true,
      })
      res.status(200).json({
         success: true,
         data: updatedProduct,
         message: "Product updated successfully",
      })
   } catch (error) {
      console.error("Error updating product", error.message)
   }
}
