import React from "react";
import PropTypes from "prop-types";

export function Cards(props) {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src={props.image}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h4 className="card-title">{props.title}</h4>
				<p className="card-text">{props.description}</p>
				<a
					href={props.buttonlink}
					className="btn btn-primary text-light">
					{props.buttonlabel}
				</a>
			</div>
		</div>
	);
}

Cards.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	buttonlink: PropTypes.string,
	buttonlabel: PropTypes.string
};
