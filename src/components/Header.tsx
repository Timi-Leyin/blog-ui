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
import React, { Fragment, useState } from "react";
import Nav from "./Nav";
import { motion } from "framer-motion";
import Menu from "./Menu";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <Box px={8} zIndex={10} className="header" pos="absolute" w="full">
        <Flex justify={"space-between"} p={5} align="center">
          <Flex align={"center"} className="header-left" gap={5}>
            <Icon as={HambergerMenu} onClick={() => setOpen(!isOpen)} fontSize={35} cursor={"pointer"} />
            <Link href="/">
              <Heading as={motion.h1} layout className="typography">
                .News Blog
              </Heading>
            </Link>
          </Flex>
          {/* <Button>Contact Us</Button> */}
          <Flex gap={5} className="social-media">
            <Link href={"/"} title="Follow us on :::::::">
              {" "}
              <Icon variant="Bold" as={Facebook} />
            </Link>
            <Link href={"/"} title="Follow us on :::::::">
              {" "}
              <Icon variant="Bold" as={Instagram} />
            </Link>
            <Link href={"/"} title="Follow us on :::::::">
              {" "}
              <Icon variant="Bold" as={Youtube} />
            </Link>
            <Link href={"/"} title="Follow us on :::::::">
              {" "}
              <Icon variant="Bold" as={Twitch} />
            </Link>
            <Link href={"/"} title="Follow us on :::::::">
              {" "}
              <Icon variant="Bold" as={Google} />
            </Link>
          </Flex>
        </Flex>
        <Nav />
      </Box>
      <Menu setOpen={setOpen} isOpen={isOpen} />
    </Fragment>
  );
};

export default Header;
