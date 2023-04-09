import appConfig from "@/configs/app";
import { Box, Divider, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { motion } from "framer-motion";
const Nav = () => {
  const location = useRouter().asPath;
  return (
    <Box as="nav">
      <Divider />
      <Flex p={5} gap={10}>
        {appConfig.links.map((link, i) => (
          <Box as={Link} pos="relative" href={link.href} key={i}>
            {location == link.href && (
              <Box
                as={motion.span}
                layoutId="underline"
                w="100%"
                h="2px"
                top="-90%"
                bg="blackAlpha.500"
                display={"inline-block"}
                pos="absolute"
              />
            )}
            <Box as="span" fontWeight={location == link.href && "bold"}>
              {link.label}
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Nav;
