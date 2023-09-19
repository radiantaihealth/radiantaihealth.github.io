import React from "react";
import { Box, Container, Text } from "theme-ui";
import BlockTitle from "components/block-title";

const Description = () => {
  return (
    <Box as="section" id="description" sx={styles.description}>
      <Container>
        <Text as="p">
          Get the high-yield, expert-reviewed information you need in seconds,
          just by asking for it. Built on top of LLMs,
          RadiantAI Chat allows clinicians and medical professionals to quickly
          ask for up-to-date, high-quality, medical information. Our proprietary
          dataset of clinical guidelines prevents hallucinations, giving you
          information you can trust without the need for an expensive
          subscription or searching through a reference yourself.
        </Text>
      </Container>
    </Box>
  );
};

export default Description;

const styles = {
  description: {
    pt: ["80px", null, null, null, "80px", null, "100px"],
    px: ["20px", null, null, null, "350px", null, "370px"],
    textAlign: ["center", null, null, null, null, "center"],

    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "#343D48",
      opacity: 0.7,
      mt: "10px",
      pr: ["0", null, null, null, null, "0px"],
    },
  },
  grid: {
    gridGap: "0px",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr", null, "1fr 1fr 1fr"],
  },
};
