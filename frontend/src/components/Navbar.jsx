import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react"
import React from "react"
import { FaRegPlusSquare } from "react-icons/fa"
import { IoMoon } from "react-icons/io5"
import { LuSun } from "react-icons/lu"
import { Link } from "react-router-dom"
import { useColorMode } from "./ui/color-mode"

const Navbar = () => {
   const { colorMode, toggleColorMode } = useColorMode()

   return (
      <Container maxW={"1140px"} px={4}>
         <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
               base: "column",
               sm: "row",
            }}
         >
            <Text
               fontSize={{ base: "22px", sm: "28px" }}
               fontWeight={"bold"}
               textTransform={"uppercase"}
               textAlign={"center"}
               bgGradient="to-r"
               gradientFrom="cyan.400"
               gradientTo="blue.600"
               bgClip={"text"}
            >
               <Link to={"/"}>Product Store 🛒</Link>
            </Text>

            <HStack spacing={2} alignItems={"center"}>
               <Link to={"/create"}>
                  <Button variant={"outline"}>
                     <FaRegPlusSquare fontSize={20} />
                  </Button>
               </Link>
               <Button onClick={toggleColorMode} variant={"outline"}>
                  {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
               </Button>
            </HStack>
         </Flex>
      </Container>
   )
}

export default Navbar
