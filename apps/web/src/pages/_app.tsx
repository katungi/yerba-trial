import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import React from "react";
import "../styles/globals.css";
import 'github-markdown-css/github-markdown.css';
import { ChakraProvider } from "@chakra-ui/react";

const SafeAppContents = ({ Component, pageProps }: AppProps) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  // Lock out users on old versions
  if (window?.yerba?.version < 0.1) {
    return <div>Please update your app</div>;
  }

  // Lock out SSR and browser users
  if (typeof window === "undefined" || !window?.yerba?.version) {
    return <div>Please use the app</div>;
  }

  // Only render if top two conditions pass
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

function AppWrapper(props: AppProps) {
  return (
    <>
      <Head>
        <title>Nota</title>
      </Head>
      <SafeAppContents {...props} />
    </>
  );
}

export default AppWrapper;
