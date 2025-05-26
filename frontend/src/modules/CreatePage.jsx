import {
   Box,
   Button,
   Container,
   Heading,
   Input,
   Text,
   VStack,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { useColorModeValue } from "../components/ui/color-mode"
import useProductStore from "../store/product"

const CreatePage = () => {
   const { createProduct } = useProductStore()

   const [product, setProduct] = useState({
      name: "",
      price: "",
      image: "",
   })
   const [message, setMessage] = useState({
      success: false,
      message: "",
   })
   const [isLoading, setIsLoading] = useState(false)

   const handleSubmit = async (e) => {
      e.preventDefault()
      setIsLoading(true)
      const { success, message } = await createProduct(product)

      if (success) {
         setProduct({ name: "", price: "", image: "" })
         setMessage({ success: true, message: message })
         setTimeout(() => {
            setMessage({ success: false, message: "" })
         }, 3000)
      } else {
         setMessage({ success: false, message: message })
      }
      setIsLoading(false)
   }

   const handleChange = (e) => {
      setProduct({ ...product, [e.target.name]: e.target.value })
   }

   return (
      <Container maxW={"container.sm"}>
         <VStack gap={4}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
               Create new Product
            </Heading>

            <Box
               w={"full"}
               bg={useColorModeValue("white", "gray.950")}
               p={6}
               rounded={"lg"}
               shadow={"md"}
            >
               <form onSubmit={handleSubmit}>
                  <VStack spaceY={4}>
                     <Input
                        placeholder="Name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        variant={"outline"}
                     />

                     <Input
                        placeholder="Price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        variant={"outline"}
                     />

                     <Input
                        placeholder="Image URL"
                        name="image"
                        value={product.image}
                        onChange={handleChange}
                        variant={"outline"}
                     />

                     <Button type="submit" w={"full"} isLoading={isLoading}>
                        {isLoading ? "Creating..." : "Create"}
                     </Button>

                     {message.message && (
                        <Text
                           me={"auto"}
                           color={message.success ? "green" : "red"}
                        >
                           {message.message}
                        </Text>
                     )}
                  </VStack>
               </form>
            </Box>
         </VStack>
      </Container>
   )
}

export default CreatePage
