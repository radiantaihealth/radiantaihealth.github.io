import React from "react";
import { Box, Container, Flex, Image, Text } from "theme-ui";
import BlockTitle from "components/block-title";
import JackpotCard from "components/cards/jackpot-card";
import radiantPlatformImage from "assets/RadiantPlatform.png";
import clinicalLLMImage from "assets/NN.png";
import dataIntegrationImage from "assets/DataIntegration.png";
import evidenceImage from "assets/evidence.png";
import ReactPlayer from "react-player";

const JACKPOT_DATA = [
  {
    image: clinicalLLMImage,
    text: "Get access to powerful LLMs curated and specifically trained on unbiased clinical data.",
    heading: "Clinical LLMs",
  },
  {
    image: evidenceImage,
    text: "Get a 360 view of evidence to gain confidence in the information that you obtain.",
    heading: "Evidence Curation",
  },
  {
    image: dataIntegrationImage,
    text: "Integrate with wide range of your custom data sources to utilize our propietery LLMs to maximize insghts from your data.",
    heading: "Data Integrations",
  },
];

const Jackpot = () => {
  return (
    <Box as="section" sx={styles.jackpot}>
      <Container>
        {/* <BlockTitle title="Core Features" text="" /> */}
        {/* {JACKPOT_DATA.map(({ image, heading, text }, index) => (
                <JackpotCard
                  image={image}
                  heading={heading}
                  text={text}
                  key={index}
                />
              ))} */}

        <Box sx={styles.content}>
          {/* <Box sx={styles.heading}>
            <Text as="span">Core features</Text>
          </Box> */}
          <Flex sx={styles.jackpotCardRow}>
            <Box sx={styles.jackpotCardBox}>
              <Flex sx={styles.flex}>
                <Box sx={styles.image}>
                  <div style={{ padding: "75% 0 0 0", position: "relative" }}>
                    <ReactPlayer url="https://vimeo.com/892953881" controls />
                  </div>
                  {/* <div style={{ padding: "75% 0 0 0", position: "relative" }}>
                    <iframe
                      src="https://player.vimeo.com/video/892953881?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                      title="RadiantAI"
                    ></iframe>
                  </div>
                  <script src="https://player.vimeo.com/api/player.js"></script> */}
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Flex sx={styles.jackpotCardRow}>
            {JACKPOT_DATA.map(({ image, heading, text }, index) => (
              <JackpotCard
                image={image}
                heading={heading}
                text={text}
                key={index}
              />
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Jackpot;
const styles = {
  jackpot: {
    pt: ["65px", null, null, null, "85px", null, "125px"],
  },
  flex: {
    flexWrap: "wrap",
  },
  image: {
    flex: ["0 0 100%", null, null, null, null, "0 0 62.5%"],
    maxWidth: "100%",
    margin: "auto",
    display: "block",
    img: {
      maxWidth: "100%",
      maxHeight: [null, null, null, null, null, null, "700px"],
      float: "right",
      border: "black 5px",
      borderRadius: "15px",
    },
  },
  content: {
    flex: ["0 0 100%", null, null, null, null, "0 0 37.5%"],
  },
  heading: {
    mb: "30px",
    pt: "60px",
    textAlign: ["center", null, null, null, null, "left"],
    pl: ["0", null, null, "30px"],
    maxWidth: ["80%", null, null, "100%"],
    mx: ["auto", null, null, "0"],
    span: {
      display: "block",
      fontSize: "18px",
      color: "primary",
      fontWeight: 700,
      lineHeight: 1,
      mb: "20px",
    },
    h3: {
      color: "black",
      fontSize: ["23px", null, null, null, "30px", "36px", "44px"],
      maxWidth: ["100%", null, null, null, null, "90%", "100%"],
      fontWeight: 700,
      letterSpacing: "-1.5px",
      lineHeight: 1.36,
    },
  },
  jackpotCardBox: {
    display: ["grid", null, null, null, null, "block"],
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
  },
};
