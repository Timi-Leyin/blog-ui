import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const QuickSurvey = () => {
  return (
    <Box bg="#000" p={6} m={2} borderRadius="20px">
      <Text className="anton">Quick Survey</Text>
      <Heading my={3} className="aton" fontSize={"large"}>
        How was your Experience on News?
      </Heading>
      <Box my={3}>
        <Flex gap={2}>
          <input type="radio" name="good" />
          <Text fontSize={"14px"}>Awesome, i'm satisfied 😍</Text>
        </Flex>
        <Flex gap={2}>
          <input type="radio" name="good" />
          <Text fontSize={"14px"}>No, i'm not satisfied 🤭</Text>
        </Flex>
        <Flex gap={2}>
          <input type="radio" name="good" />
          <Text fontSize={"14px"}>Not Sure 🤔</Text>
        </Flex>
      </Box>
      <Flex gap={4}>
        <Button bg="darkorange" borderRadius={"full"}>
          Previous
        </Button>
        <Button bg="black" borderRadius={"full"}>
          Next
        </Button>
      </Flex>

      <Text my={2}>
        <b>2,667 </b> Answered
      </Text>
    </Box>
  );
};

export default QuickSurvey;
