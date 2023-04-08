import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import PostCard from "./PostCard";
import PostCardSm from "./PostCardSm";
const PostSlide = () => {
  return (
    <Box m={5} gap={10}>
      <Heading py={5} className="anton">Video Blog</Heading>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          // when window width is >= 320px
          600: {
            slidesPerView: 2,
          },
          //   1100: {
          //     slidesPerView: 3,
          //   },
        }}
      >
        <SwiperSlide>
          <PostCard PFontSize={"14px"} HFontSize={"x-large"} />
        </SwiperSlide>
        <SwiperSlide>
          <PostCard PFontSize={"14px"} HFontSize={"x-large"} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <PostCard PFontSize={"14px"} HFontSize={"x-large"} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <PostCard PFontSize={"14px"} HFontSize={"x-large"} />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default PostSlide;
