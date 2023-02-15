import { useState, useEffect } from "react";
import List from "@mui/material/List";
import MenuComponent from "./MenuComponent";
import { getNavList } from "../services/navServices";
import "../styles/nav.scss";

// const navList = [
//   {
//     "card_list": [],
//     "pays_transfer": [
//       {
//         "between_cards": [],
//         "banks": [],
//         "credit_card": [
//           {
//             "visa": [],
//             "master_card": []
//           }
//         ]
//       }
//     ],
//     "support": [
//       {
//         "lock": [],
//         "change_pass": []
//       }
//     ],
//     "enterprises": []
//   }
// ]

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
        <List key={keyValue} dense>
          <MenuComponent keyValue={keyValue} value={value} />
        </List>
      ))}
    </nav>
  )
};

export default Nav;