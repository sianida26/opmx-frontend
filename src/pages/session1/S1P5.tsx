import { useState } from "react";
import figure1 from "@/assets/figure1.jpg";
import { Link } from "react-router-dom";

export default function S1P5() {
	const [task4, setTask4] = useState("");

	const handleTask4Change = (value: string) => {
		setTask4(value);
	};

	return (
		<main className="w-full text-slate-800 px-6 py-8 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<h1>Oil Palm Plantation as Ecosystem</h1>

			<p>
				Assess oil palm plantations as an ecosystem by exploring the
				interactive 360° tour of a plantation in Jambi province (click
				on the picture below to start the tour in your browser).
			</p>

			<p>
				<strong>Task 4</strong>: What are potential functions of oil
				palm plantations as an ecosystem? Take notes.
			</p>

			<div className="relative">
				{/* input label */}
				<span className="absolute top-1.5 left-2 z-[1] text-xs">
					Potential ecosystem functions:
				</span>

				{/* the input */}
				<textarea
					value={task4}
					onChange={(e) => handleTask4Change(e.target.value)}
					className="w-full relative border border-primary-900 rounded-md text-sm min-h-24 pt-6 pb-2 px-2"
				/>
			</div>

			<div className="relative">
				<iframe
					src="https://www.crc990.uni-goettingen.de/PR/Oil palm_en/app-files/index.html"
					title="360-degree plantation"
					className="w-full aspect-square md:aspect-video"
				></iframe>
				<span className="absolute bottom-0 right-0 bg-gray-400 bg-opacity-50 text-2xs text-gray-300 p-1">360-degree plantation. EFForTS, designed by Finke, 2021.</span>
			</div>

			{/* navigation */}
			<div className="flex flex-col text-xs gap-4 md:flex-row md:justify-between">
				<Link
					className="btn-prev md:max-w-1/2 md:self-end md:flex-grow-0"
					to="../page3"
				>
					<i className="bi bi-chevron-left"></i>
					<div className="flex flex-col flex-grow">
						<p className="font-bold">Previous Page:</p>
						<p>Infographic: Oil Palm Management</p>
					</div>
				</Link>
				<Link
					className="btn-next md:max-w-1/2 md:flex-grow-0"
					to="../page5"
				>
					<div className="flex flex-col">
						<p className="font-bold">Next Page:</p>
						<p>Oil Palm Plantation as Ecosystem</p>
					</div>
					<i className="bi bi-chevron-right"></i>
				</Link>
			</div>
		</main>
	);
}
