import React from "react";
import SavedArticles from "./SavedArticles.js";
import "./SavedModal.css";

const SavedModal = props =>
	<div className = {props.modalTriggered ? "savedModal" : "displayNone"}>
		<div className = "savedModalContent">
			<i onClick = {() => props.closeSavedModal()} className="fa fa-times-circle"></i>
			<div className = {props.savedArticles.length === 0 ? "displayNone" : ""}>	
				<h2 className = "savedModalTitle">The Following Article(s) Have Been Saved: </h2>
				<SavedArticles articles = {props.savedArticles} />
			</div>
			<div className = {props.unsavedArticles.length === 0 ? "displayNone" : ""}>
				<h2 className = "savedModalTitle">The Following Article(s) Have Been Unsaved: </h2>
				<SavedArticles articles = {props.unsavedArticles} />
			</div>
		</div>
	</div>;

export default SavedModal;