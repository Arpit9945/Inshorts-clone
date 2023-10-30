import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  background: '#f44336',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  height: '48px',
  marginBottom: '30px',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const InfoHeader = () => {
  const appleStore =
    "https://assets.inshorts.com/website_assets/images/appstore.png";
  const googleStore =
    "https://assets.inshorts.com/website_assets/images/playstore.png";

  const Image = styled("img")({
    height: 34,
    "&:last-child": {
      margin: "0 50px 0 20px"
    },
  });

  return (
    <Container>
      <Typography
        style={{ fontWeight: "bold", fontSize: "14px", marginLeft: "50px" }}
      >
        For the best experience use inshorts app on your smartphone.
      </Typography>
      <Box style={{ display: "flex", marginLeft: "auto" }}>
        <Image src={appleStore} alt="applestore" />
        <Image src={googleStore} alt="googlestore" />
      </Box>
    </Container>
  );
};

export default InfoHeader;
