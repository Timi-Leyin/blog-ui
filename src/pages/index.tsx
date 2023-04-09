import { PostCard, PostCardSkeleton, PostGridLoader } from "@/components";
import { PostProvider } from "@/context/postContext";
import { Box, Flex, Grid, GridItem, Spinner } from "@chakra-ui/react";
import _ from "lodash";
import Head from "next/head";
export default function Home() {
  return (
    <PostProvider>
      <Head>
        <title>.Newz | Home</title>
      </Head>
      <Box px={10} pt={"20vh"}>
       <PostGridLoader />
      </Box>
    </PostProvider>
  );
}
