import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  public render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            html, body {
              margin; 0 auto;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              letter-spacing: normal;
            }
            *, *::before, *::after {
              box-sizing: border-box;
            }
            a {
              text-decoration: none;
            }
          `}</style>
        </body>
      </html>
    );
  }
}
