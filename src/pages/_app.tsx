import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../configs/theme";
import { NotificationsProvider } from "reapop";
import { PostProvider } from "@/context/postContext";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NotificationsProvider>
        <ChakraProvider theme={theme}>
          <PostProvider>
            <Component {...pageProps} />
          </PostProvider>
        </ChakraProvider>
      </NotificationsProvider>
    </>
  );
}
