import { useState } from "react";
import figure1 from "@/assets/figure1.jpg";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updatePhasesTask3 } from "@/redux/slices/session1Slice";

export default function S1P4() {
	const dispatch = useAppDispatch();
	const phases = useAppSelector((state) => state.session1.task3.phases);
	// const [phases, setPhases] = useState<string[]>(initialPhases);

	const handlePhaseChange = (index: number, value: string) => {
		const temp = phases.map((x, i) => (i === index ? value : x));
		dispatch(updatePhasesTask3(temp));
	};

	const handleAddPhase = () => {
		// setPhases((prev) => [...prev, ""]);
		dispatch(updatePhasesTask3([...phases, ""]));
	};

	const handleDeletePhase = (index: number) => {
		if (index < 3) return;
		const temp = phases.filter((_, i) => i !== index);
		dispatch(updatePhasesTask3(temp));
	};

	return (
		<main className="w-full text-slate-800 px-6 py-8 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<h1>Phases of Oil Palm Management</h1>

			<img src={figure1} alt="A man delivering oil palm fruit" />
			<p>
				As a new oil palm plantation manager, it is your responsibility
				to think about and consider certain factors in order to
				transform a rubber area into a productive oil palm plantation.
				You are also required to consider steps or phases for organizing
				the establishment and management of an oil palm plantation.
			</p>
			<p>
				<strong>Task 3</strong>: Based on your pre-knowledge and the
				video below, write and explain in short at least three possible
				phases.
			</p>

			<div className="flex flex-col gap-4">
				{phases.map((phase, i) => (
					<div key={i} className="relative">
						{/* input label */}
						<span className="absolute top-1.5 left-2 z-[1] text-xs">
							Phase {i + 1}{" "}
							{i === 0 &&
								phase === "" &&
								"(e.g., Preparation of land)"}
							:
						</span>

						{/* the input */}
						<textarea
							value={phase}
							onChange={(e) =>
								handlePhaseChange(i, e.target.value)
							}
							className="w-full relative border border-primary-900 rounded-md text-sm min-h-24 pt-6 pb-2 px-2"
						/>

						{/* delete button (only for phase 4 and on) */}
						{i >= 3 && (
							<button
								className="rounded-full w-5 h-5 flex-center text-gray-600 absolute z-[1] top-1.5 right-2"
								onClick={() => handleDeletePhase(i)}
							>
								<i className="bi bi-x-circle-fill"></i>
							</button>
						)}
					</div>
				))}

				<button className="btn self-center" onClick={handleAddPhase}>
					<i className="bi bi-plus-lg"></i>
					Add Phase
				</button>
			</div>

			<div className="p-2 md:p-4 rounded-md bg-green-50 border border-green-600 flex flex-col gap-4">
				<video controls className="aspect-video">
					<source
						src="https://youtu.be/pLO7tG__I8g"
						type="video/mp4"
					/>
				</video>
				<p className="text-xs">
					<strong>Video 2</strong>: Tutorial Perkebunan Kelapa Sawit
					Berkelanjutan: Tanaman Menghasilkan. (Conservation
					International, 2019). https://youtu.be/pLO7tG__I8g
				</p>
			</div>
		</main>
	);
}
