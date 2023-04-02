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
          <Flex align={"center"} gap={2}>
            <Icon as={FaBookOpen} />
            <Text>5 mins Read</Text>
          </Flex>
        </Flex>
        <Heading w="200px" className="anton" fontSize={"large"}>
         <Link href={"post/"+post.attributes.slug}>{post.attributes.title}</Link>
        </Heading>
      </Box>
      <Image
        src={process.env.NEXT_PUBLIC_API_BASE + post.attributes.thumbnail.data.attributes.url}
        w="80px"
        h="60px"
        borderRadius={"10px"}
        objectFit={"cover"}
      />
    </Flex>
  );
};

export default News3;
