import React from "react";
import "./form.css";

export const FormSubmit = props => 
	<div className = "buttonContainer">
		<button {...props} className = {props.disabled ? "disabledFormSubmit" : "activeFormSubmit"}>{props.children}</button>
	</div>;