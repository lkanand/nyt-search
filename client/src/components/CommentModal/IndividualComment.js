import React from "react";
import "./Comments.css";

const IndividualComment = props => {
	return props.allComments.map((element, index) =>
	<div key = {index} className = "individualComment">
		<div className = "pWrapper">
			<p>{element.body}</p>
		</div>
		<div className = "faWrapper">
			<i className = "fa fa-times" onClick = {() => props.deleteComment(index)}></i>
		</div>
	</div>
	);
}

export default IndividualComment;