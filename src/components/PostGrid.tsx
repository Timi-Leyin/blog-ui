import { PostGridProps } from "@/interface/components";
import { Box, Flex, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { PostCard } from ".";
import _ from "lodash";
const PostGrid = ({ posts }: PostGridProps) => {
  const shuffled = _.shuffle(posts.data);
  console.log("Shuffled", shuffled);
  return (
    <Grid
      my={10}
      className="post-grid"
      templateColumns={"300px auto 300px"}
      gap={10}
    >
      <GridItem>
        {shuffled.map(
          (post, i) =>
            i % 2 == 1 && (
              <PostCard post={post} key={i} fontSize="2xl" textSize="14px" />
            )
        )}
      </GridItem>
      <GridItem>
        {shuffled.map(
          (post, i) =>
            i % 2 == 0 && (
              <PostCard post={post} thumbnail={_.random(0, 1) == 1} key={i} />
            )
        )}
      </GridItem>
      <GridItem>
        <PostCard post={shuffled[0]} fontSize="2xl" textSize="14px" />
      </GridItem>
    </Grid>
  );
};

export default PostGrid;
