import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import useProductStore from "../store/product"

const HomePage = () => {
   const { products, getProducts } = useProductStore()

   useEffect(() => {
      getProducts()
   }, [getProducts])

   return (
      <Container maxW="container.xl" py={12}>
         <VStack spacing={8}>
            <Text
               fontSize={"30px"}
               fontWeight={"bold"}
               textAlign={"center"}
               bgGradient="to-r"
               gradientFrom="cyan.400"
               gradientTo="blue.600"
               bgClip={"text"}
               mb={20}
            >
               Current Products 🚀
            </Text>

            <SimpleGrid
               columns={{
                  base: 1,
                  md: 2,
                  lg: 3,
               }}
               gap={8}
               w={"full"}
            >
               {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
               ))}
            </SimpleGrid>

            {products.length === 0 && (
               <Text
                  fontSize="xl"
                  textAlign={"center"}
                  fontWeight="bold"
                  color="gray.500"
               >
                  No products found 😢{" "}
                  <Link to={"/create"}>
                     <Text
                        as="span"
                        color="blue.500"
                        _hover={{ textDecoration: "underline" }}
                     >
                        Create a product
                     </Text>
                  </Link>
               </Text>
            )}
         </VStack>
      </Container>
   )
}

export default HomePage
