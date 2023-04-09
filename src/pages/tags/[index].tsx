import { GetRequest } from '@/utils/request'
import { Box, Center, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export async function getServerSideProps(context){
const {status, data, statusText } = await GetRequest("/posts")
  return{
    props:{
      query:context.query.index
    }
  }
}

const TagsPage = ({query}) => {
  return (
  <Box px={10}>
   <Center color="wheat" bgImage={"linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url(/thumbnail.webp)"} p={10} flexDirection={"column"}>
   <Text>Tags</Text>
    <Heading textTransform={"uppercase"} className="typography" fontSize={"5xl"} mt={2}>{query}</Heading>
   </Center>

   <Center flexDir={"column"} >
    <Image src="/empty.webp" />
    <Text fontWeight={"bold"}>Currently not Availble</Text>
   </Center>
  </Box>
  )
}

export default TagsPage