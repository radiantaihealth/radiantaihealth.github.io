import React from "react";
import { Container, Box } from "theme-ui";
import Masonry from "react-masonry-component";
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
      "The 2019 Innovation by Design Awards honor the designers and businesses \
      solving the problems of today and tomorrow. It is one of the most \
      sought-after design",
    path: null,
    linkLabel: null,
  },
  {
    image: rustyImage,
    name: "Roustem Khamitov",
    title: "Chief Operations Officer",
    description:
      "Rustem designed and implemented large scale forecasting systems at \
      Amazon. He then co-founded a software company in the travel tech space \
      that has recently achieved a $10k MRR.",
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

const TeamMembers = () => {
  return (
    <Box as="section" id="news" sx={styles.blogs}>
      <Container>
        <Box as={Masonry} options={masonryOptions} sx={styles.blogWrapper}>
          {TEAM_DATA.map(
            ({ image, name, title, description, path, linkLabel }, index) => (
              <TeamCard
                key={index}
                image={image}
                name={name}
                title={title}
                description={description}
                path={path}
                linkLabel={linkLabel}
              />
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default TeamMembers;

const styles = {
  blogs: {
    backgroundColor: 'backgound',
    pt: ["80px", null, null, null, "80px", null, "100px"],
    pb: ["40px", null, null, null, "140px", null, "100px"],
    textAlign: ["center", null, null, null, "left"],
  },
  flex: ["0 0 100%", null, null, null, "0 0 61.5%"],
  blogWrapper: {
    mx: "-15px",
  },
};
