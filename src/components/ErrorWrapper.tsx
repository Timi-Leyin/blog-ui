import { ErrorWrapperProps } from "@/interface/components";
import { Box, Center } from "@chakra-ui/react";
import React from "react";

const ErrorWrapper = ({ error = false, children }: ErrorWrapperProps) => {
  return error ? <Box>
    <Center w="full" py={"20vh"} fontWeight="bold" h="full">
        NET_ERR | An Error Occured
    </Center>
  </Box> : children;
};

export default ErrorWrapper;
