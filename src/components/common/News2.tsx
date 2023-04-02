import {
  Heading,
  GridItem,
  Flex,
  Tag,
  Icon,
  Divider,
  Input,
  Button,
  Link,
  Image,
  Box,
  Text,
  Grid,
} from "@chakra-ui/react";

import { AiOutlineUser } from "react-icons/ai";
import { FaBookOpen, FaEnvelopeOpen } from "react-icons/fa";
import truncate from "@/utils/truncate";
const News2 = ({ post:{attributes} }: any) => {
  // const html = document.createElement("div");
  // html.innerHTML = post.content;
  // console.log(truncate(html.textContent));
  return (
    <>
      <GridItem>
        <Image
          borderRadius={"10px"}
          src={process.env.NEXT_PUBLIC_API_BASE + attributes.thumbnail.data.attributes.url}
          w="100%"
          h="300px"
          objectFit={"cover"}
        />{" "}
        <Flex gap={2} my={3}>
          <Tag>{attributes.category}</Tag>
          <Flex align={"center"} gap={2}>
            <Icon as={FaBookOpen} />
            <Text>5 mins Read</Text>
          </Flex>
        </Flex>
        <Heading className="anton">{attributes.title}</Heading>
        <Text maxW="500px" my={2}>
          {truncate(attributes.description)}
        
          <Link
            href={"post/" + attributes.slug}
            display={"block"}
            textDecoration={"underline"}
            color="blue.300"
          >
            Read more
          </Link>
        </Text>
      </GridItem>
    </>
  );
};

export default News2;
