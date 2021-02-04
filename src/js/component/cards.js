import React from "react";

//crear los objetos
const animals = [
	{ label: "Horse" },
	{ label: "Turtle" },
	{ label: "Elephant" },
	{ label: "Monkey" }
];
//este cambio
//hacer una variable para los objectos
//hacer una function de map
//se agrega donde se van a enviar

export function Cards() {
	return (
		<div className="card-deck">
			<div className="card">
				<img
					className="card-img-top"
					src="https://metalmagnitude.com/wp-content/uploads/2016/10/Trivium-Logo.png"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h4 className="card-title">Card title</h4>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<a href="#!" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://metalmagnitude.com/wp-content/uploads/2016/10/Trivium-Logo.png"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h4 className="card-title">Card title</h4>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<a href="#!" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://metalmagnitude.com/wp-content/uploads/2016/10/Trivium-Logo.png"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h4 className="card-title">Card title</h4>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<a href="#!" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://metalmagnitude.com/wp-content/uploads/2016/10/Trivium-Logo.png"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h4 className="card-title">Card title</h4>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<a href="#!" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
}
