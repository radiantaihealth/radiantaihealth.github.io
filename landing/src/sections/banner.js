import React from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  Heading,
  Text,
  Link as A,
} from "theme-ui";
import { keyframes } from "@emotion/core";
import bannerImage from "assets/2.png";

import ReactPlayer from "react-player";

const Banner = () => {
  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Container sx={styles.container}>
        <Heading as="h2">ChatGPT for healthcare learners</Heading>
        {/* <Box sx={styles.btnContainer}>
          <A
            href="https://chat.radiantai.health/"
            target="_blank"
            ml={2}
            label="Launch Radiant"
            sx={styles.headerBtn}
            variant="buttons.primary"
          >
            Launch Radiant
          </A>
        </Box> */}

        {/* <Image src={bannerImage} sx={styles.bannerImage} alt="banner moc" /> */}
        <Flex
          sx={{ ...styles.jackpotCardRow, justifyContent: "center" }}
          alignItems="center"
        >
          <ReactPlayer url="https://vimeo.com/892953881" controls />
        </Flex>
        <Flex sx={{ ...styles.jackpotCardRow, padding: "50px 0" }}>
          {/* Add your additional content here */}
        </Flex>
      </Container>
    </Box>
  );
};

export default Banner;

const bannerAnim1 = keyframes`
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    30% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    60% {
        transform: rotate3d(1, 0, 0, 0deg);
    }

    80% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    100% {
        transform: rotate3d(0, 1, 0, 0deg);
    }
`;

const bannerAnim2 = keyframes`
    0% {
        transform: translateY(0px) translateX(0) rotate(0);
    }

    30% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: center center;
    }

    50% {
        transform: translateY(50px) translateX(50px) rotate(45deg);
        transform-origin: right bottom;
    }

    80% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: left top;
    }

    100% {
        transform: translateY(0px) translateX(0) rotate(0);
        transform-origin: center center;
    }
`;

const bannerAnim3 = keyframes`
    0%,
    100% {
        transform: perspective(400px) translateY(0) rotate(0deg) translateZ(0px) translateX(0);
    }

    50% {
        transform: perspective(400px) rotate(-45deg) translateZ(20px) translateY(20px) translateX(20px);
    }
`;

const styles = {
  banner: {
    overflow: "hidden",
    backgroundColor: "#F9FBFD",

    pt: ["110px", null, null, null, "130px"],
    h2: {
      fontSize: ["28px", null, null, "32px", "38px", "48px", "64px"],
      lineHeight: 1.25,
      color: "#02073E",
      fontWeight: 700,
      width: "100%",
      maxWidth: ["100%", null, null, "55%", "500px", "640px", "851px"],

      mt: "30px",
      mb: ["40px", null, null, "65px"],
    },
  },
  logo: {
    display: "block",
    borderRadius: "50%",
    mx: "auto",
    boxShadow: "0px 15px 35px rgba(65, 104, 139, 0.12)",
  },
  bannerImage: {
    display: "block",
    mx: "auto",
    position: "relative",
    maxWidth: ["50%", null, null, "40%", null, "50%"],
  },
  btnContainer: {
    display: "flex", // Enable Flexbox
    flexDirection: "column", // Stack children vertically
    alignItems: "center", // Center children horizontally
    justifyContent: "center", // Center children vertically
    position: "relative",
    // ... other styling properties ...
  },
  headerBtn: {
    backgroundColor: "black",
    fontSize: ["8px", null, null, "8px", "16px", "16px", "16px"],
    fontWeight: "bold",
    letterSpacing: "-0.16px",
    borderRadius: "5px",
    color: "#ffffff",
    padding: "6.5px 24px",
    display: ["inline-block", null, null, null, "inline-block"],
    ml: ["0", null, null, "auto", "0"],
    mr: ["0", null, null, "20px", "0"],
    "&:hover": {
      color: "#fff",
    },
    textDecoration: "none",
  },
  container: {
    position: "relative",
    ".bannerIcon": {
      position: "absolute",
      display: ["none", null, null, null, "block"],
    },
  },
  bannerIcon1: {
    top: "10%",
    left: "10%",
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon2: {
    top: "10%",
    right: "10%",
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon3: {
    bottom: "40px",
    right: "-120px",
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon4: {
    bottom: "130px",
    left: "-120px",
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon5: {
    bottom: "50%",
    left: "15%",
  },
  bannerIcon6: {
    bottom: "-65px",
    left: "0px",
    animation: `${bannerAnim3} 9s linear infinite`,
  },
  bannerIcon7: {
    bottom: "30%",
    right: "0%",
  },
};
