import Header from "./components/Header";
import Nav from "./components/Nav";
import Isotipo from "./assets/Isotipo.svg";
import Typography from "@mui/material/Typography";

import "./styles/App.scss"

function App() {
  return (
    <>
      <Header />

      <Nav />
      
      <footer className="footer">
        <img src={Isotipo} alt="isotipo-1" />
        <Typography sx={{ color: "white" }} variant="caption">&#169; 2022 Novopayment Inc. All rights reserved</Typography>
        <img src={Isotipo} alt="isotipo-2" />
      </footer>
    </>
  );
}

export default App;
