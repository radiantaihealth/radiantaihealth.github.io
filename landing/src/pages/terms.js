import React from "react";
import Layout from "components/layout";
import SEO from "components/seo";
import { StickyProvider } from "contexts/app/app.provider";
import ToU from "sections/terms/tou";
import theme from "theme";
import { ThemeProvider } from "theme-ui";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Radiant AI | Technology" />
          <ToU />

        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
