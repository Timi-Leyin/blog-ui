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
} from "@chakra-ui/react";

import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaEnvelopeOpen } from "react-icons/fa";
import Socials from "./Socials";

const Footer = () => {
  return (
    <Box>
      <Grid
        py={10}
        gap={6}
        className="footer"
        templateColumns={"repeat(3, 1fr)"}
        px={10}
      >
        <GridItem>
          <Box w="300px">
            <Heading className="anton">.newz</Heading>
            <Text fontWeight={"bold"} my={3}>
              Newz - Create blog and Magazine theme with NextJS
            </Text>
            <Text mb={5} fontSize={"14px"}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse at
              neque accusamus ullam in omnis?
            </Text>
            <Socials />
          </Box>
        </GridItem>

        <GridItem>
          <Text fontSize={"x-large"} className="anton">
            Category
          </Text>
          <Flex mt={5} gap={1} direction={"column"}>
            <Link>Lifestyle</Link>
            <Link>Food</Link>
            <Link>Technology</Link>
            <Link>Celebrity</Link>
            <Link>Travel</Link>
            <Link>Politics</Link>
            <Link>Education</Link>
          </Flex>
        </GridItem>
        <GridItem>
          <Text fontSize={"x-large"} className="anton">
            Help Center
          </Text>
          <Flex mt={5} gap={1} direction={"column"}>
            <Link>About</Link>
            <Link>Authors</Link>
            <Link>Help</Link>
            <Link>Contact</Link>
          </Flex>
        </GridItem>
        {/* <GridItem>
          <Box
            bg="gray.900"
            w="full"
            p={7}
            h="max-content"
            borderRadius={"15px"}
          >
            <Heading className="anton" fontSize={"large"}>
              Newsletter
            </Heading>
            <Text my={2}>
              Subscribe to our newsletter & get the best blog stories into your
              inbox.
            </Text>
            <Box>
              <Flex gap={2} align={"center"}>
                <Icon as={AiOutlineUser} />
                <Input h="50px" placeholder="Full Name" name="full_name" />
              </Flex>
              <Flex my={5} gap={2} align={"center"}>
                <Icon as={FaEnvelopeOpen} />
                <Input
                  h="50px"
                  placeholder="Email Address"
                  name="email"
                  type="email"
                />
              </Flex>
              <Flex gap={2}>
                <input type="checkbox" />
                <Text>
                  By clicking, you have agreed to our{" "}
                  <Link textDecoration={"underline"} color="blue.300">
                    {" "}
                    Policy
                  </Link>
                </Text>
              </Flex>
              <Button
                my={4}
                h="50px"
                borderRadius={"full"}
                w="full"
                bg="darkorange"
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </GridItem> */}
      </Grid>
      <Text py={3} textAlign={"center"}>
        <span>&copy;</span> 2023 Copyright - <b>.newz</b>. All Rights Reserved -{" "}
        <em>Designed by Timi-Leyin</em>
      </Text>
    </Box>
  );
};

export default Footer;
