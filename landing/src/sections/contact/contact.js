import React from "react";
import { Box, Container, Flex, Text, Heading, Link } from "theme-ui";

const Contact = () => {
  return (
    <Box as="section" sx={styles.callToAction}>
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.content}>
            <Heading as="h3">Contact US</Heading>
            <Text as="p">
              We are building a pivitol layer of technology to augment how
              clinical work is done and be redefined for next 2 decades to get
              us ready for 10B population.
            </Text>
            <Text as="p">
              If you got interesting ideas about LLMs, clinical workflow or
              invest in us, just leave us a note.
            </Text>
            <Text as="p">We are excited to hear from you.</Text>
            <Text as="p">
              Send us a note{" "}
              <Link href="mailto:hello@radiantai.health">
                hello@radiantai.health
              </Link>
            </Text>
          </Box>
          <Box sx={{ p: ["65px", null, null, null, "181px", null, "181px"] }}></Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;

const styles = {
  callToAction: {
    mt: ["-90px", null, null, null, "0"],
    pt: ["120px", null, null, null, "110px", null, "140px"],
  },
  flex: {
    flexWrap: "wrap",
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 100%"],
    textAlign: ["left", null, null, null, "left"],
    pt: ["80px", null, null, null, "0"],
    maxWidth: ["100%", null, null, "80%", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["30px", null, null, null, "0"],
    span: {
      fontSize: "18px",
      fontWeight: 700,
      color: "primary",
      display: "block",
      lineHeight: [2, null, null, null, 1],
      mt: ["5px", null, null, null, "20px"],
      mb: ["5px", null, null, null, "10px"],
    },
    h3: {
      color: "black",
      fontWeight: 700,
      fontSize: ["23px", null, null, null, "30px", "36px", "44px"],
      maxWidth: ["100%", null, null, null, null, "90%", "100%"],
      lineHeight: 1.36,
      letterSpacing: "-1.5px",
      mt: ["10px", null, null, null, "20px"],
      mb: ["20px", null, null, null, "30px"],
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "heading_secondary",
      opacity: 1,
      mt: ["20px", null, null, null, "20px"],
      mb: ["30px", null, null, null, "30px"],
      pr: ["0", null, null, null, null, "0px"],
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
};
