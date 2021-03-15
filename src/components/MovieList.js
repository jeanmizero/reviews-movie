import React from "react";
import Movie from "./Movie";

export default class MovieList extends React.Component {
	render() {
		let displayMovieOne = {
			title: "Coming to America",
			url:
				"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6a9ee0e5a98f5dda0fc49e0897a8432d8c0f786c092899baf5ed0e360cca44b8._UY500_UX667_RI_V_TTW_.jpg",

			genres: "Comedy Film",
			description:
				"Coming to America is a 1988 American romantic comedy film directed by John Landis and based on a story originally created by Eddie Murphy, who also stars in the lead role.",
		};

		let displayMovieTwo = {
			title: "Home Alone",
			url:
				"https://lumiere-a.akamaihd.net/v1/images/image_86dd5e23.jpeg?region=0,0,1800,776",

			genres: "Comedy Film",
			description:
				"Home Alone is a 1990 American comedy film written and produced by John Hughes and directed by Chris Columbus. It stars Macaulay Culkin, Joe Pesci, Daniel Stern, John Heard, and Catherine O'Hara. Culkin stars as eight-year-old Kevin, who defends his home from burglars Harry and Marv (Pesci and Stern) after his family accidentally leaves him behind on their vacation.",
		};

		let displayMovieThree = {
			title: "The Blind Side",
			url:
				"https://hbomax-images.warnermediacdn.com/images/GWykuVw3A54xamAEAAABW/tileburnedin?size=1280x720&format=jpeg&partner=hbomaxcom&productCode=hbomax&host=artist.api.cdn.hbo.com&w=1280",
			genres: "Drama Film",
			description:
				"The Blind Side is a 2009 American biographical sports drama film written and directed by John Lee Hancock. Based on the 2006 book The Blind Side: Evolution of a Game by Michael Lewis,the film tells the story of Michael Oher, an American football offensive lineman who overcame an impoverished upbringing to play in the National Football League (NFL) with the help of his adoptive parents Sean and Leigh Anne Tuohy. It stars Sandra Bullock as Leigh Anne Tuohy, Tim McGraw as Sean Tuohy, and Quinton Aaron as Oher.",
		};

		let displayMovieFour = {
			title: "The Little Rascals",
			url: "https://i.ytimg.com/vi/MMx3uMPyLmo/hqdefault.jpg",

			genres: "Comedy Family",
			description:
				"The Little Rascals is a 1994 American family comedy film produced by Amblin Entertainment, and released by Universal Pictures on August 5, 1994.",
		};
		return (
			<div>
				<div className="container">
					<nav class="navbar navbar-light bg-light">
						<div class="container-fluid">
							<h1>Movies Review</h1>
						</div>
					</nav>
					<div>
						<Movie {...displayMovieOne} />
						<br />
						<Movie {...displayMovieTwo} />
						<br />
						<Movie {...displayMovieThree} />
						<br />
						<Movie {...displayMovieFour} />
						<br />
					</div>
				</div>
			</div>
		);
	}
}
