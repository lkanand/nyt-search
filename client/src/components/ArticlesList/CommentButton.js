import React from "react";
import "./SaveAndCommentButton.css";

const CommentButton = props =>
	<button className = "commentButton" onClick = {() => props.showModal(props.index)}>Comment</button>;
export default CommentButton;