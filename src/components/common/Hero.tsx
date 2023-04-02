import truncate from "@/utils/truncate";
import {
  Flex,
  Tag,
  Heading,
  Square,
  Icon,
  Box,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Header from "./Header";

const Hero = ({ post:{attributes} }: any) => {
  // const html = document.createElement("div");
  // html.innerHTML = post.content;
  return (
    <Flex
      h="100vh"
      bg="darkorange"
      bgImage={`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('${
        process.env.NEXT_PUBLIC_API_BASE + attributes.thumbnail.data.attributes.url
      }')`}
      bgRepeat={"no-repeat"}
      bgSize="cover"
      bgPos="center"
      p={5}
      // w="70vw"
      className="hero"
      pos="relative"
      justifyContent={"flex-end"}
      direction="column"
    >
      <Header />
      <Box>
        <Box>
          <Flex gap={3}>
            <Tag>{attributes.category}</Tag>
          </Flex>
          <Heading my={3} className="anton" fontSize={"60px"} maxW="600px">
            {attributes.title}
          </Heading>
          <Text maxW="500px">
            {/* {truncate(html.textContent)} */}
            <Link
              href={"post/" + attributes.slug}
              textDecoration={"underline"}
              color="blue.300"
            >
              {" "}
              Read more
            </Link>
          </Text>
        </Box>
        <Flex gap={5} mt={5}>
          <Square
            cursor={"pointer"}
            size={50}
            bg="whiteAlpha.700"
            color="#000"
            borderRadius={"full"}
          >
            <Icon as={FaArrowLeft} />
          </Square>
          <Square
            cursor={"pointer"}
            size={50}
            bg="whiteAlpha.700"
            color="#000"
            borderRadius={"full"}
          >
            <Icon as={FaArrowRight} />
          </Square>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Hero;
