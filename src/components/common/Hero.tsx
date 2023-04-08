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
import Aside from "./Aside";
import Header from "./Header";

const Hero = ({ posts }: any) => {
  // const html = document.createElement("div");
  // html.innerHTML = post.content;
  console.log(
    process.env.NEXT_PUBLIC_API_BASE +
      posts[0].attributes.thumbnail.data.attributes.url
  );
  console.log(posts);
  return (
    <Flex display={"grid"} className="top-news" gridTemplateColumns="65vw auto">
      <Flex
        h="100vh"
        bg="darkorange"
        color="white"
        bgImage={`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("${
          process.env.NEXT_PUBLIC_API_BASE +
          posts[0].attributes.thumbnail.data.attributes.url
        }")`}
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
              <Tag>{posts[0].attributes.category}</Tag>
            </Flex>
            <Heading
              my={3}
              className="anton title"
              fontSize={"50px"}
              maxW="600px"
            >
              {posts[0].attributes.title}
            </Heading>
            <Text maxW="500px" className="description">
              {truncate(posts[0].attributes.description)}
              <Link
                href={"post/" + posts[0].attributes.slug}
                textDecoration={"underline"}
                color="blue.300"
              >
                {" "}
                Read more
              </Link>
            </Text>
          </Box>
          {/* <Flex gap={5} mt={5}>
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
        </Flex> */}
        </Box>
      </Flex>

      <Aside post={posts} />
    </Flex>
  );
};

export default Hero;
