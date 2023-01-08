import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Brenden Smith | Software Engineer" />
        <meta name="og:title" content="Brenden Smith | Software Engineer" />
        <meta
          name="og:description"
          content="The portfolio of Brenden Smith"
        />
        <meta
          name="og:image"
          content="https://avatars.githubusercontent.com/u/61305154?v=4"
        />
        <meta name="og:url" content="https://brenden-smith.com" />
      </head>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
