import { create } from "zustand"

const useProductStore = create((set) => ({
   products: [],
   addProduct: (product) =>
      set((state) => ({ products: [...state.products, product] })),
   createProduct: async (product) => {
      if (!product.name || !product.price || !product.image) {
         return { success: false, message: "All fields are required" }
      }

      const response = await fetch("/api/products", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(product),
      })
      const data = await response.json()
      if (response.ok) {
         set((state) => ({ products: [...state.products, data.data] }))
         return { success: true, message: "Product created successfully" }
      } else {
         return { success: false, message: data.message }
      }
   },
   getProducts: async () => {
      const response = await fetch("/api/products")
      const data = await response.json()
      set(() => ({ products: data.data }))
   },
   deleteProduct: async (PId) => {
      const res = await fetch(`/api/products/${PId}`, {
         method: "DELETE",
      })
      const data = await res.json()
      if (!data.success) return { success: false, message: data.message }

      // update the ui immediately, without needing a refresh
      set((state) => ({
         products: state.products.filter((product) => product._id !== PId),
      }))
      return { success: true, message: data.message }
   },
   updateProduct: async (PId, updatedProduct) => {
      const res = await fetch(`/api/products/${PId}`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(updatedProduct),
      })
      const data = await res.json()
      if (!data.success) return { success: false, message: data.message }

      // update the ui immediately, without needing a refresh
      set((state) => ({
         products: state.products.map((product) =>
            product._id === PId ? data.data : product
         ),
      }))

      return { success: true, message: data.message }
   },
}))

export default useProductStore
