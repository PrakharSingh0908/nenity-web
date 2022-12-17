import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/client";

export const client = sanityClient({
	projectId: "n5pk9qou",
	dataset: "production",
	apiVersion: "2022-17-12",
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const buider = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
