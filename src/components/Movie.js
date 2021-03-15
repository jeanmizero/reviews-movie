import React from "react";
import Stars from "./Stars";
import ReviewList from "./ReviewList";

export default class Movie extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="card-header movie">
					<h4 className="title">{this.props.title}</h4>
				</div>
				<div className="card-body">
					<img src={this.props.url} alt="" className="container" /> <br />
					<p>
						<br />
						<b>{this.props.genres}</b>
						<br />
						<i>{this.props.description}</i>
					</p>
				</div>
				<div className="card-footer">
					<ReviewList />
					<br />
					<Stars />
				</div>
			</div>
		);
	}
}
