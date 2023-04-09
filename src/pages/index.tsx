import {
  ErrorWrapper,
  PostCard,
  PostCardSkeleton,
  PostGrid,
  PostGridLoader,
} from "@/components";
import postContext, { PostProvider } from "@/context/postContext";
import { Box, Flex, Grid, GridItem, Spinner } from "@chakra-ui/react";
import _ from "lodash";
import Head from "next/head";
import { useContext } from "react";
export default function Home() {
  const posts: any = useContext(postContext);
  // console.log(posts);
  return (
    // <PostProvider>
    <>
      <Head>
        <title>.Newz | Home</title>
      </Head>
      <Box px={10} pt={"20vh"}>
        {posts.loading ? (
          <PostGridLoader />
        ) : (
          <ErrorWrapper error={posts.error}>
            <PostGrid posts={posts.data} />
          </ErrorWrapper>
        )}
      </Box>
    </>
    // </PostProvider>
  );
}
