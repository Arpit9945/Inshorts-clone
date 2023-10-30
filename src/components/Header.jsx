import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import { Menu } from '@mui/icons-material';

const StyledHeader = styled(AppBar)`
  background: #fff;
  height: 70px;
`;

const MenuIcon = styled(Menu)`
color: #000;
`

const Image = styled('img')({
  height: 70,
  margin: 'auto',
  paddingRight: 70
})

const Header = () => {

  const url = `https://assets.inshorts.com/website_assets/images/logo_inshorts.png`;

  return (
    <div>
      <StyledHeader position="static">
        <Toolbar>
            <MenuIcon />
            <Image src={url} alt="logo" />
        </Toolbar>
      </StyledHeader>
    </div>
  );
};

export default Header;
