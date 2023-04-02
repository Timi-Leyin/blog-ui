import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Flex
      pos="absolute"
      top={0}
      w="90%"
      align={"center"}
      justify={"space-between"}
      px={10}
      py={3}
    >
      <Heading className="anton">.newz</Heading>
      <Flex gap={5}>
        <Link>Home</Link>
        <Link>Fashion</Link>
        <Link>Technology</Link>
      </Flex>
    </Flex>
  );
};

export default Header;
