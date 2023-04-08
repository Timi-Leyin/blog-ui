import Categories from "@/components/common/Categories";
import Footer from "@/components/common/Footer";
import Hero from "@/components/common/Hero";
import TopStories from "@/components/common/TopStories";
import postContext from "@/context/postContext";
import Head from "next/head";
import { useContext } from "react";
import _ from "lodash";
import PostSlide from "@/components/common/PostSlide";
import { Spinner } from "@chakra-ui/react";
export default function Home() {
  const usePost: any = useContext(postContext);
  const posts = _.shuffle(usePost.data.data);
  console.log(usePost);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {!usePost.loading ? (
        <>
          <Hero posts={posts} />
          <Categories />
          <TopStories />

          <PostSlide />

          <Footer />
        </>
      ) : (
        <Spinner m={10} />
      )}
    </>
  );
}
