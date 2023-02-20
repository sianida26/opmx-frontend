import { useState } from "react";
import figure1 from "@/assets/figure1.jpg";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateValueTask4 } from "@/redux/slices/session1Slice";

export default function S1P5() {
	// const [task4, setTask4] = useState("");
	const dispatch = useAppDispatch()
	const task4 = useAppSelector(state => state.session1.task4?.value) ?? ""

	const handleTask4Change = (value: string) => {
		// setTask4(value);
		dispatch(updateValueTask4(value))
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
		</main>
	);
}
