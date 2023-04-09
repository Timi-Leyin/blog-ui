import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const PostPage = () => {
  return (
    <Box>
      <Box p={10} pt={"13%"} bg="twitter.300">
        <Text fontWeight={"bold"}>April 23rd 2023</Text>
        <Heading my={6} fontSize={"7xl"} className="typography">
          Understanding native advertising through pinterst
        </Heading>
        <Flex gap={10}>
          <Box>
            <Text>Posted By:</Text>
            <Text fontWeight={"bold"} fontSize="2xl">
              OriginalTimi
            </Text>
          </Box>
          <Box>
            <Text>Category</Text>
            <Text fontWeight={"bold"} fontSize="2xl">
              Design Campaign
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box className="thumbnail">
        <Image pointerEvents={"none"} src="/thumbnail.webp" w="full" maxH="70vh" objectFit={"cover"} />
        <em>Image Caption</em>
      </Box>

      <Box className="content"></Box>
    </Box>
  );
};

export default PostPage;
