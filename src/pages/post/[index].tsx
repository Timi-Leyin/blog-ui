import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import News1 from "@/components/common/News1";
import News2 from "@/components/common/News2";
import News3 from "@/components/common/PostCardSm";
import Socials from "@/components/common/Socials";
import { GetRequest } from "@/utils/request";
import { marked } from "marked";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Link,
  Spinner,
  Tag,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaBookOpen } from "react-icons/fa";

const index = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<any>({});
  const [html, setHtml] = useState("");
  const slug = router.query.index;

  useEffect(() => {
    if (typeof slug != "undefined") {
      (async () => {
        const url = `/posts?populate=*&filters[slug][$eqi]=${slug}`;
        const { status, data } = await GetRequest(url);

        if (status === 200) {
          setPost(data.data[0].attributes);
          setIsLoading(false);
        }
      })();
    }
  }, [slug]);
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      {isLoading ? (
        <Heading p={10}><Spinner /></Heading>
      ) : (
        <>
          <Box mx="20">
            <Header />
            <br />
            <br />
            <br />
          </Box>
          <Grid py={30} px={10}>
            <Flex gap={10}>
              <Box flex={1}>
                <Flex align="center" my={2} justify={"space-between"}>
                  <Flex gap={2} my={3}>
                    <Tag>{post.category}</Tag>
                    <Flex align={"center"} gap={2}>
                      <Icon as={FaBookOpen} />
                      <Text>5 mins Read</Text>
                    </Flex>
                  </Flex>

                  <Tag>{post.author}</Tag>
                </Flex>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_API_BASE +
                    post.thumbnail.data.attributes.url
                  }
                  h="60vh"
                  objectFit={"cover"}
                  w="100%"
                />

                <Heading maxW="700px" fontSize={"xxx-large"} py={10}>
                  {post.title}
                </Heading>
                <Socials />

                <Box>
                  <Heading my={2} fontSize={"14px"}>
                    Share Post
                  </Heading>
                  <Link>
                    <Tag>Whatsapp</Tag>
                  </Link>
                </Box>

                <Box
                  my={8}
                  dangerouslySetInnerHTML={{
                    __html: marked.parse(post.content),
                  }}
                ></Box>
              </Box>
              {/* <Box>
            <News3 post={{
              attributes:post
            }} />
            </Box> */}
            </Flex>
        
          </Grid>
          <Box>
            <Footer />
          </Box>
        </>
      )}
    </>
  );
};

export default index;
