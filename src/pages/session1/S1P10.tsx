import { useState, useRef, useEffect, Fragment } from "react";
import image11 from "@/assets/image11.png";
import nitrogen1 from "@/assets/nitrogen1.png";
import nitrogen2 from "@/assets/nitrogen2.png";
import phosphorus1 from "@/assets/phosphorus1.png";
import phosphorus2 from "@/assets/phosphorus2.png";
import phosphorus3 from "@/assets/phosphorus3.png";
import potassium1 from "@/assets/potassium1.png";
import potassium2 from "@/assets/potassium2.png";
import potassium3 from "@/assets/potassium3.png";
import magnesium1 from "@/assets/magnesium1.png";
import magnesium2 from "@/assets/magnesium2.png";
import magnesium3 from "@/assets/magnesium3.png";
import boron1 from "@/assets/boron1.png";
import boron2 from "@/assets/boron2.png";
import boron3 from "@/assets/boron3.png";
import copper1 from "@/assets/copper1.png";
import copper2 from "@/assets/copper2.png";
import iron1 from "@/assets/iron1.png";
import iron2 from "@/assets/iron2.png";
import nk1 from "@/assets/nk1.png";
import nk2 from "@/assets/nk2.png";
import ganoderma from "@/assets/ganoderma1.png";
import { Textarea } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { task7AddRow, task7DeleteRow, task7ChangeAdvantages, task7ChangeDisadvantages, task8UpdateStates, task9UpdateFunction } from "@/redux/slices/session1Slice";
import { IFrameTaskMessage } from "@/interfaces";
import elements from "@/data/elements";
// TODO: fix autoplay

const MIN_ROW = 3;
const MAX_ROW = 10;

const nutrientDeficiencies = new Map(
	[ 
		['Nitrogen', { images: [ nitrogen1, nitrogen2 ], description: "Pale green or yellow-green leaves caused by lack of chlorophyll. Occurs in flooded, waterlogged, and anoxic soils." }],
		['Phosphorus', { images: [ phosphorus1, phosphorus2, phosphorus3 ], description: "Slow growth and leaves become olive-green, brown necrosis occur around edges. Palms are appearing stunted and have a small bunch size with a pyramid-like shaped trunk." }],
		['Potassium', { images: [ potassium1, potassium2, potassium3 ], description: "Confluent orange spotting, marginal necrosis on older leaves. Typical on peatland." }],
		['Magnesium', { images: [ magnesium1, magnesium2, magnesium3 ], description: "Strong and striking orange colour, hence also called Orange Frond. Typical on sandy soils with high rainfall." }],
		['Boron', { images: [ boron1, boron2, boron3 ], description: "Small hook leaves with bent points are corrugated and malformed. Short petioles." }],
		['Copper', { images: [ copper1, copper2 ], description: "Also known as ‘nursery white stripe’, mainly on younger leaves with chlorosis and necrosis on the tips. Small fruit bunches. Typical on peatland." }],
		['Iron', { images: [ iron1, iron2 ], description: "Pale chlorosis and necrosis in sand culture. Rare with oil palms growing on acid soils with much iron oxide." }],
		['Nitrogen-Potassium Imbalance', { images: [ nk1, nk2 ], description: "Known as white stripe and occurs where the K:N ratio is wide." }],
		['Ganoderma', { images: [ ganoderma ], description: "" }],
	]
)

