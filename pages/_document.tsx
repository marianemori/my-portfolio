import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { theme } from "../styles/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="It's portfolio to show Mariane's work"
          />
          <meta property="og:title" content="Mariane's Portfolio" />
          <meta
            property="og:description"
            content="It's portfolio to show Mariane's work"
          />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body style={{ minHeight: "100vh" }}>
          {/* 👇 Here's the script */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
