import React from "react";
import { Box, Container, Text, Link } from "theme-ui";

const CTABasic = () => {
  return (
    <Box sx={styles.btnContainer}>
      <Link
        href="https://chat.radiantai.health/"
        target="_blank"
        ml={2}
        variant="buttons.primary"
        sx={styles.headerBtn}
      >
        Launch Radiant
      </Link>
    </Box>
  );
};

export default CTABasic;

const styles = {
  btnContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    // ... other styling properties ...
  },
  headerBtn: {
    backgroundColor: "black",
    color: "white",
    fontSize: ["8px", null, null, "8px", "16px", "16px", "16px"],
    fontWeight: "bold",
    letterSpacing: "-0.16px",
    borderRadius: "5px",
    padding: "6.5px 24px",
    marginTop: "3em", // Add this line to set the top margin
    position: "relative",
    overflow: "hidden",
    animation: "glow 2s linear infinite",
  },
  "@keyframes glow": {
    "0%": {
      textShadow:
        "0 0 10px #ff0000, 0 0 20px #ff00ff, 0 0 30px #00ffff, 0 0 40px #00ff00, 0 0 50px #ffff00, 0 0 60px #ff0000, 0 0 70px #ff00ff",
    },
    "14.28%": {
      textShadow:
        "0 0 10px #ff00ff, 0 0 20px #00ffff, 0 0 30px #00ff00, 0 0 40px #ffff00, 0 0 50px #ff0000, 0 0 60px #ff00ff, 0 0 70px #00ffff",
    },
    "28.57%": {
      textShadow:
        "0 0 10px #00ffff, 0 0 20px #00ff00, 0 0 30px #ffff00, 0 0 40px #ff0000, 0 0 50px #ff00ff, 0 0 60px #00ffff, 0 0 70px #00ff00",
    },
    "42.85%": {
      textShadow:
        "0 0 10px #00ff00, 0 0 20px #ffff00, 0 0 30px #ff0000, 0 0 40px #ff00ff, 0 0 50px #00ffff, 0 0 60px #00ff00, 0 0 70px #ffff00",
    },
    "57.14%": {
      textShadow:
        "0 0 10px #ffff00, 0 0 20px #ff0000, 0 0 30px #ff00ff, 0 0 40px #00ffff, 0 0 50px #00ff00, 0 0 60px #ffff00, 0 0 70px #ff0000",
    },
    "71.42%": {
      textShadow:
        "0 0 10px #ff0000, 0 0 20px #ff00ff, 0 0 30px #00ffff, 0 0 40px #00ff00, 0 0 50px #ffff00, 0 0 60px #ff0000, 0 0 70px #ff00ff",
    },
    "85.71%": {
      textShadow:
        "0 0 10px #ff00ff, 0 0 20px #00ffff, 0 0 30px #00ff00, 0 0 40px #ffff00, 0 0 50px #ff0000, 0 0 60px #ff00ff, 0 0 70px #00ffff",
    },
    "100%": {
      textShadow:
        "0 0 10px #00ffff, 0 0 20px #00ff00, 0 0 30px #ffff00, 0 0 40px #ff0000, 0 0 50px #ff00ff, 0 0 60px #00ffff, 0 0 70px #00ff00",
    },
  },
};
