import "../styles/global/globals.scss";
import "../styles/global/helper.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="يمناك" />
        <meta property="og:image" content="https://i.ibb.co/KGzsVXj/logo1.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="240" />
        <meta property="og:image:height" content="240" />
        <meta property="og:image:alt" content="Display Picture" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
