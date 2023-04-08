import {
  GridItem,
  Flex,
  Tag,
  Icon,
  Heading,
  Divider,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaBookOpen } from "react-icons/fa";

const News3 = ({ post }: any) => {
  return (
    <Flex gap={5}>
      <Box>
        <Flex gap={2} my={3}>
          <Tag>Food & Lifestyle</Tag>
          {/* <Flex align={"center"} gap={2}>
            <Icon as={FaBookOpen} />
            <Text>5 mins Read</Text>
          </Flex> */}
        </Flex>
        <Heading maxW="200px" className="anton" fontSize={"large"}>
         <Link href={"post/"}>Lorem ipsum dolor sit, amet consectetur </Link>
        </Heading>
      </Box>
      <Image
        src={"/thumbnail.webp"}
        w="80px"
        h="60px"
        borderRadius={"10px"}
        objectFit={"cover"}
      />
    </Flex>
  );
};

export default News3;
