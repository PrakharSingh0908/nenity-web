import React from "react";
import product from "../sanityecommerce/schemas/product";

import { Product, FooterBanner, Herobanner, HeroBanner } from "../components";
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => (
	<div>
		<HeroBanner />
		<div className="products-heading">
			<h2>Best selling products</h2>
			<p>Speakers of many variations</p>
		</div>
		<div className="products-container">
			{products?.map((product) => product.name)}
		</div>
		<FooterBanner />
	</div>
);

export const getServerSideProps = async () => {
	const query = '*[_type == "product"]';
	const products = await client.fetch(query);

	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	return {
		props: { products, bannerData },
	};
};

export default Home;
