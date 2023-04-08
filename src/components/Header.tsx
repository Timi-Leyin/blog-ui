import { Box, Button, Flex, Heading, Icon } from '@chakra-ui/react'
import { HambergerMenu } from 'iconsax-react'
import React from 'react'

const Header = () => {
  return (
   <Box>
    <Flex justify={"space-around"}>
       <Flex align={"center"}>
       <Icon as={HambergerMenu} />
        <Heading className='typography'>.News</Heading>
       </Flex>
       <Button>Contact Us</Button>
    </Flex>
   </Box>
  )
}

export default Header