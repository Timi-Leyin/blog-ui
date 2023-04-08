import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

const Categories = () => {
  return (
    <Box
      p={10}
      // my={10}
      className="top-categories"
      bg="whatsapp.100"
      color="#000"
      borderBottomRadius={"20px"}
    >
      <Text mb={8}>Top Categories</Text>
      <Flex className="anton" flexWrap={"wrap"} gap={10} justify="center">
        <Heading fontSize={"4rem"}>
          <Link>Lifestyle</Link>
        </Heading>
        <Heading fontSize={"4rem"}>
          <Link>Technology</Link>
        </Heading>
        <Heading fontSize={"4rem"}>
          <Link>Travel</Link>
        </Heading>
        <Heading fontSize={"4rem"}>
          <Link>Business</Link>
        </Heading>
        <Heading fontSize={"4rem"}>
          <Link>Gaming</Link>
        </Heading>
        <Heading fontSize={"4rem"}>
          <Link>Artficial Intelligence</Link>
        </Heading>
        <Heading fontSize={"4rem"}>
          <Link>Sport</Link>
        </Heading>
      </Flex>
    </Box>
  );
};

export default Categories;
