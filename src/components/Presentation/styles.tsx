import { styled } from "@mui/material";
import { Icon } from "@iconify/react";
import { isMobile } from "react-device-detect";

const MainContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderLeft: "2px solid white",
  borderTop: "2px solid white",
  padding: "1rem",
  width: "fit-content",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "2rem ",
  },
}));

const Text = styled("p")({
  color: "white",
  fontSize: "1.5rem",
});

const TopicListContainer = styled("div")({
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  maxWidth: "25rem",
  marginTop: "2rem",
});

const TopicContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  maxWidth: "8rem",
  padding: ".5rem",
  borderRadius: ".2rem",
  opacity: isMobile ? "1" : ".6",
  "&:hover": {
    backgroundColor: "#33434d",
    opacity: "1",
  },
  [theme.breakpoints.down("sm")]: {},
}));

const TopicText = styled("p")({
  // width: '100%',
  // height: 'auto',
});

const TopicIcon = styled(Icon)({});

export { MainContainer, Text, TopicListContainer, TopicContainer, TopicText, TopicIcon };
