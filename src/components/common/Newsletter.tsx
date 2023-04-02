import {
  Heading,
  Flex,
  Icon,
  Input,
  Button,
  Link,
  Box,
  Text,
} from "@chakra-ui/react";

import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaEnvelopeOpen } from "react-icons/fa";

const Newsletter = () => {
  return (
    <Box bg="gray.900" w="full" p={7} h="max-content" borderRadius={"15px"}>
      <Heading className="anton" fontSize={"large"}>
        Newsletter
      </Heading>
      <Text my={2}>
        Subscribe to our newsletter & get the best blog stories into your inbox.
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
        <Button my={4} h="50px" borderRadius={"full"} w="full" bg="darkorange">
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default Newsletter;
