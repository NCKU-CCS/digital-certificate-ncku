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
            html,
            body {
              margin: 0;
              font-size: 16px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              font-family: SegoeUI;
              letter-spacing: normal;
              background-color: #f5f5f5;
            }
            *,
            *::before,
            *::after {
              box-sizing: border-box;
            }
            a {
              text-decoration: none;
            }
            a:hover,
            button:hover {
              cursor: pointer;
            }
            input {
              outline: none;
            }
          `}</style>
        </body>
      </html>
    );
  }
}
