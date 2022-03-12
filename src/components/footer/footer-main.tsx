import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <Link to ="/"><span className="button"><i className="bi bi-chevron-left" /> Back</span></Link>
            <span className="button"><i className="bi bi-gear" style={{color: "#9a99a0"}} /> Settings</span>
        </div>
    )
}

export default Footer;