import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Nav: React.FC = () => {
    return (
        <div className="nav">
            <div className="left">
              <span className="button selected available">Play</span>
              <span className="button">Weapons</span>
              <span className="button">Leaderboard</span>
              <span className="button">Store</span>
            </div>
        </div>
    )
}

export default Nav;