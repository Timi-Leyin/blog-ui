import { Box, Flex, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { PostCard, PostCardSkeleton } from ".";

const PostGridLoader = () => {
  return (
    <Grid my={10} className="post-grid post-grid-loader" templateColumns={"300px auto 300px"} gap={10}>
      <GridItem>
        {/* <PostCard fontSize="2xl" textSize="14px" thumbnail={true} />
      <PostCard fontSize="2xl" textSize="14px" /> */}
        <PostCardSkeleton />
        <PostCardSkeleton thumbnail={true} />
      </GridItem>
      <GridItem>
        {/* <PostCard thumbnail={true} /> */}
        <PostCardSkeleton thumbnail={true} />
        <PostCardSkeleton />
      </GridItem>
      <GridItem>
        {/* <PostCard fontSize="2xl" textSize="14px" /> */}
        <PostCardSkeleton />
        <PostCardSkeleton thumbnail={true} />
      </GridItem>
    </Grid>
  );
};

export default PostGridLoader;
