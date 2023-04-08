import { Box, Flex, Heading, Icon, Image, Link, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { FaBookOpen } from "react-icons/fa";
interface PostCardProps{
    HFontSize?:number | string;
    PFontSize?:number | string
}

const PostCard = ({HFontSize,PFontSize}:PostCardProps) => {
  return (
    <Box>
      <Image w={"100%"} h="250px" objectFit={"cover"} src="thumbnail.webp" />
      <Box my={5}>
        <Flex gap={5} align="center">
          <Tag>Health</Tag>
          <Flex align={"center"} gap={2}>
            <Icon as={FaBookOpen} />
            <Text>5 mins Read</Text>
          </Flex>
        </Flex>
        <Heading fontSize={HFontSize} my={3} className="anton">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
          voluptas.
        </Heading>
        <Text fontSize={PFontSize}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nemo
          itaque, beatae sapiente necessitatibus recusandae dolores obcaecati in
          adipisci mollitia non minus vitae. Officia eaque illum qui!{" "}
          <Link textDecoration={"underline"}> Read more</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default PostCard;
