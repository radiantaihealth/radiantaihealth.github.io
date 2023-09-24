import React from "react";
import { Container, Box, Flex, Text, Heading } from "theme-ui";
import Masonry from "react-masonry-component";
import BlockTitle from "components/block-title";
import TeamCard from "components/cards/team-card";

import rustyImage from "assets/rusty.jpg";
import johnImage from "assets/john.jpg";
import yuvImage from "assets/yuvrender.jpg";

const TEAM_DATA = [
  {
    image: johnImage,
    name: "John Chen",
    title: "Chief Executive Officer",
    description:
      "John completed his graduate degree in Natural Language Processing at University of Toronto, publishing award-winning research in ClinicalNLP." +
      "After working at Lyft as a Machine Learning Engineer, he went back to medical school at McGill University, where he has been building Radiant AI chat.",
    path: null,
    linkLabel: null,
  },
  {
    image: rustyImage,
    name: "Roustem Khamitov",
    title: "Chief Operations Officer",
    description:
      "Roustem designed and implemented large scale forecasting systems at \
      Amazon. Then he founded his travel experience company in Dubai.",
    path: null,
    linkLabel: null,
  },
  {
    image: yuvImage,
    name: "Yuvrender Gill",
    title: "Chief Technical Officer",
    description:
      "Yuvrender worked on robotic agents and then went on to optimzing drug \
      discover process at BenchSci. ",
    path: null,
    linkLabel: null,
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const TeamBanner = () => {
  return (
    <Box as="section" sx={styles.callToAction}>
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.content}>
            {/* <Text as="span">Building Medical LLMs</Text> */}
            <Heading as="h3">The Team</Heading>
            <Text as="p">
              We are led by a dynamic team of scientists and company builders
              with deep know-how and experience spanning large language models,
              medicine and clinical workflows. We share a passion for innovating
              clinical workflows and are united in our pursuit to create next
              gen health care systems, optimized to tackle the 10B popluation
              mark by 2050.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default TeamBanner;

const styles = {
  callToAction: {
    mt: ["-90px", null, null, null, "0"],
    pt: ["100px", null, null, null, "110px", null, "140px"],
    backgroundColor: "white",
  },
  flex: {
    flexWrap: "wrap",
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 100%"],
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
      color: "black",
      fontWeight: 700,
      fontSize: ["23px", null, null, null, "30px", "36px", "44px"],
      maxWidth: ["100%", null, null, null, null, "90%", "100%"],
      lineHeight: 1.36,
      letterSpacing: "-1.5px",
      mt: "20px",
      mb: "30px",
    },
    p: {
      color: "black",
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
    flex: ["0 0 100%", null, null, null, "0 0 61.5%"],
  },
};