export default function S1P10() {
	const autoplay = useRef(Autoplay({ delay: 3000 }))
	const dispatch = useAppDispatch()
	const rows = useAppSelector(selector => selector.session1.task7?.rows) ?? 3
	const advantages = useAppSelector(selector => selector.session1.task7?.advantages) ?? ["", "", ""]
	const disadvantages = useAppSelector(selector => selector.session1.task7?.disadvantages) ?? ["", "", ""]
	const selectedElements = useAppSelector(selector => selector.session1.task9?.funcs) ?? new Map<number,string>()

	useEffect(() => {
		const handler = (
			ev: MessageEvent<IFrameTaskMessage<Map<number,string>>>
		) => {
			const messageData = ev.data;
			if (typeof messageData !== "object") return;
			if (!messageData.taskId) return;
			if (messageData.taskId !== "s1t8") return;
			if (!messageData.value) return;

			//update coordinate data into redux
			if (messageData.action === "updateStates") {
				if (!(messageData.value instanceof Map))
					throw new Error("Message value must be an array")
				dispatch(task8UpdateStates(messageData.value))
			}
		};

		window.addEventListener("message", handler);

		// Don't forget to remove addEventListener
		return () => window.removeEventListener("message", handler);
	}, []);

	const changeAdvantages = (index: number, value: string) => {
		// setAdvantages((prev) => {
		// 	const temp = [...prev];
		// 	temp[id] = value;
		// 	return temp;
		// });
		dispatch(task7ChangeAdvantages({ index, value }))
	};

	const changeDisadvantages = (index: number, value: string) => {
		// setDisadvantages((prev) => {
		// 	const temp = [...prev];
		// 	temp[id] = value;
		// 	return temp;
		// });
		dispatch(task7ChangeDisadvantages({ index, value }))
	};

	const handleAddRow = () => {
		dispatch(task7AddRow())
	};

	const handleDeleteRow = (id: number) => {
		dispatch(task7DeleteRow(id))
	};

	const handleElementFunctionChange = (element: string, value: string) => {
		// setSelectedElements((prev) => {
		// 	const temp = new Map(prev);
		// 	temp.set(element, value);
		// 	return temp;
		// });
	};

	return (
		<main className="w-full text-slate-800 px-6 py-8 poppins flex flex-col gap-4 max-w-screen-lg mx-auto with-custom-popover">
			<h1>Fertilizer: More Harm than Good?</h1>
			<p>
				<strong>Task 7</strong>: Fertilizing is one strategy to manage
				oil palm plantations. Imagine you work on an oil palm
				plantation. A new colleague says he has heard that synthetic
				fertilizers have environmental disadvantages. He asks what you
				know about possible advantages and disadvantages.{" "}
				<strong>
					<em>List</em>
				</strong>{" "}
				what you know in the table below.
			</p>
			<p>
				Oil palm management strategy 1:{" "}
				<strong>Synthetic Fertilizing</strong>
			</p>

			{/* Interactive table */}
			<div className="text-xs text-center">
				<strong>Table 1</strong>: Environmental advantages and
				disadvantages of synthetic fertilising.
				<div className="grid grid-cols-2 rounded-md border-2 border-primary-900">
					<div className="border border-primary-900 py-1 bg-primary-900 rounded-tl-md text-white">
						Advantages
					</div>
					<div className="border border-primary-900 py-1 bg-primary-900 rounded-tr-md text-white">
						Disadvantages
					</div>
					{[...new Array(rows).keys()].map((x) => (
						<Fragment key={x}>
							<div
								className={`${
									x === rows - 1
										? "rounded-bl-md"
										: "border-b-2"
								} border-r-2 border-primary-900`}
							>
								<Textarea
									onChange={(e) =>
										changeAdvantages(x, e.target.value)
									}
									autosize
									value={advantages[x] ?? ""}
									variant="unstyled"
									className="p-1 text-primary-900 border-none focus:outline-none"
								/>
							</div>
							<div
								className={`${
									x === rows - 1
										? "rounded-br-md"
										: "border-b-2"
								} border-primary-900 relative`}
							>
								<Textarea
									onChange={(e) =>
										changeDisadvantages(x, e.target.value)
									}
									autosize
									value={disadvantages[x] ?? ""}
									variant="unstyled"
									className="p-1 text-primary-900 border-none focus:outline-none"
								/>
								{rows > 3 && (
									<button
										className="rounded-full w-5 h-5 flex-center text-gray-600 absolute z-[1] top-1.5 right-2"
										onClick={() => handleDeleteRow(x)}
									>
										<i className="bi bi-x-circle-fill"></i>
									</button>
								)}
							</div>
						</Fragment>
					))}
				</div>
				<div className="flex-center mt-2">
					<button
						className="btn text-xs py-1 px-2 shadow-md"
						onClick={handleAddRow}
					>
						<i className="bi bi-plus text-lg"></i>
						Add row
					</button>
				</div>
			</div>

			<h1 className="mt-8">Beneficial Elements for Oil Palm Growth</h1>
			<p>
				<strong>Task 8</strong>: Based on your pre-knowledge,{" "}
				<strong>
					<em>mark</em>
				</strong>{" "}
				the elements which could be essential (
				<span className="text-emerald-600">green box</span>) and
				beneficial (<span className="text-orange-500">orange box</span>)
				for oil palm growth in the periodic table.
			</p>

			<p className="font-medium text-xs text-gray-600">
				To mark an element, click on it once to turn the box green,
				click again to turn it orange, and click again to reset the
				color.
			</p>

			<iframe
				src={`${import.meta.env.VITE_TASK_BASE_URL}/session_1/task_8/`}
				title="Task 8"
				className="w-full h-96"
			></iframe>

			<p>
				<strong>Task 9</strong>: Based on your pre-knowledge and your
				markings in the periodic table,{" "}
				<strong>
					<em>fill</em>
				</strong>{" "}
				in the table below. Don‘t worry – you can add this later on, if
				you don‘t know much yet.
			</p>

			{/* Task 9 */}
			<div className="text-xs text-center">
				<strong>Table 2</strong>: Elements and their Function for the
				Oil Palm.
				<div className="grid grid-cols-2 rounded-md border-2 border-primary-900">
					<div className="border border-primary-900 py-1 bg-primary-900 rounded-tl-md text-white">
						<span className="text-sm font-medium">Element</span>
						<small className="text-center block">
							Which of your marked elements would you include in
							oil palm fertilisers?
						</small>
					</div>
					<div className="border border-primary-900 py-1 bg-primary-900 rounded-tr-md text-white">
						<span className="text-sm font-medium">
							Function for Oil Palm
						</span>
						<small className="text-center block">
							Do you have an idea what the function of this
							element for oil palm growth and health could be?
						</small>
					</div>
					{selectedElements.length === 0 ? (
						<div className="col-span-2 flex-center py-2">
							Please select any of the elements in periodic table
							above
						</div>
					) : (
						selectedElements.map((element, i) => (
							<Fragment key={i}>
								<div
									className={`${
										i === selectedElements.length - 1
											? "rounded-bl-md"
											: "border-b-2"
									} border-r-2 border-primary-900 flex-center`}
								>
									{elements.find(x => x.z === element[0])?.name} ({ elements.find(x => x.z === element[0])?.symbol })
								</div>
								<div
									className={`${
										i === selectedElements.length - 1
											? "rounded-br-md"
											: "border-b-2"
									} border-primary-900 relative`}
								>
									<Textarea
										onChange={(e) =>
											dispatch(task9UpdateFunction({ z: element[0], value: e.target.value }))
										}
										autosize
										value={element[1]}
										variant="unstyled"
										className="p-1 text-primary-900 border-none focus:outline-none"
									/>
								</div>
							</Fragment>
						))
					)}
				</div>
			</div>

			<h1 className="mt-8">Fertiliser: Nutrients for Feeding our Food</h1>
			<p>
				<strong>Task 10</strong>: Read the text “Nutrients for Feeding
				our Food”.{" "}
				<strong>
					<em>Add</em>
				</strong>{" "}
				what you learn in this text to your table on task 7, 8, and 9.
			</p>

			<h2 className="text-xl font-bold mt-2">
				Nutrients for Feeding our Food
			</h2>
			<p>
				Substances which plants use to grow are called plant nutrition
				substances. Plants take these nutrients from the soil through
				their roots and from the atmosphere through their green parts
				(e.g., leaves). Few soils are ideal for plant growth by nature
				and do not supply nutrients in adequate amounts for high yields
				(FAO, 2006). The process of adding nutrients to soil is called
				fertilisation. Thereby, the quality of the soil as well as the
				quality and quantity of agricultural products can be increased.
				The substances which contain nutritional elements are called
				fertiliser (Hamilton & Hardy, 2015). In varying proportions,
				fertiliser typically provides three main macronutrients:
			</p>

			<div className="flex flex-col gap-4">
				<div className="flex gap-2 items-center">
					<div className="w-12 h-12 flex-center border-4 text-xl border-emerald-600 bg-emerald-50 rounded-full font-bold aspect-square flex-none">
						N
					</div>
					<div className="flex flex-col">
						<div className="font-semibold">Nitrogen (N)</div>
						<div className="text-xs">for leaf growth</div>
					</div>
				</div>
				<div className="flex gap-2 items-center">
					<div className="w-12 h-12 flex-center border-4 text-xl border-emerald-600 bg-emerald-50 rounded-full font-bold aspect-square flex-none">
						P
					</div>
					<div className="flex flex-col">
						<div className="font-semibold">Phosphorus (P)</div>
						<div className="text-xs">
							for development of roots, flowers, seeds and fruit
						</div>
					</div>
				</div>
				<div className="flex gap-2 items-center">
					<div className="w-12 h-12 flex-center border-4 text-xl border-emerald-600 bg-emerald-50 rounded-full font-bold aspect-square flex-none">
						K
					</div>
					<div className="flex flex-col">
						<div className="font-semibold">Potassium (K)</div>
						<div className="text-xs">
							for stem growth, movement of water in plants and the
							promotion of flowering
						</div>
					</div>
				</div>
			</div>

			<p>
				Also, other macronutrients such as calcium (Ca), magnesium (Mg)
				and sulphur (S) are added to most fertiliser. To fertilise oil
				palm, micronutrients such as copper (Cu), zinc (Zn) or boron (B)
				are added to meet the specific needs of the plant (Kochhar &
				Gujral, 2020).
			</p>

			<h2 className="text-xl font-bold mt-2">Forms of Fertiliser</h2>

			<p className="-mt-2">
				The most common multi-nutrient fertiliser for industrial
				purposes is the three-component NPK fertiliser (containing
				chemically produced nitrogen, phosphorus and potassium). Also,
				there is mineral (mined phosphorus and potash) and organic
				fertiliser. One organic option is stall fertiliser, which is a
				mixture of animal manure. Manure naturally contains N, P and K,
				as well as other macro- and micro-nutrients.
			</p>

			<p>
				Manure increases the amount of organic matter in the soil and
				the soil’s capacity to hold water. This improves the soil’s
				tolerance against droughts and helps soil processing (Hamilton &
				Hardy, 2015).
			</p>

			<p>
				Within oil palm management, synthetic NPK fertiliser is used.
				They are often criticised to reduce soil fertility and harm soil
				microbes when applied in large quantities. On the other hand,
				one can mix the three components to meet the specific needs of
				the soil and scatter them accordingly.
			</p>

			<figure className="flex flex-col items-center">
				<img
					src={image11}
					alt="A man mixing and scattering oil palm fertiliser"
					className="max-w-md w-full"
				/>
				<figcaption className="text-sm text-center">
					<strong>Figure 11</strong>: Mixing and scattering oil palm
					fertiliser.
				</figcaption>
			</figure>

			<p>
				Hence, the percentages of N, P and K often vary in
				multi-nutrient fertiliser, depending on the soils in which they
				are used. If applied correctly, fertiliser leads to the
				enhancement of plant growth and increases crop yield. As already
				mentioned, most soils supply inadequate amounts of nutrients for
				agricultural purposes. Therefore, not using fertiliser impairs
				(large-scale) cultivation of crops in general (FAO, 2006).
				Moreover, fertilisation is needed to feed the world (Sedlacek et
				al., 2020). However, heavy fertilising can also cause soil and
				groundwater pollution, as the nutrients get easily washed away
				by water. The availability of N, P and K in the soil should be
				sufficient, but not too high. Low availabilities will lead to
				hampered growth and low yield. Too high availabilities may lead
				to disturbed plant growth and negative effects on yield. In both
				cases, the quality of harvested products can be decreased. The
				conflict of short-term gains vs. long-term losses must be
				considered when working with synthetic NPK fertiliser.
			</p>

			<h1>Nutrients for Oil Palm Health</h1>

			<p>
				Additional information: Besides plant growth, nutrients are also
				important for plant health. Below, there are examples of
				unhealthy trees with nutrient deficiencies (
				<a
					href="https://www.mdpi.com/2077-0472/11/2/183/htm"
					target="_blank"
					className="text-blue-500 underline decoration-dotted"
				>
					Yarak et al., 2021
				</a>
				).
			</p>

			<p className="italic">
				Supplementary question:
				<br />
				Do you know the same or similar nutrient deficiency symptoms
				from other plants?
			</p>

			<div className="flex flex-col gap-4">
				{
					[...nutrientDeficiencies.entries()].map(([element, x]) =>
						<div key={ element } className="bg-emerald-50 border border-emerald-900 rounded-md flex flex-col md:flex-row px-4 py-4 gap-2 shadow-lg">
							<div className="flex-none">
								<Carousel
									sx={{width:320, maxWidth: 320, borderRadius: "0.3rem", overflow: "clip" }}
									mx="auto"
									withIndicators
									height={ 200 }
									loop
									plugins={[ autoplay.current ]}
									onMouseEnter={ autoplay.current.stop }
									onMouseLeave={ autoplay.current.reset }
								>
									{
										x.images.map((image, i) => (
											<Carousel.Slide key={ i }>
												<img src={ image } alt="" className="w-full h-full object-cover" />
											</Carousel.Slide>
										))
									}
								</Carousel>
							</div>
							<div className="flex flex-col text-center md:text-left">
								<p><strong>{ element }</strong></p>
								<p className="text-sm">{ x.description }</p>
							</div>
						</div>
					)
				}
			</div>
		</main>
	);
}
