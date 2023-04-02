import { Button, Flex, Square } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaEnvelopeOpen, FaSearch } from "react-icons/fa";

const SidebarHeader = () => {
  return (
    <Flex
      pos="absolute"
      top={0}
      w="full"
      //   float="right"
      align={"center"}
      justify={"flex-end"}
      px={8}
      py={3}
    >
      <Flex gap={5}>
        <Button leftIcon={<FaEnvelopeOpen />}>Subscribe</Button>
        <Square size="40px">
          <FaSearch />
        </Square>
      </Flex>
    </Flex>
  );
};

export default SidebarHeader;
