import React from "react";

//include images into your bundle
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Cards } from "./cards.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="card-deck">
					<Cards
						title="Titulo"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						image="https://metalmagnitude.com/wp-content/uploads/2016/10/Trivium-Logo.png"
						buttonlabel="Go Somewhere"
					/>
					<Cards
						title="Titulo"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						image="https://metalmagnitude.com/wp-content/uploads/2016/10/Trivium-Logo.png"
						buttonlabel="Go Somewhere"
					/>
					<Cards
						title="Titulo"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						image="https://metalmagnitude.com/wp-content/uploads/2016/10/Trivium-Logo.png"
						buttonlabel="Go Somewhere"
					/>
					<Cards
						title="Titulo"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						image="https://metalmagnitude.com/wp-content/uploads/2016/10/Trivium-Logo.png"
						buttonlabel="Go Somewhere"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
