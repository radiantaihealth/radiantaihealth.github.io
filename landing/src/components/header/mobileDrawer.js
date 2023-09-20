import logoDark from "assets/logo.svg";
import Drawer from "components/drawer";
import Logo from "components/logo";
import { DrawerContext } from "contexts/drawer/drawer.context";
import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "components/link";
import { Box, Link as A } from "theme-ui";
import menuItems from "./header.data";

const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: "TOGGLE",
    });
  }, [dispatch]);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="22px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#02073E" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Logo image={logoDark} />
          <Box sx={styles.menu}>
            {menuItems.map(({ path, label }, i) => (
              <Link
                activeClass="active"
                // sx={styles.nav.navLink}
                // to={path}
                // spy={true}
                // smooth={true}
                // offset={-70}
                // duration={500}
                key={i}
                path={path}
              >
                {label}
              </Link>
            ))}
          </Box>

          <Box sx={styles.menuFooter}>
            <A
              href="https://chat.radiantai.health/"
              target="_blank"
              ml={2}
              label="Launch Radiant"
              sx={styles.button}
              variant="buttons.primary"
            >
              Launch Radiant
            </A>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",

    "@media screen and (min-width: 960px)": {
      display: "none",
    },
  },

  drawer: {
    width: "100%",
    height: "100%",
    background: "#fff",
  },

  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "30px",
    right: "30px",
    zIndex: "1",
  },

  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    pt: "30px",
    pb: "40px",
    px: "30px",
  },

  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "30px",

    a: {
      fontSize: "16px",
      fontWeight: "400",
      color: "black",
      py: "5px",
      cursor: "pointer",
    },
  },

  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: "auto",
  },

  button: {
    fontSize: "15px",
    fw: "700",
    height: "48px",
    borderRadius: "3px",
    letterSpacing: "-0.16px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0",
    backgroundColor: "black",
    color: "#fff",
    textDecoration: "none",
  },
};

export default MobileDrawer;
