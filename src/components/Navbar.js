import React from "react";
import MenuBtn from "./MenuBtn";
import { Stack,Button } from "@mui/material";

const Navbar = () => {
  return (
    <Stack className="navbar" flexDirection={"row"} justifyContent={"space-around"}>
      <Button className="left-btn">
        <MenuBtn />
      </Button>
      <div className="LOGO">
        <div className="streetwise">StreetWise</div>
      </div>
      <Stack className="right-btn" flexDirection={"row"}>
        <Button className="user-log-sign-btn log-sign contact-btn">
          Contact
        </Button>
        <Button className="user-log-sign-btn log-sign">Sign Up</Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
