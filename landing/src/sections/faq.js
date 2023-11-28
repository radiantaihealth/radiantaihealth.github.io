import React from "react";
import { Box, Container, Flex, Text, Heading } from "theme-ui";
import { Link } from "components/link";
import BlockTitle from "components/block-title";
import Accordion from "components/accordion/accordion";

const accordionData = [
  {
    isExpanded: false,
    title: "What is Radiant AI Chat?",
    contents: (
      <div>
        Radiant AI Chat is a medical chatbot that <em>shows you how it generated the data</em>
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "How does Radiant AI Chat work?",
    contents: (
      <div>
        We are performing retrieval-augmented generation. A user's query is embedded and we match the query against our
        proprietary dataset of documents. Then, we use our LLM to generate with the retrieved document in context.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Who is it for?",
    contents: (
      <div>
        Our chat is mainly designed for medical professionals or medical learners. But everyone is welcome to use it!
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Is it free?",
    contents: (
      <div>
        Yes! We plan to keep a free tier permanently to bring medical education to the world.
        However, we offer unlimited chats, longer response length and longer chat history as a premium feature. Please contact us at founders@radiantai.health to obtain a premium account.

        For business users, we offer secure, on-premise HIPPA-compliant chat, integration with EMR,
        and the ability to chat with your own documents. Please contact us at founders@radiantai.health .
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Why should I use it instead of UpToDate or a textbook?",
    contents: (
      <div>
        It's faster, cheaper and provides the same level of accuracy. As a medical professional, we serve the PDF document that the answer was generated from, so that you can verify the answer for yourself!

      </div>
    ),
  },
  {
    isExpanded: false,
    title: "I noticed an answer was wrong! What can I do about it?",
    contents: (
      <div>
        We are constantly improving our system. Please send us a screenshot at founders@radiantai.health and we will look into the problem.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section" sx={styles.faq}>
      <Container>
        <BlockTitle title="Frequently Asked Questions" text="" />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          {/* <Box sx={styles.content}>
            <Heading as="h3">
              Do you have any quesiton? Please ask here we ready to support
            </Heading>
            <Text as="p">
              If your question is not list here, please feel free to make a
              manual support.
            </Text>
            <Link sx={styles.askButton} path="/contact">
              Contact Us
            </Link>
          </Box> */}
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  faq: {
    py: ["70px", null, null, null, "90px", null, "130px"],
  },
  flex: {
    flexWrap: "wrap",
    flexDirection: ["column", null, null, null, null, "row-reverse"],
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 100%"],
    maxWidth: ["100%", null, null, "450px", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["0px", null, null, null, "0"],
    textAlign: ["center", null, null, null, null, "left"],
    my: ["40px", null, null, null, null, "0"],
    h3: {
      fontSize: ["23px", null, null, null, "24px"],
      lineHeight: [1.5, null, null, null, 1.67],
      color: "black",
      fontWeight: 700,
      letterSpacing: "-1.5px",
      mt: "-5px",
      pr: ["0", null, null, null, null, "30px"],
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "heading_secondary",
      opacity: 0.7,
      mt: "10px",
      pr: ["0", null, null, null, null, "80px"],
    },
  },
  askButton: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "#02073E",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    mt: "25px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ["0 0 100%", null, null, null, "0 0 100%"],
  },
};


