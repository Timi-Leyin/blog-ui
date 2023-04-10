import getThumbnail from "@/utils/getThumbnail";
import { GetRequest } from "@/utils/request";
import { Box, Flex, Heading, Image, Tag, Text } from "@chakra-ui/react";
import { marked } from "marked";
import Head from "next/head";
import React from "react";
import { Palette, usePalette } from "color-thief-react";

export async function getServerSideProps(context) {
  const { status, data, statusText } = await GetRequest(
    "/posts?populate=*&filters[slug][$eqi]=" + context.query.index
  );
  if (status == 200 && data.data.length > 0) {
    return {
      props: {
        data: data.data[0],
        query: context.query.index,
        error: "",
      },
    };
  }
  return {
    props: {
      query: context.query.index,
      notFound: true,
      data: null,
      error: statusText,
    },
  };
}

const PostPage = ({ data, query, error }) => {
  const src = data
    ? getThumbnail(data.attributes.thumbnail).full_url
    : "/thumbnail.webp";
  const palette = usePalette(src, 3, "hex", {
    crossOrigin: process.env.NEXT_PUBLIC_API_BASE,
  });
  return (
    <>
      <Head>
        <title>.News - {data ? data.attributes.title : "Page not Found"}</title>
      </Head>
      <Box>
        <Box
          p={10}
          pt={"10rem"}
          color="white"
          bg={!palette.loading && !palette.error ? palette.data[2] : ""}
        >
          <Text fontWeight={"bold"}>
            {data
              ? new Date(data.attributes.publishedAt).toDateString()
              : new Date().toDateString()}
          </Text>
          <Heading my={6} fontSize={"7xl"} className="typography">
            {data ? data.attributes.title : "Oops !!! 404 Page not Found"}
          </Heading>
          <Flex gap={10}>
            <Box>
              <Text>Posted By</Text>
              <Text fontWeight={"bold"} fontSize="2xl">
                {data ? "-" : "Server"}
              </Text>
            </Box>
            <Box>
              <Text>Category</Text>
              <Text fontWeight={"bold"} fontSize="2xl">
                {data ? data.attributes.category : "Page not Found"}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box className="thumbnail">
          {data ? (
            <>
              <Image
                pointerEvents={"none"}
                src={getThumbnail(data.attributes.thumbnail).full_url}
                w="full"
                maxH="70vh"
                objectFit={"cover"}
              />
              <em>{getThumbnail(data.attributes.thumbnail).caption}</em>
            </>
          ) : (
            <>
              <Image
                pointerEvents={"none"}
                src={"/thumbnail.webp"}
                w="full"
                maxH="70vh"
                objectFit={"cover"}
              />
              <em>404 - Page not Found</em>
            </>
          )}
        </Box>

        {data && (
          <>
            <Box
              className="content"
              p={10}
              dangerouslySetInnerHTML={{
                __html: marked(data.attributes.content),
              }}
            ></Box>
            <Box>
              <Heading className="typography" p={15}>
                Related Posts
              </Heading>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default PostPage;
