import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { startTask11, task11UpdateValue, task12AddRow, task12ChangeAdvantages, task12ChangeDisadvantages, task12DeleteRow } from "@/redux/slices/session1Slice";
import { Textarea } from "@mantine/core";
import { Fragment, useState, useEffect, useRef } from "react";
import image14 from "@/assets/image14.png";

interface Table3DataType {
	rows: number,
	advantages: string[],
	disadvantages: string[],
}

export default function S1P11() {
	const dispatch = useAppDispatch();
	const timerRef = useRef<HTMLSpanElement>(null);
	const [ isExpired, setExpired ] = useState(false);
	const task11Expiry = useAppSelector(selector => selector.session1.task11.expiry);
	const task11Value = useAppSelector(selector => selector.session1.task11.value)
	const rows = useAppSelector(selector => selector.session1.task12.rows)
	const advantages = useAppSelector(selector => selector.session1.task12.advantages)
	const disadvantages = useAppSelector(selector => selector.session1.task12.disadvantages)

	useEffect(() => {
		// if (task11Expiry !== null) return;
		if (task11Expiry === null)
			dispatch(startTask11());

		const interval = setInterval(() => {
			if (timerRef.current === null) return;
			if (task11Expiry === null) return;
			const currentDate = new Date();
			if (currentDate.getTime() < task11Expiry) {
				const timeDiff = task11Expiry - currentDate.getTime();
				const minutes = Math.floor(timeDiff / 60000);
				const seconds = Math.floor((timeDiff % 60000) / 1000);
				timerRef.current.innerText =
					String(minutes).padStart(2, "0") +
					":" +
					String(seconds).padStart(2, "0");
			} else {
				timerRef.current.innerText = "--:--";
				setExpired(true);
				clearInterval(interval);
			}
		}, 50);

		return () => clearInterval(interval);
	}, [task11Expiry]);

	const changeAdvantages = (index: number, value: string) => {
		dispatch(task12ChangeAdvantages({ index, value }))
	}

	const changeDisadvantages = (index: number, value: string) => {
		dispatch(task12ChangeDisadvantages({ index, value }))
	}

	const handleDeleteRow = (index: number) => {
		dispatch(task12DeleteRow(index))
	}

	const handleAddRow = () => {
		dispatch(task12AddRow())
	}

	return (
		<main className="w-full text-slate-800 px-6 py-8 poppins flex flex-col gap-4 max-w-screen-lg mx-auto with-custom-popover">
			<h1>What are weeds? 2 + 8 minute writing task</h1>
			<p>
				You have up to <strong>2 minutes</strong> to read the following
				instruction carefully:
			</p>
			<p>
				<strong>Task 11</strong>: Weeding is another strategy to manage
				oil palm plantations. Before we encounter (dis-/advantages) of
				different weeding methods, please{" "}
				<strong>
					<em>write down</em>
				</strong>{" "}
				your pre-knowledge on weeds.
			</p>
			<div className="flex flex-col">
				<p>You have approximately 8 minutes to write</p>
				<p>
					a. 1 paragraph in which you{" "}
					<strong>
						<em>define</em>
					</strong>{" "}
					shortly in your words what weeds are and give examples of
					weeds.
				</p>
				<p>
					b. 1-2 paragraphs in which you{" "}
					<strong>
						<em>explain</em>
					</strong>{" "}
					why they can be a disadvantage to crops.
				</p>
			</div>

			<p className="text-sm text-center">
				Time is ticking. When 10 min are over the task is closed
				automatically.
			</p>
			{/* timer */}
			<div className="flex-center">
				<div className="py-2 px-3 bg-emerald-50 border-2 border-emerald-600 flex-center gap-2 rounded-md w-28">
					<i className="bi bi-alarm-fill"></i>
					<span ref={timerRef} className="font-semibold text-lg">
						--:--
					</span>
				</div>
			</div>

			<Textarea
				variant="unstyled"
				autosize
				readOnly={isExpired}
				value={ task11Value }
				onChange={ (e) => dispatch(task11UpdateValue(e.target.value)) }
				minRows={8}
				placeholder="Write down your answer here"
				className="rounded-md border border-primary-800 px-2 text-lg"
			/>
			{/* <div className="flex-center">
				<button disabled={isExpired} className="btn py-1">
					<i className="bi bi-check-lg text-lg"></i>
					{isExpired ? "Saved" : "Save"}
				</button>
			</div> */}

			<div className="flex flex-col text-sm">
				<em>Supplementary question:</em>
				<em>Which weeds might exist in oil palm plantation?</em>
				{/* TODO: Link to the task */}
				<small>
					<strong>Hint</strong>: For an impression, you can have
					another look at the 360° tour (see page 10).
				</small>
			</div>

			<h1>Weeding: Ways to Battle Weeds</h1>
			<p>
				<strong>Task 12</strong>: Read the text “Ways to Control Weeds”.
				Imagine you work on an oil palm plantation. A new colleague says
				he has heard that chemical weeding with herbicides has
				environmental disadvantages. He asks what you know about
				possible advantages and disadvantages. List what you learn in
				this text on the next page.
			</p>

			<h2 className="text-xl font-bold mt-2">Ways to Control Weeds</h2>
			<p className="-mt-2">
				In cultivation, certain weeds need to be stopped from competing
				with the desired crop. So, how can you battle weeds?
			</p>
			{/* TODO: Add popover on herbicides */}
			<p>
				The most used method is to apply herbicides. Generally, there
				are selective herbicides which control only very specific weed
				species, while leaving the desired crop relatively unharmed.
				There are also non-selective herbicides, which kill all plant
				material they come in contact with. Other important distinctions
				include timing of application, mechanisms of action, and methods
				of application (Cobb & Reade, 2010). Most herbicides are applied
				as water-based sprays, using sprayers that vary in design and
				size.
			</p>

			<figure className="flex-center flex-col">
				<img src={ image14 } alt="A person spraying water-based herbicides" className="max-w-md w-full" />
				<figcaption className="text-sm"><strong>Figure 14</strong>: Spraying of water-based herbicides</figcaption>
			</figure>

			<p>
			The most used herbicide is glyphosate (Gillezeau et al., 2019). Although international assessments concluded that glyphosate does not represent a public concern and is neither toxic nor carcinogenic according to the current state of research, the use of herbicides is a controversial topic with heated discussions (comments on Tarazona et al., 2017). Generally, herbicides are regarded as effective and fast ways to kill unwanted plants even on closely planted crops (Hamilton & Hardy, 2015).
			</p>

			<p>
			They increase crop yield by decreasing competition with weeds for water, nutrients and light. Also, herbicides are said to increase economic benefits, as they are relatively cheap (Kraehmer et al., 2014). There might be health dangers for people working directly with herbicides (Cobb & Reade, 2010). Due to the weeds’ ability to adapt to the use of herbicides, resistance to chemicals is also given. Herbicides decrease ground vegetation and, therefore, reduce soil nutrient retention. Moreover, chemical herbicides contribute to water pollution. They pollute the soil where they have been applied and rainwater can also carry chemicals to other areas. Hence, some chemical herbicides end up in waterways, where they affect aquatic life (Cobb & Reade, 2010).
			</p>

			<h2 className="text-xl font-bold mt-2">Brush Cutters to Control Weeds?</h2>
			<p>Negative effects, such as nutrient leaching losses, can be reduced by using mechanical weeding (Formaglio et al., 2020). Although there are several options for mechanical weeding, the most common one is to cut down ground vegetation with a brush cutter to a height of 1-2 cm. This does not have to be done more often than herbicide application, but it reduces leaching losses, and soil, as well as water pollution, compared to the conventional herbicide weeding (Formaglio, 2020). As farmers need to pay workers to perform this, mechanical weeding is sometimes seen as the less economically profitable option.</p>
			<p>Although there are hardly any long-term investigations, the implementation of mechanical weeding has not affected oil palm yield in experiments conducted so far (Formaglio, 2020).</p>

			<h1>Weeding: More Harm than Good?</h1>
			<p>Oil palm management practice 2: Chemical weeding (herbicides)</p>

			{/* Interactive table */}
			<div className="text-xs text-center">
				<strong>Table 3</strong>: Environmental advantages and disadvantages of chemical weeding (herbicides).
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
					{ rows < 10 &&
						<button
							className="btn text-xs py-1 px-2 shadow-md"
							onClick={handleAddRow}
						>
							<i className="bi bi-plus text-lg"></i>
							Add row
						</button>
					}
				</div>
			</div>
		</main>
	);
}
