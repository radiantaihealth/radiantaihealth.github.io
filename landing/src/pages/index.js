import React from "react";
import Layout from "components/layout";
import SEO from "components/seo";
import { StickyProvider } from "contexts/app/app.provider";
import Banner from "sections/banner";
import Blogs from "sections/blogs";
import CallToAction from "sections/call-to-action";
import FAQ from "sections/faq";
import Featured from "sections/featured";
import Jackpot from "sections/jackpot";
import Description from "sections/description";
import CTABasic from "sections/cta-basic";

import Subscribe from "sections/subscribe";
import Testimonials from "sections/testimonials";
import theme from "theme";
import { ThemeProvider } from "theme-ui";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Radiant AI" />
          <Banner />
          <Jackpot />

          <Description />
          <CTABasic></CTABasic>
          {/* <Services /> */}
          {/* <CallToAction />
          <Featured /> */}

          {/* <Testimonials /> */}
          {/* <Blogs /> */}
          <FAQ />
          {/* <Subscribe /> */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
