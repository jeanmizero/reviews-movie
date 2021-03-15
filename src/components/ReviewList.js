import React from "react";
import ReviewForm from "./ReviewForm";

export default class ReviewList extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="card-header user text-dark">Customer Review</div>
				<div className="card-body">
					<ReviewForm />
				</div>
			</div>
		);
	}
}
