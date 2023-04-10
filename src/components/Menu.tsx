import { Box, Flex, Heading,Text, Input } from "@chakra-ui/react";
import { SearchNormal, SearchNormal1 } from "iconsax-react";
import Link from "next/link";
import React from "react";
import PostCardSkeleton from "./PostCardSkeleton";

const Menu = () => {
  return (
    <Box zIndex={20} position={"fixed"} h="full" w="full" bg={"#eee"}>
      <Heading>
        <Flex cursor={"pointer"} gap={5} p={10}>
          <span>&times;</span>
          Close
        </Flex>
      </Heading>
      <Flex justifyContent={"space-around"}>
        <Link href={""}>About us</Link>
       <Box>
        <Text fontWeight="bold">Follow us</Text>
       <Flex my={4} gap={4}>
        <Link href={""}>Twitter</Link>
        <Link href={""}>Facebook</Link>
        <Link href={""}>Instagram</Link>
        </Flex>
       </Box>
      </Flex>
      <Flex align={"center"} maxW="500px" mx="auto" gap={2} py={1}>
        <Input h="50px" placeholder="Search Anything" />
        {/* <SearchNormal /> */}
      </Flex>


      <Box p={10}>
            <PostCardSkeleton />
      </Box>
    </Box>
  );
};

export default Menu;
