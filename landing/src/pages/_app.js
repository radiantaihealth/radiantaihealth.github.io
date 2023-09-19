import React from "react";
import { initGA, logPageView } from "analytics";
import Router from "next/router";
import "rc-drawer/assets/index.css";
import { useEffect } from "react";
import "swiper/swiper-bundle.min.css";
import "typeface-dm-sans";

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on("routeChangeComplete", logPageView);
  }, []);

  return <Component {...pageProps} />;
}
