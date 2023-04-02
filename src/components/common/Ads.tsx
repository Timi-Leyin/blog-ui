import { Box } from "@chakra-ui/react";
import React from "react";

const Ads1 = () => {
  return (
    <Box bg="whatsapp.100" h="400px" p={10}>
      <Box h="80%" p={5} my={5} w="full" bg="gray.900">
        <em> - Advertisment</em>
      </Box>
    </Box>
  );
};

export const Ads = () => {
  return (
    <Box h="100px" p={5} my={5} w="full" bg="gray.900">
      <em> - Advertisment</em>
    </Box>
  );
};

export { Ads1 };
