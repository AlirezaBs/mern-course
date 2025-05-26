import {
   Box,
   Button,
   Dialog,
   Heading,
   HStack,
   IconButton,
   Image,
   Input,
   Portal,
   Text,
   VStack,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import useProductStore from "../store/product"
import { useColorModeValue } from "./ui/color-mode"
import { toaster } from "./ui/toaster"

const ProductCard = ({ product }) => {
   const [updatedProduct, setUpdatedProduct] = useState(() => product)
   const [isOpen, setIsOpen] = useState(false)

   const textColor = useColorModeValue("gray.600", "gray.200")
   const bg = useColorModeValue("white", "gray.800")

   const { deleteProduct, updateProduct } = useProductStore()

   const handleDeleteProduct = async (pid) => {
      const { success, message } = await deleteProduct(pid)
      if (!success) {
         toaster.create({
            title: "Error",
            description: message,
            type: "error",
            duration: 3000,
            closable: true,
         })
      } else {
         toaster.create({
            title: "Success",
            description: message,
            type: "success",
            duration: 3000,
            closable: true,
         })
      }
   }

   const handleUpdateProduct = async (pid, updatedProduct) => {
      const { success, message } = await updateProduct(pid, updatedProduct)
      if (!success) {
         toaster.create({
            title: "Error",
            description: message,
            type: "error",
            duration: 3000,
            closable: true,
         })
      } else {
         setIsOpen(false)
         toaster.create({
            title: "Success",
            description: "Product updated successfully",
            type: "success",
            duration: 3000,
            closable: true,
         })
      }
   }

   useEffect(() => {
      setUpdatedProduct(product)
   }, [isOpen, product])

   return (
      <Box
         shadow="lg"
         rounded="lg"
         overflow="hidden"
         transition="all 0.3s"
         _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
         bg={bg}
         pt={2}
      >
         <Image
            src={product.image}
            alt={product.name}
            h={48}
            w="full"
            objectFit="contain"
         />

         <Box p={4}>
            <Heading as="h3" size="md" mb={2}>
               {product.name}
            </Heading>

            <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
               ${product.price}
            </Text>

            <Dialog.Root
               placement={"center"}
               open={isOpen}
               onOpenChange={(e) =>
                  e.open ? setIsOpen(true) : setIsOpen(false)
               }
            >
               <HStack spacing={2}>
                  <Dialog.Trigger asChild>
                     <IconButton colorPalette="blue" variant="outline">
                        <FaEdit />
                     </IconButton>
                  </Dialog.Trigger>

                  <IconButton
                     onClick={() => handleDeleteProduct(product._id)}
                     colorPalette="red"
                     variant="outline"
                  >
                     <MdDelete />
                  </IconButton>
               </HStack>

               <Portal>
                  <Dialog.Backdrop />
                  <Dialog.Positioner>
                     <Dialog.Content>
                        <Dialog.Header>Update Product</Dialog.Header>
                        <Dialog.CloseTrigger />
                        <Dialog.Body>
                           <VStack spacing={4}>
                              <Input
                                 placeholder="Product Name"
                                 name="name"
                                 value={updatedProduct.name}
                                 onChange={(e) =>
                                    setUpdatedProduct({
                                       ...updatedProduct,
                                       name: e.target.value,
                                    })
                                 }
                              />
                              <Input
                                 placeholder="Price"
                                 name="price"
                                 type="number"
                                 value={updatedProduct.price}
                                 onChange={(e) =>
                                    setUpdatedProduct({
                                       ...updatedProduct,
                                       price: e.target.value,
                                    })
                                 }
                              />
                              <Input
                                 placeholder="Image URL"
                                 name="image"
                                 value={updatedProduct.image}
                                 onChange={(e) =>
                                    setUpdatedProduct({
                                       ...updatedProduct,
                                       image: e.target.value,
                                    })
                                 }
                              />
                           </VStack>
                        </Dialog.Body>
                        <Dialog.Footer>
                           <Button
                              colorPalette="blue"
                              mr={3}
                              onClick={() =>
                                 handleUpdateProduct(
                                    product._id,
                                    updatedProduct
                                 )
                              }
                           >
                              Update
                           </Button>
                           <Button
                              variant="ghost"
                              onClick={() => {
                                 setIsOpen(false)
                              }}
                           >
                              Cancel
                           </Button>
                        </Dialog.Footer>
                     </Dialog.Content>
                  </Dialog.Positioner>
               </Portal>
            </Dialog.Root>
         </Box>
      </Box>
   )
}
export default ProductCard
