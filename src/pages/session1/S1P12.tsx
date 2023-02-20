import InfoBox from "@/components/InfoBox";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { task13Update, task14Update } from "@/redux/slices/session1Slice";

export default function S1P12() {
	const dispatch = useAppDispatch();
	const task13Value = useAppSelector(
		(selector) => selector.session1.task13.value
	);
	const task14Value = useAppSelector(
		(selector) => selector.session1.task14.value
	);

	return (
		<main className="w-full text-slate-800 px-6 py-8 poppins flex flex-col gap-4 max-w-screen-lg mx-auto with-custom-popover">
			<h1>
				The Need for More Sustainable Oil Palm Management Practices?
			</h1>
			<InfoBox>
				<div className="w-full flex flex-col">
					<p>
						"Sustainable development is development that meets the
						needs of the present without compromising the ability of
						future generations to meet their own needs.“
					</p>
					<span className="self-end mt-2 md:mt-0">
						Brundtland Report -{" "}
						<a
							href="https://sustainabledevelopment.un.org/content/documents/5987our-common-future.pdf"
							target="_blank"
							className="text-blue-500 underline decoration-dotted"
						>
							{" "}
							Our Common Future
						</a>{" "}
						(1987, p. 467)
					</span>
				</div>
			</InfoBox>
			<p>
				<strong>Task 13</strong>: With regard to the Sustainable
				Development definition and your pre-knowledge,{" "}
				<em>
					<strong>define</strong> Sustainable Oil Palm Management
				</em>{" "}
				in your own words.
			</p>
			<textarea
				value={task13Value}
				onChange={(e) => dispatch(task13Update(e.target.value))}
				className="border-2 border-emerald-700 rounded-sm p-2 min-h-[8rem] focus:outline-none focus:ring-1 focus:ring-emerald-700"
			/>

			<p className="mt-4">
				<strong>Task 14</strong>: Based on what you have learned so far
				in Session I,{" "}
				<em>
					<strong>explain</strong>
				</em>{" "}
				in which way you see needs and potentials for sustainable oil
				palm management strategies.
			</p>
			<small className="text-slate-700">
				<em>
					<strong>Hint</strong>: Are there specific phases of oil palm
					management (cf. page 9) for which you see a high potential
					in particular?
				</em>
			</small>
			<textarea
				value={task14Value}
				onChange={(e) => dispatch(task14Update(e.target.value))}
				className="border-2 border-emerald-700 rounded-sm p-2 min-h-[24rem] focus:outline-none focus:ring-1 focus:ring-emerald-700"
			/>
		</main>
	);
}
