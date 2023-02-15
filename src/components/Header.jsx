import React from "react";
import Button from "@mui/material/Button";
import Logo from "../assets/Tu PruTec.svg";
import ArrowDown from "../assets/Arrow_Down.svg";
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} className="header-logo" alt="pruTec-img" />
      <Button className="profile">
        USER NAME
        <img src={ArrowDown} alt="arrow_down" />
      </Button>
    </header>
  );
};

export default Header;
