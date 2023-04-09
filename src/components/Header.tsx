import { Box, Button, Flex, Heading, Icon } from "@chakra-ui/react";
import {
  Facebook,
  Google,
  HambergerMenu,
  Instagram,
  Twitch,
  Youtube,
} from "iconsax-react";
import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <Box px={10}>
      <Flex justify={"space-between"} p={5} align="center">
        <Flex align={"center"} gap={5}>
          <Icon as={HambergerMenu} fontSize={40} cursor={"pointer"} />
          <Link href="/">
            <Heading as={motion.h1} layout className="typography">
              .News Blog
            </Heading>
          </Link>
        </Flex>
        {/* <Button>Contact Us</Button> */}
        <Flex gap={5}>
          <Link href={""} title="Follow us on :::::::">
            {" "}
            <Icon variant="Bold" as={Facebook} />
          </Link>
          <Link href={""} title="Follow us on :::::::">
            {" "}
            <Icon variant="Bold" as={Instagram} />
          </Link>
          <Link href={""} title="Follow us on :::::::">
            {" "}
            <Icon variant="Bold" as={Youtube} />
          </Link>
          <Link href={""} title="Follow us on :::::::">
            {" "}
            <Icon variant="Bold" as={Twitch} />
          </Link>
          <Link href={""} title="Follow us on :::::::">
            {" "}
            <Icon variant="Bold" as={Google} />
          </Link>
        </Flex>
      </Flex>
      <Nav />
    </Box>
  );
};

export default Header;
