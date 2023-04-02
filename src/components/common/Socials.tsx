import { GridItem, Heading, Flex, Tag, Link, Box } from "@chakra-ui/react";
import React from "react";

const Socials = () => {
  return (
    <>
      <Heading className="anton" fontSize={"large"}>
        STAY CONNECTED
        <Box my={5}></Box>
      </Heading>
      <Flex gap={3} flexWrap="wrap">
        <Link>
          <Tag>Facebook</Tag>
        </Link>
        <Link>
          {" "}
          <Tag>Twitter</Tag>
        </Link>
        <Link>
          {" "}
          <Tag>Youtube</Tag>
        </Link>
        <Link>
          {" "}
          <Tag>Instagram</Tag>
        </Link>
        <Link>
          {" "}
          <Tag>Pinterest</Tag>
        </Link>
      </Flex>
    </>
  );
};

export default Socials;
