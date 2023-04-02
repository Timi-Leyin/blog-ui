import { Flex, Tag, Box, Text } from "@chakra-ui/react";
import React from "react";

const HotTags = () => {
  return (
    <Box bg="#000" borderRadius="20px" m={2} p={5}>
      <Text className="anton">Hot Tags</Text>
      <Flex my={5} wrap={"wrap"} gap={2}>
        <Tag>Sponsored</Tag>
        <Tag>Fashion</Tag>
        <Tag>Spiritual</Tag>
        <Tag>Music</Tag>
        <Tag>Celebrity</Tag>
        <Tag>Education</Tag>
        <Tag>Lifestyle</Tag>
      </Flex>
    </Box>
  );
};

export default HotTags;
