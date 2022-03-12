import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const NavShort: React.FC = () => {
    return (
        <div className="nav_short">
            <div className="left">
                <Link to="/"><span className="bi bi-controller" /></Link>
            </div>
        </div>
    )
}

export default NavShort;