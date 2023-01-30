import ObjectiveCheckbox from "@/components/ObjectiveCheckbox";
import React from "react";
import { Link } from "react-router-dom";

export default function S1P1() {
	return (
		<main className="w-full text-slate-800 px-6 py-8 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<p>
				In this first session, you will learn about the ecological and
				socioeconomic effects of oil palm plantations. You will discover
				why there is a need for sustainable oil palm management
				practices.
			</p>
			<h1>Learning Objectives</h1>
			<p>By the end of this chapter, you will be able to:</p>

			{/* Objective Checkboxes */}
			<div className="flex flex-col gap-4">
				<ObjectiveCheckbox>
					Describe what oil palm management comprises
				</ObjectiveCheckbox>
				<ObjectiveCheckbox>
					Describe ecological and socioeconomic impacts of oil palm
					plantations on the environment.
				</ObjectiveCheckbox>
				<ObjectiveCheckbox>
					Explain the impact of oil palm management strategies
					(fertilising and weeding) on ecosystem functions (soil
					fertility) and biodiversity.
				</ObjectiveCheckbox>
				<ObjectiveCheckbox>
					Describe ecological advantages and disadvantages of
					fertilising and weeding strategies.
				</ObjectiveCheckbox>
			</div>

			{/* Video */}
			<div className="flex flex-col gap-2 justify-center text-center bg-green-50 border-2 border-green-600 py-4 px-2 rounded-xl text-gray-500 text-sm">
				<span className="text-black font-semibold">
					Let&apos;s get started and dip into Jambi (video):
				</span>
				<video controls className="aspect-video">
					<source
						src="http://www.crc990.uni-goettingen.de/PR/Video_introduction_Jambi_(Dipa).mp4"
						type="video/mp4"
					/>
				</video>
				<span className="text-xs">
					<b>Figure 2:</b>{" "}
					<a
						href="http://www.crc990.uni-goettingen.de/PR/Video_introduction_Jambi_(Dipa).mp4"
						className="text-blue-600"
					>
						Dip into Jambi
					</a>
					. (Ananggadipa Raswanto, 2019).
				</span>
			</div>

			{/* navigation */}
			<div className="flex flex-col text-xs gap-4">
				<Link className="btn-next md:max-w-1/2 md:self-end md:flex-grow-0" to="../page2">
					<div className="flex flex-col">
						<p className="font-bold">Next Page:</p>
						<p>
							Density of Oil Palm Plantations in South East Asia
						</p>
					</div>
                    <i className="bi bi-chevron-right"></i>
				</Link>
			</div>
		</main>
	);
}
