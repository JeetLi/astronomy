import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./style.css";

const Header: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              flexGrow: 1,
              flexDirection: "row",
              justifyContent: "pace-around",
              alignItems: "center",
            }}
          >
            <img src="/assets/icons/nasa.png" width="48px" alt="" />
            <Button color="inherit">
              <Link to="/List">List</Link>
            </Button>
            <Button color="inherit">
              <Link to="/">Home</Link>
            </Button>
            <Button color="inherit">
              <Link to="/Calendar">Calendar</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
