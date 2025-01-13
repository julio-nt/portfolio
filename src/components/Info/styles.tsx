import { Icon } from "@iconify/react/dist/iconify.js";
import { styled } from "@mui/material";

const InfoContainer = styled("div")(({ theme }) => ({
  padding: "40px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  margin: "10px",
  [theme.breakpoints.down(1000)]: {
    display: "none",
  },
}));

const InfoImage = styled("img")(({ theme }) => ({
  width: "300px",
  height: "400px",
  borderRadius: "10px",
  objectFit: "cover",
}));

const InfoInfoContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  // justifyContent: "center",
  //   paddingTop: '20px',
  borderRadius: "10px",
  // boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  margin: "10px",
}));

const InfoText = styled("p")(({ theme }) => ({
  //   color: theme.palette.primary.main,
  fontSize: "1rem",
  textDecoration: "none",
  color: "white",
  //   textAlign: 'center',
}));

const CountryIcon = styled(Icon)(({ theme }) => ({
  width: "35px",
  height: "35px",
  position: "absolute",
  right: 0,
  top: 0,
}));

export { InfoContainer, InfoImage, InfoInfoContainer, InfoText, CountryIcon };
