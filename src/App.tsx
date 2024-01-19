import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index";
import Home from "./pages/Home/index";
import { CssBaseline } from "@mui/material";
import List from "./pages/List";
import Calendar from "./pages/Calendar";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/Calendar" element={<Calendar />} />
      </Routes>
    </Router>
  );
};
export default App;
