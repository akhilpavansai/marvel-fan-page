import {
  Button,
  CardContent,
  Grid,
  IconButton,
  Pagination,
  styled,
  Typography,
} from "@mui/material";
import MuiCard from "@mui/material/Card";
import MuiCardMedia from "@mui/material/CardMedia";
import React from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import theme, { pxToRem } from "../../theme";
import { HeaderData } from "../../utils/constants";
import Thor from "../../assets/images/thor.png";
import CaptianAmerica from "../../assets/images/captian-america.webp";
import Cover from "../../assets/images/cover.webp";
import { hover } from "@testing-library/user-event/dist/hover";

const WholeContainer = styled(Grid)({
  width: "80%",
  margin: "0 auto",
});
const Header = styled(Grid)({
  width: "100%",
  height: pxToRem(68),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: pxToRem(50),
});
const LeftNavBar = styled(Grid)({});
const CardsContainer = styled(Grid)({
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  gap: pxToRem(20),
});
const Card = styled(MuiCard)({
  flex: `1 ${pxToRem(265)}`,
  maxWidth: pxToRem(265),
  height: pxToRem(564),
  border: "none",
  boxShadow: "none",
  "&:hover": {
    boxShadow: "0px 5px 20px #93C2DD",
  },
});
const CardMedia = styled(MuiCardMedia)({
  maxWidth: "100%",
  height: pxToRem(400),
});
const AboutMeContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  boxSizing: "border-box",
  padding: "30px 0",
});
const Footer = styled(Grid)({
  display: "flex",
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: {
    flex: "none",
  },
});
const FooterContainers = styled(Grid)({
  flex: "1 400px",
  maxWidth: "400px",
  background: "blue",
  minHeight: "300px",
});

const HomePage = () => {
  return (
    <>
      <WholeContainer>
        {/* header starting */}
        <Header>
          <IconButton>
            <DensityMediumIcon />
          </IconButton>
          <Typography variant="h2">{HeaderData.title}</Typography>
          <Button variant="text" sx={{ color: "black", textTransform: "none" }}>
            <Typography variant="h2">{HeaderData.rightHeading}</Typography>
          </Button>
        </Header>
        {/* header ending */}
        {/* cards gird starting */}
        <CardsContainer>
          <Card>
            <CardMedia image={Thor} />
            <CardContent>
              <Typography
                variant="h1"
                style={{ textAlign: "center", marginBottom: "10px" }}
              >
                God Of Thunder A.K.A Thor
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ textAlign: "center", fontSize: "15px" }}
              >
                Might Thor is the king of Asgard son of Odin
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardMedia image={CaptianAmerica} />
            <CardContent>
              <Typography
                variant="h1"
                style={{ textAlign: "center", marginBottom: "10px" }}
              >
                God Of Thunder A.K.A Thor
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ textAlign: "center", fontSize: "15px" }}
              >
                Might Thor is the king of Asgard son of Odin
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardMedia image={Thor} />
            <CardContent>
              <Typography
                variant="h1"
                style={{ textAlign: "center", marginBottom: "10px" }}
              >
                God Of Thunder A.K.A Thor
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ textAlign: "center", fontSize: "15px" }}
              >
                Might Thor is the king of Asgard son of Odin
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardMedia image={CaptianAmerica} />
            <CardContent>
              <Typography
                variant="h1"
                style={{ textAlign: "center", marginBottom: "10px" }}
              >
                God Of Thunder A.K.A Thor
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ textAlign: "center", fontSize: "15px" }}
              >
                Might Thor is the king of Asgard son of Odin
              </Typography>
            </CardContent>
          </Card>
        </CardsContainer>
        {/* cards grid endong */}

        <hr />
        {/* about me starting */}
        <AboutMeContainer>
          <Typography variant="h1" fontSize="28px">
            About Me, The Marvel Fan
          </Typography>
          <img src={Cover} width="60%" height="400px" />
          <Typography variant="h2" fontSize="20px" fontWeight="bold">
            I am Who I Am!
          </Typography>
          <Typography variant="h3" fontSize="18px">
            <i>With Passion For Real, Good Food</i>
          </Typography>
          <Typography variant="h4" fontSize="16px">
            Just me, myself and I, exploring the universe of unknownment. I have
            a heart of love and an interest of lorem ipsum and mauris neque quam
            blog. I want to share my world with you. Praesent tincidunt sed
            tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
            ultricies congue gravida diam non fringilla. Praesent tincidunt sed
            tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
            ultricies congue gravida diam non fringilla.
          </Typography>
        </AboutMeContainer>
        {/* about me ending */}
        <hr />
        {/* footer starting */}
        <Footer>
          <FooterContainers></FooterContainers>
          <FooterContainers style={{ background: "red" }}></FooterContainers>
          <FooterContainers style={{ background: "green" }}></FooterContainers>
        </Footer>
        {/* footer ending */}
      </WholeContainer>
    </>
  );
};

export default HomePage;
