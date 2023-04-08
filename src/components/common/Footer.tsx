import appConfig from "@/config/app";
import {
  GridItem,
  Heading,
  Flex,
  Icon,
  Input,
  Button,
  Grid,
  Text,
  Box,
  Link,
  Center,
} from "@chakra-ui/react";

import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaEnvelopeOpen } from "react-icons/fa";
import Socials from "./Socials";

const Footer = () => {
  return (
    <Box p={6}>
      <Center flexDirection={"column"} textTransform="uppercase" textAlign="center">
        <Heading my={2} className="anton">.News</Heading>
        <Box>
        <Flex gap={4} my={2} justify="center">
            {appConfig.links.map(link=> <Link>{link.label}</Link>)}
          </Flex>
          <Flex gap={4} justify="center">
            {appConfig.footerLinks.map(link=> <Link>{link.label}</Link>)}
          </Flex>
          <Text my={4} fontSize={20} fontWeight="bold">.News is a vox media network</Text>
          <Flex gap={4}  justify="center">
            <Link>ADVERTISE WITH US</Link>
            <Link>SUPPORT</Link>
          </Flex>
          <Text py={5}>
            <span>&copy;</span> 2023 .NEWS. ALL RIGHTS RESERVED
          </Text>
        </Box>
      </Center>
    </Box>
  );
};

export default Footer;
