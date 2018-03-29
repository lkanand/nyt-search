import React from "react";
import IndividualComment from "./IndividualComment";
import "./Comments.css";

const Comments = props => {
	if(props.allComments.length === 0)
		return <div className = "commentsContainer"> <h3>There are no comments to display</h3> </div>;
	else
		return <div className = "commentsContainer"> <IndividualComment {...props} /> </div>;
}

export default Comments;