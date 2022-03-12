import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/home-main";
import Settings from "./components/settings/settings-main";

import "./global.scss";

ReactDOM.render(
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
    </Router>,
    document.getElementById("root")
)

export const br = () => {
  return `<br/>`.split("<br/>").join("\n")
}