import React from "react";
import product from "../sanityecommerce/schemas/product";

const Home = () => {
	return (
		<div>
			<>
				Herobanner
				<div className="products-heading">
					<h2>Best selling products</h2>
					<p>Speakers of many variations</p>
				</div>
				<div>
					{["Product 1", "Product 2"].map((product) => product)}
				</div>
				Footer
			</>
		</div>
	);
};

export default Home;
