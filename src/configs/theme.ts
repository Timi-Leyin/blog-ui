import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    primary: "#BDF0E8",
    secondary: "#151936",
    grey: "#EEEEEE",
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
  body: "Georama",
};

const Button: ComponentStyleConfig = {
  baseStyle: {
    _hover: {
      color: "var(--chakra-colors-brand-secondary)",
      background: "var(--chakra-colors-brand-grey)",
    },
  },
};

const components = {
  Button,
};

const theme = extendTheme({ colors, config, fonts, components });

export { theme };
