import React from "react";
import Comments from "./Comments";
import "./CommentModal.css";

const CommentModal = props =>
	<div className = {props.modalTriggered ? "commentModal" : "displayNone"}>
		<div className = "commentModalContent">
			<i onClick = {() => props.closeModal()} className="fa fa-times-circle"></i>
			<h2 className = "commentModalTitle">Comments</h2>
			<h4 className = "commentModalSubtitle">Article: <span>{props.articleSelected.title}</span></h4>
			<Comments allComments = {props.allComments} deleteComment = {props.deleteComment}/>
			<textarea name = "newComment" value = {props.comment} onChange = {props.commentChange} className = "newComment"></textarea>
			<button onClick = {props.submitComment} className = "submitComment">Submit</button>
		</div>
	</div>;

export default CommentModal;