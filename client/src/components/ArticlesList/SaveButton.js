import React from "react";
import "./SaveAndCommentButton.css";

const SaveButton = props =>
 <button onClick = {() => props.saveOrUnsave(props.index, props.saved)} className = {props.saved ? "savedButton" : "saveButton"}></button>;

export default SaveButton;