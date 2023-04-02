import {
  Flex,
  Tag,
  Icon,
  Heading,
  Divider,
  UnorderedList,
  ListItem,
  Text,
  Box,
  Image,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { FaBookOpen } from "react-icons/fa";

const News1 = ({ post:{attributes}, title = "BREAKING NEWS", small }: any) => {
  return (
    <Box px={small ? 2 : 10} my={small ? 2 : 20}>
      <Text className="anton">{title}</Text>
      {/*  */}
      <Box>
        <Image
          my={5}
          borderRadius={"20px"}
          h="250px"
          w="100%"
          objectFit={"cover"}
          src={process.env.NEXT_PUBLIC_API_BASE + attributes.thumbnail.data.attributes.url}
          alt={""}
        />
        <Flex align={"center"} gap={4}>
          {" "}
          <Tag>{attributes.category}</Tag>
          <Flex align={"center"} gap={2}>
            <Icon as={FaBookOpen} />
            <Text>5 mins Read</Text>
          </Flex>
        </Flex>
        <Heading
          my={2}
          fontSize={small ? "large" : "xx-large"}
          className="anton"
        >
          <Link href={"post/" + attributes.slug}>{attributes.title}</Link>
        </Heading>
        <Divider />
      </Box>
      {/*  */}
      <UnorderedList>
        <ListItem my={5} fontWeight="bold" fontSize={small ? "14px" : "large"}>
          <Link> TOP to NFT Token in 2023</Link>
        </ListItem>
        <ListItem my={5} fontWeight="bold" fontSize={small ? "14px" : "large"}>
          <Link> Sabinus Goes to London</Link>
        </ListItem>
      </UnorderedList>
      <Link textDecoration={"underline"}>All Breaking News &gt;</Link>
    </Box>
  );
};

export default News1;
