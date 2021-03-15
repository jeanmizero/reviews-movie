import React from "react";

export default class Stars extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			rating: " ",
			ratings: [],
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			rating: event.target.value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.resetForm();
	}
	showRatings() {
		let ratings = this.state.ratings;
		return (
			<ul>
				{ratings.map((value, index) => {
					return (
						<li key={`${index}`}>
							<h3>{value}</h3>
						</li>
					);
				})}
			</ul>
		);
	}

	clickRating() {
		let ratings = this.state.ratings;
		ratings.push(this.state.rating);
		this.setState({
			ratings,
		});
	}

	render() {
		return (
			<div className="card">
				<div className="card-header user text-black">Customer Rates</div>
				<div className="card-body">
					{this.showRatings()}
					<form onSubmit={this.handleSubmit}>
						<b>Rating</b> <br />
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="checkbox"
								value="1"
								checked={this.state.rating === "1"}
								onChange={this.handleChange}
							/>
							<label className="form-check-label">1</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="checkbox"
								value="2"
								checked={this.state.rating === "2"}
								onChange={this.handleChange}
							/>
							<label className="form-check-label">2</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="checkbox"
								value="3"
								checked={this.state.rating === "3"}
								onChange={this.handleChange}
							/>
							<label className="form-check-label">3</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="checkbox"
								value="4"
								checked={this.state.rating === "4"}
								onChange={this.handleChange}
							/>
							<label className="form-check-label">4</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="checkbox"
								value="5"
								checked={this.state.rating === "5"}
								onChange={this.handleChange}
							/>
							<label className="form-check-label">5</label>
							<br />
						</div>
						<button
							className="btn"
							type="submit"
							value="Submit"
							onClick={() => this.clickRating()}
						></button>
					</form>
				</div>
			</div>
		);
	}
}
