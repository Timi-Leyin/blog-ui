import { Header } from "@/components";
import { PostProvider } from "@/context/postContext";
import _ from "lodash";
import Head from "next/head";
export default function Home() {
  return (
   <PostProvider>
    <Head>
      <title>.Newz | Home</title>
    </Head>
    <>
    <Header />
    </>
   </PostProvider>
  );
}
