import React from "react";
import SavedArticles from "./SavedArticles.js";
import "./SavedModal.css";

const SavedModal = props =>
	<div className = {props.modalTriggered ? "savedModal" : "displayNone"}>
		<div className = "savedModalContent">
			<i onClick = {() => props.closeSavedModal()} className="fa fa-times-circle"></i>
			<h2 className = "savedModalTitle">The Following Article(s) Have Been Saved: </h2>
			<SavedArticles articles = {props.articles} />
		</div>
	</div>;

export default SavedModal;