import { PostProvider } from "@/context/postContext";
import { Spinner } from "@chakra-ui/react";
import _ from "lodash";
import Head from "next/head";
export default function Home() {
  return (
    <PostProvider>
      <Head>
        <title>.Newz | Home</title>
      </Head>
      <Spinner mx={10} />
    </PostProvider>
  );
}
