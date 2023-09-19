import React from "react";
import { Box, Container, Flex, Text, Heading, Image } from "theme-ui";
import { Link } from "components/link";

import scienceImage2 from "assets/science2.png";
import scienceImage1 from "assets/9.png";
const PlatformScience = () => {
  return (
    <Box as="section" sx={styles.callToAction}>
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.content}>
            {/* <Text as="span">Building Medical LLMs</Text> */}
            <Heading as="h3">Training Clinical LLMs</Heading>
            <Text as="p">
              RadiantAI is training state of the art LLMs on curated medical
              data changing how medicine is done. From drug datasets to anatomy,
              RadiantAI is training LLMs that generate evidence based answers
              and not hallucinations.
            </Text>
          </Box>
          <Box sx={styles.images}>
            <Image src={scienceImage1} alt="call image" />
          </Box>
        </Flex>
        <Flex sx={styles.flex}>
          <Box sx={styles.images}>
            <Image src={scienceImage2} alt="call image" />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">Evidence Based Results</Heading>
            <Text as="p">
              Understand the details of clinical query results by accessing
              contexulized original sources.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default PlatformScience;

const styles = {
  callToAction: {
    mt: ["-90px", null, null, null, "0"],
    py: ["10px", null, null, null, "50px", null, "80px"],
    backgroundColor: "black",
  },
  flex: {
    flexWrap: "wrap",
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 65%"],
    textAlign: ["center", null, null, null, "left"],
    pt: ["80px", null, null, null, "0"],
    maxWidth: ["100%", null, null, "80%", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["30px", null, null, null, "0"],
    span: {
      fontSize: "18px",
      fontWeight: 700,
      color: "primary",
      display: "block",
      lineHeight: 1,
    },
    h3: {
      color: "white",
      fontWeight: 700,
      fontSize: ["23px", null, null, null, "30px", "36px", "44px"],
      maxWidth: ["100%", null, null, null, null, "90%", "100%"],
      lineHeight: 1.36,
      letterSpacing: "-1.5px",
      mt: "20px",
      mb: "30px",
    },
    p: {
      color: "white",
      fontSize: ["16px", null, null, "18px"],
      lineHeight: ["2", null, null, 2.33],
      mb: "30px",
    },
  },
  button: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "#02073E",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
  images: {
    flex: ["0 0 100%", null, null, null, "0 0 35%"],
  },
};
