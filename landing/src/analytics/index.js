import ReactGA from "react-ga4";

export const initGA = async () => {
  await ReactGA.initialize("G-ZYZTR6ZVX6");
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};
