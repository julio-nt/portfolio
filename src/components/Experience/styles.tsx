import { styled } from "@mui/material";

const MainContainer = styled("div")(({ theme }) => ({
  paddingLeft: "6rem",
  paddingRight: "6rem",
  paddingTop: "4rem",
  paddingBottom: "4rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  // height: '100vh',
}));

const Title = styled("h1")(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: "bold",
}));

const TitleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "1rem",
  fontSize: "1.6rem",
}));

const ListContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  borderLeft: "2px solid white",
  paddingLeft: ".5rem",
  fontSize: "1.2rem",
}));

// const JobAndTime

export { MainContainer, TitleContainer, Title, ListContainer };
