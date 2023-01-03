import { extendTheme, GlobalStyle } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  styles: {
    ...GlobalStyle,
    global: {
      svg: { display: "inline" },
      body: {
        bg: "#282C33",
        color: "white",
        fontFamily: 'Poppins'
      },

    },
  }
});