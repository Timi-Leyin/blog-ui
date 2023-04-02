import Aside from "@/components/common/Aside";
import Categories from "@/components/common/Categories";
import Hero from "@/components/common/Hero";
import {
  Box,
  Flex,
  Heading,
  Divider,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Head from "next/head"; 
import News2 from "@/components/common/News2";
import News3 from "@/components/common/News3";
import { Ads, Ads1 } from "@/components/common/Ads";
import Socials from "@/components/common/Socials";
import Newsletter from "@/components/common/Newsletter";
import News1 from "@/components/common/News1";
import HotTags from "@/components/common/HotTags";
import QuickSurvey from "@/components/common/QuickSurvey";
import Footer from "@/components/common/Footer";
import { GetRequest } from "@/utils/request";
import { useEffect, useState } from "react";
import randomize from "@/utils/randomize"; 

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const { status, statusText, data } = await GetRequest("/posts?populate=*");
      console.log(process.env.NEXT_PUBLIC_TOKEN)
      if (status == 200) {
        setPosts(data.data);
      }
    })();
  }, []);

  console.log(posts);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      {posts.length > 0 ? (
        <Box>
          <Flex
            display={"grid"}
            className="top-news"
            gridTemplateColumns="70vw auto"
          >
            <Hero post={posts[randomize(posts.length)]} />
            <Aside post={posts[randomize(posts.length)]} />
          </Flex>
          <Categories />

          <Box p={10} my={10}>
            <Heading fontSize={"x-large"} className="anton">
              WHAT'S NEW TODAY
            </Heading>

            <Grid
              my={5}
              className="news-content-container"
              templateColumns="400px 1fr 1fr"
            >
              <News2 post={posts[randomize(posts.length)]} />

              <GridItem p={5}>
                <News3 post={posts[randomize(posts.length)]} />
                <Divider my={3} />
                <News3 post={posts[randomize(posts.length)]} />
                <Divider my={3} />
                <Ads />
                <Divider my={3} />
                <News3 post={posts[randomize(posts.length)]} />
              </GridItem>

              <GridItem>
                <Socials />
                <Ads />

                <Newsletter />
              </GridItem>
            </Grid>
          </Box>

          {/* ********************************* */}
          {/* <Ads1 /> */}
          {/* ********************************* */}

          <Box p={10}>
            <News2 post={posts[randomize(posts.length)]} />
          </Box>

          <Grid
            gap={2}
            py={10}
            className="grid-posts-items"
            templateColumns="300px auto 300px"
          >
            <GridItem px={2}>
              <News1 post={posts[randomize(posts.length)]} small={true} />
              <HotTags />
            </GridItem>
            <GridItem>
              <News2 post={posts[randomize(posts.length)]} />
              <News2 post={posts[randomize(posts.length)]} />
            </GridItem>
            <GridItem>
              <QuickSurvey />
              <Ads />
            </GridItem>
          </Grid>

          <Flex p={5} gap={5}>
            <News2 post={posts[randomize(posts.length)]} />
            <News2 post={posts[randomize(posts.length)]} />
            <News2 post={posts[randomize(posts.length)]} />
          </Flex>

          <Footer />
        </Box>
      ) : (
        "Getting Posts"
      )}
    </>
  );
}
