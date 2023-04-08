import {Box, Flex, Grid, Heading} from "@chakra-ui/react"
import PostCard from "./PostCard"

const TopStories = () => {
  return (
    <Box p={12}>
        <Heading className="anton">Top Stories</Heading>
        <Box my={5}>
            <Grid gap={10} templateColumns={["1fr","70% 1fr"]}>
                <PostCard />
                <PostCard PFontSize={"14px"} HFontSize={"x-large"} />
            </Grid>
        </Box>
    </Box>
  )
}

export default TopStories