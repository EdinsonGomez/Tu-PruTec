import { useState, useEffect } from "react";
import List from "@mui/material/List";
import MenuComponent from "./MenuComponent";
import { getNavList } from "../services/navServices";
import "../styles/nav.scss";

const Nav = () => {
  const [navList, setNavList] = useState(null);

  useEffect(() => {
    getNavList().then(
      (res) => {
        if (res.data?.list?.[0]) {
          setNavList(res.data.list[0]);
        }
      },
      (error) => {
        console.error("Error: ", error);
      }
    )
  }, []);

  return (
    <nav className="nav">
      {navList && Object.entries(navList).map(([keyValue, value]) => (
        <List sx={{ padding: 0 }} key={keyValue} dense>
          <MenuComponent keyValue={keyValue} value={value} disableHoverColor />
        </List>
      ))}
    </nav>
  )
};

export default Nav;