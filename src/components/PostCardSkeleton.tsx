import { Box, Divider, Heading, Image,Skeleton,SkeletonText,Tag,Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
const PostCardSkeleton = ({thumbnail= false,fontSize,textSize}:PostCardProps)=>{
  return (
    <Box>
    {thumbnail &&  <Skeleton h="300px" />}
    <Box my={3}>
    {/* <Divider border="2px solid black" /> */}
     <Skeleton bg="gray" h="30px" />
     {/* <Divider border="2px solid black" /> */}
    </Box>
    <Skeleton bg="grey" w="60px" my={5} h="15px" />
    
   <SkeletonText my={2} />
   <Skeleton bg="grey" w="50px" my={5} h="10px" />
    {/* <Divider border="1px solid black" /> */}
 </Box>
  )
}

export default PostCardSkeleton