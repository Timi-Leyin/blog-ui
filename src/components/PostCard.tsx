import { PostCardProps } from "@/interface/components";
import getThumbnail from "@/utils/getThumbnail";
import { Box, Divider, Heading, Image, Tag, Text } from "@chakra-ui/react";
import _ from "lodash";
import Link from "next/link";
import React from "react";

const PostCard = ({
  post,
  thumbnail = false,
  fontSize,
  textSize,
}: PostCardProps) => {
  return (
    <Box>
      {thumbnail && (
        <Image src={getThumbnail(post.attributes.thumbnail).full_url} />
      )}
      <Box my={3}>
        {/* <Divider border="2px solid black" /> */}
        <Heading py={3} className="typography" fontSize={fontSize}>
          {post.attributes.title}
        </Heading>
        {/* <Divider border="2px solid black" /> */}
      </Box>
      <Tag>{post.attributes.category}</Tag>
      <Text my={3} fontSize={textSize}>
        {_.truncate(post.attributes.description, {
          length: 100,
        })}
      </Text>
      <Box
        as={Link}
        py={3}
        fontWeight="bold"
        display="inline-block"
        href={`/post/${post.attributes.slug}`}
      >
        Read more
      </Box>
      <Divider border="1px solid black" />
    </Box>
  );
};

export default PostCard;
