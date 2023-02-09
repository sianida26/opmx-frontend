import { useState } from "react";
import figure1 from "@/assets/figure1.jpg";
import { Link } from "react-router-dom";
import image6 from "@/assets/image6.png";
import image7 from "@/assets/image7.png";
import { Popover, Mark, Text } from "@mantine/core";

export default function S1P8() {
	return (
		<main className="w-full text-slate-800 px-6 py-8 poppins flex flex-col gap-4 max-w-screen-lg mx-auto with-custom-popover">
			<h1>
				Environmental Effects of Oil Palm Plantations
				<p className="italic text-lg">Background Information</p>
			</h1>
			<h2 className="font-semibold text-black">
				Global Demand for Palm Oil
			</h2>
			<p className="-mt-2">
				The oil palm (<em>Elaeis guineensis</em>) belongs to one of the
				most dominant and productive crops in the world (Formaglio,
				2020). As its main product, the oil palm provides fruits on
				fresh fruit bunches that are harvested throughout the whole
				year.
			</p>
			<figure className="flex flex-col items-center text-xs text-center">
				<img src={image6} alt="Photo of oil palm fruit" />
				<figcaption>
					<strong>Figure 8</strong>: Fresh fruit bunches of oil palm.
				</figcaption>
			</figure>

			<p>
				The orange fruits are pressed, and the oil is used in a variety
				of products, such as biofuel, cosmetics or processed food (for
				example in cereal, biscuits, peanut butter).
			</p>
			<p>
				Palm oil is often described as superior compared to other
				vegetable oils, due to the plant’s high yields combined with
				lower production and management costs (Carter et al., 2007;
				Clough et al., 2016). Global demand has risen by 45% during the
				last two decades. The area of oil palm plantations has expanded
				accordingly (Grass et al., 2020). Currently, Indonesia is the
				world’s biggest producer of palm oil, as it provides 57% of the
				global production (FAO, 2018). Given the rising demand for cheap
				oil for biofuel and food production, this percentage is
				projected to further expand in the future (Pirker et al., 2016).
			</p>
			<p>
				<strong>Oil palm management</strong> compromises selection and
				clearing of land, seed germination and nurseries, planting
				strategy, maintenance, harvest, storage, and distribution
				(Corley & Tinker, 2016).
			</p>

			<h2 className="font-semibold text-black">
				Oil Palm and the Environment
			</h2>
			<div className="">
				<span>
					Despite being a very productive and cheaply manageable crop,
					there is rising concern about the environmental effects of
					oil palm expansion. The conversion of forest to oil palm
					plantations is often associated with negative effects on the
					environment, such as deforestation, loss of{" "}
				</span>
				{/* TODO make component */}
				<Popover
					middlewares={{ flip: true, shift: true, inline: true }}
					position="bottom"
					width={300}
					withArrow
					shadow="md"
				>
					<Popover.Target>
						<span className="text-blue-500 underline">
							ecosystem functions
						</span>
					</Popover.Target>
					<Popover.Dropdown
						sx={() => ({
							borderColor: "#065F46",
							background: "#ECFDF5",
						})}
					>
						<div className="text-xs gap-1 flex flex-col">
							<h3 className="font-semibold">
								Ecosystem functions
							</h3>
							<p>
								Ecosystem functions are the “capacity of natural
								processes and components to provide goods and
								services that satisfy human needs directly or
								indirectly” (de Groot et al., 2002, p. 3).
								According to Hooper et al. (2005), there are
								three classes of ecosystem functions:
							</p>
							<ol className="list-decimal pl-3">
								<li>
									Stocks of energy and materials (e.g.,
									biomass, genes)
								</li>
								<li>
									Flow of energy or materials through biotic
									and abiotic components of an ecosystem, such
									as decomposition
								</li>
								<li>
									Stability of rates or stocks over time
									(e.g., resilience, predictability)
								</li>
							</ol>
						</div>
					</Popover.Dropdown>
				</Popover>{" "}
				<span>
					and loss of{" "}
					<Popover
						middlewares={{ flip: true, shift: true, inline: true }}
						position="bottom"
						width={300}
						withArrow
						shadow="md"
					>
						<Popover.Target>
							<span className="text-blue-500 underline">
								biodiversity
							</span>
						</Popover.Target>
						<Popover.Dropdown
							sx={() => ({
								borderColor: "#065F46",
								background: "#ECFDF5",
							})}
						>
							<div className="text-xs gap-1 flex flex-col">
								<h3 className="font-semibold">Biodiversity</h3>
								<p>
									The term biodiversity describes the variety
									of life at species, ecosystem and genetic
									levels (FAO, 2019). It is the sum of all
									plants, animals, fungi and microorganisms on
									earth. Their genetic and phenotypic
									variation is called intraspecific diversity.
									The diversity of the communities is called
									interspecific diversity. There is also
									ecosystem diversity (Dirzo & Mendoza, 2008).
									Diversity can focus on the numbers of units,
									as well as on the evenness of their
									distribution, the differences in their
									functional traits and their interactions
									(Hooper et al., 2005). Biodiversity plays a
									central role in the stability of ecosystem
									functions (Barnes et al., 2018; Cardinale et
									al., 2012).
								</p>
							</div>
						</Popover.Dropdown>
					</Popover>{" "}
					(Barnes et al., 2018).
				</span>
			</div>
			<figure className="flex flex-col items-center text-xs text-center">
				<img src={image7} alt="Deforested rainforest" />
				<figcaption>
					<strong>Figure 9</strong>: Deforestation of rainforest for
					future oil palm plantation.
				</figcaption>
			</figure>
			<div>
				One ecosystem function highly affected by oil palm plantations
				is soil fertility. It can be defined as the “capacity of the
				soil to provide sufficient nutrients for plant growth”
				(Formaglio, 2020, p. 4). Generally, monoculture oil palm
				plantations have lower{" "}
				<Popover
					middlewares={{ flip: true, shift: true, inline: true }}
					position="bottom"
					width={300}
					withArrow
					shadow="md"
				>
					<Popover.Target>
						<span className="text-blue-500 underline">
							soil fertility
						</span>
					</Popover.Target>
					<Popover.Dropdown
						sx={() => ({
							borderColor: "#065F46",
							background: "#ECFDF5",
						})}
					>
						<div className="text-xs gap-1 flex flex-col">
							<h3 className="font-semibold">Soil fertility</h3>
							<p>
								As an ecosystem function, soil fertility means
								the provision of sufficient soil nutrients
								essential for plant growth. This also includes
								soil processes like nutrient cycles between
								vegetation and soil. Efficient cycling is
								altered when tropical forest is converted to an
								agricultural land-use system like oil palm
								(Formaglio, 2020). The result of this change is
								a decrease of soil fertility, which is caused by
								releasing many nutrients which were previously
								bound in the vegetation and the soil organic
								matter.
							</p>
						</div>
					</Popover.Dropdown>
				</Popover>{" "}
				compared to tropical rain forests. After land-use change from
				forests to oil palm, the capacity of the soil to support high
				levels of crop production has decreased in oil palm plantations.
				Then, this is maintained by the continuous use of fertiliser.
				Furthermore, large scale conversion of forests has led to losses
				of biodiversity. For instance, Indonesia’s exceptionally high
				biodiversity is seriously threatened by land conversion, for
				which oil palm cultivation is a major driver (Teuscher et al.,
				2016). Hence, there is a need to establish oil palm plantation
				management practices that support long-term soil fertility and
				biodiversity without sacrificing the plant‘s yield.
			</div>
		</main>
	);
}
