import appConfig from "@/config/app";
import { Box, Flex, Heading, Link, Square } from "@chakra-ui/react";
import { HambergerMenu, Menu } from "iconsax-react";
import React from "react";

const Header = () => {
  return (
    <Flex
      pos="absolute"
      top={2}
      className="top-header"
      w="90%"
      mx="auto"
      align={"center"}
      backdropFilter="blur(10px)"
      justify={"space-between"}
      bg="blackAlpha.600"
      color="white"
      borderRadius={"full"}
      px={10}
      py={3}
    >
      <Heading className="anton">.newz</Heading>
      <nav>
        <Flex className="navigation-links" gap={5}>
          {appConfig.links.map((link, i) => (
            <Link fontSize={"14px"} href={link.href} key={i}>
              {link.label}
            </Link>
          ))}
        </Flex>
        <Square display={"none"} className="menu" size={"40px"} cursor="pointer" borderRadius="full" bg="white">
          <Menu color="black" variant="Bold" size={15} />
        </Square>
      </nav>
    </Flex>
  );
};

export default Header;
