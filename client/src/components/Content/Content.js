import React from "react";
import "./Content.css";

const Content = props =>
	<div className = "content">
		{props.children}
	</div>

export default Content;