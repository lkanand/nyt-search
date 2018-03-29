import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

const Navigation = () =>
	<div className = "navigation">
		<Link to = "/saved"><button className = {window.location.pathname === "/saved" ? "active" : ""}>Saved Articles</button></Link>
		<Link to = "/search"><button className = {window.location.pathname === "/" || window.location.pathname === "/search" ? "active" : ""}>Search Articles</button></Link>
	</div>

export default Navigation;