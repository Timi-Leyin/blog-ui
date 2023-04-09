import { Box, Divider, Heading, Image,Tag,Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const PostCard = ({thumbnail= false,fontSize,textSize}:PostCardProps) => {
  return (
    <Box>
       {thumbnail &&  <Image src="/thumbnail.webp" />}
       <Box my={3}>
       {/* <Divider border="2px solid black" /> */}
        <Heading py={3} className='typography' fontSize={fontSize}>E-Learning App design and How to make it Better</Heading>
        {/* <Divider border="2px solid black" /> */}
       </Box>
       <Tag>Category</Tag>
       <Text my={3} fontSize={textSize}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae atque assumenda expedita culpa, quasi similique incidunt facere soluta doloremque voluptas libero numquam dolorem voluptatem voluptatibus, ex, eum officiis commodi fugit harum dolorum error. Ipsa eveniet quis asperiores nihil corporis!
       </Text>
       <Box as={Link} py={3} fontWeight="bold" display="inline-block" href="/post/post-slug-here">Read more</Box>
       <Divider border="1px solid black" />
    </Box>
  )
}

export default PostCard