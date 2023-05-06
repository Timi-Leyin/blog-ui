import { Box, Flex, Heading,Text, Input } from "@chakra-ui/react";
import { SearchNormal, SearchNormal1 } from "iconsax-react";
import Link from "next/link";
import React from "react";
import PostCardSkeleton from "./PostCardSkeleton";
import { MenuProps } from "@/interface/components";

const Menu = ({isOpen, setOpen}:MenuProps) => {
  return isOpen && (
    <Box backdropFilter={"blur(10px)"} zIndex={20} position={"fixed"} h="full" w="full" bg={"rgba(255,255,255,.5)"}>
    <Heading>
      <Flex cursor={"pointer"} onClick={()=> setOpen(false)} gap={5} p={10}>
        <span>&times;</span>
        Close
      </Flex>
    </Heading>
    <Flex align={"center"} justifyContent={"space-around"}>
      <Link href={""}>About us</Link>
     <Box>
      <Text fontWeight="bold">Follow us</Text>
     <Flex my={2} gap={4}>
      <Link href={""}>Twitter</Link>
      <Link href={""}>Facebook</Link>
      <Link href={""}>Instagram</Link>
      </Flex>
     </Box>
    </Flex>
    <Flex align={"center"} maxW="500px" mx="auto" gap={2} py={1}>
      <Input border="1px solid #222" h="50px" type="search" name="search" placeholder="Search Anything" />
      {/* <SearchNormal /> */}
    </Flex>


    <Box p={10}>
          <PostCardSkeleton />
    </Box>
  </Box>
  )
};

export default Menu;
