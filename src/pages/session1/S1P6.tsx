import { useState } from "react";
import figure1 from "@/assets/figure1.jpg";
import { Link } from "react-router-dom";

export default function S1P6() {
	return (
		<main className="w-full text-slate-800 px-6 py-8 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<h1>Background: Ecosystem Functions</h1>

			<p>
				The Intergovernmental Science-Policy Platform on Biodiversity
				and Ecosystem Services (IPBES) defines ecosystem functioning as
				"the flow of energy and materials through the biotic and abiotic
				components of an ecosystem. It includes many processes such as
				biomass production, trophic transfer through plants and animals,
				nutrient cycling, water dynamics and heat transfer" (IPBES
				glossary, 2017).
			</p>

			<ul className="list-disc pl-4">
				<li>
					In more concrete terms, de Groot et al. (2002) describe
					ecosystem functions as: the ability of natural components
					and processes to directly or indirectly provide goods (e.g.,
					timber, fruit, oxygen, water), and services (e.g., pest
					control, climate regulation) that satisfy human needs.
				</li>
			</ul>

			<p>
				Further, de Groot et al. (2002) group ecosystem functions into
				these four main categories:
			</p>

			<h6 className="font-bold">Regulation functions:</h6>

			<ul className="list-disc pl-8">
				<li>
					This group maintains the ecosystem and biosphere health. It
					provides many ecosystem services which benefit humans (e.g.,
					clean air, water or soil). These functions generally
					regulate essential ecological processes, e.g., through
					bio-geochemical cycles.
				</li>
				<li>
					Examples of functions in this group are: gas or climate
					regulation, disturbance prevention, and water regulation,
					but also many more.
				</li>
			</ul>

			<h6 className="font-bold">Habitat functions:</h6>

			<ul className="list-disc pl-8">
				<li>
					This group of functions contributes to the conservation of
					biological and genetic diversity as well as evolutionary
					processes. They provide refuge and reproduction-habitats to
					wild flora and fauna.
				</li>
				<li>
					The two functions in this group are the refugium and nursery
					function.
				</li>
			</ul>

			<h6 className="font-bold">Production functions:</h6>

			<ul className="list-disc pl-8">
				<li>
					The functions in this group are the production of a variety
					of carbohydrate structures by plants and other organisms.
					These can be used and/or consumed by different species.
					However, these goods are not limited to food, but can also
					be e.g., building materials, energy resources (e.g., fuel)
					or genetic material (for gene editing).
				</li>
				<li>
					Functions of this group can, for example, be the production
					of the already mentioned food or raw materials, but also
					medicinal or ornamental resources.
				</li>
			</ul>

			<h6 className="font-bold">Information functions:</h6>

			<ul className="list-disc pl-8">
				<li>
					Natural ecosystems contribute to the maintenance of human
					health. They can provide opportunities for reflection,
					spiritual enrichment, cognitive development, recreation and
					aesthetic experience.
				</li>
				<li>
					Exemplary functions from this group are recreation and
					(eco)tourism, scientific and educational information as well
					as spiritual and historic information, among others.
				</li>
			</ul>
		</main>
	);
}
