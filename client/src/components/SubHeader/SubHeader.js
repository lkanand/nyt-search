import React from "react";
import "./SubHeader.css";

const SubHeader = props =>
	<div className = "subheader">
		<h3>{props.children}</h3>
	</div>

export default SubHeader;