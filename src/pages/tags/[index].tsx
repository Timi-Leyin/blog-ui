import { PostCard } from "@/components";
import postContext from "@/context/postContext";
import { GetRequest } from "@/utils/request";
import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import _ from "lodash";
import Head from "next/head";
import React, { Fragment, useContext } from "react";

export async function getServerSideProps(context) {
  return {
    props: {
      query: context.query.index,
    },
  };
}

const TagsPage = ({ query }) => {
  const posts: any = useContext(postContext);
  const _posts = _.filter(posts.data.data, (o) =>
    o.attributes.tags.match(new RegExp(query, "ig"))
  );
  return (
    <Fragment>
      <Head>
        <title>.News | Tags - {query}</title>
      </Head>
      <Box pt={"10rem"} px={10}>
        <Center
          color="wheat"
          bgImage={
            "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url(/thumbnail.webp)"
          }
          p={10}
          flexDirection={"column"}
        >
          <Text>Tags</Text>
          <Heading
            textTransform={"uppercase"}
            className="typography"
            fontSize={"5xl"}
            mt={2}
          >
            {query}
          </Heading>
        </Center>

        {_posts.length < 1 && (
          <Center flexDir={"column"}>
            <Image src="/empty.webp" />
            <Text fontWeight={"bold"}>Currently not Availble</Text>
          </Center>
        )}

        {posts.loading && "loading..."}

        <Flex my={20} mx={6} justify={"center"} gap={10} className="tag-posts">
          {_posts.map((post, i) => (
            <PostCard key={i} thumbnail post={post} />
          ))}
        </Flex>
      </Box>
    </Fragment>
  );
};

export default TagsPage;
