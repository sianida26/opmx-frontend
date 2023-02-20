import image8 from "@/assets/image8.png";
import InfoBox from "@/components/InfoBox";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateValueTask6 } from "@/redux/slices/session1Slice";

export default function S1P9() {
	
	const value = useAppSelector(selector => selector.session1.task6?.value) ?? "";
	const dispatch = useAppDispatch()

	const handleTask6Change = (value: string) => {
		dispatch(updateValueTask6(value))
	}

	return (
		<main className="w-full text-slate-800 px-6 py-8 poppins flex flex-col gap-4 max-w-screen-lg mx-auto with-custom-popover">
			<h1>Scientific Data: Land-Use Change on Sumatra</h1>
			<p>
				<strong>Task 6: Analyse</strong> the diagram on this page with a
				focus on oil palm plantations.
			</p>
			<figure className="flex flex-col items-center text-xs text-center md:flex-row md:items-start">
				<img
					src={image8}
					alt="A Graph"
					className="md:w-1/2 md:flex-grow-0"
				/>
				<figcaption className="md:pt-4">
					<strong>Figure 10</strong>: Changes in land-scapes in Jambi
					Province, Indonesia from 1990 to 2011. Rainforest (dark
					green diamonds), rubber (light green circles), oil palm (red
					squares), shrub/bushland (grey up-pointing triangles), and
					‘other’ (blue down-pointing triangles). ‘Other’ includes
					food crops, timber and fruit tree plantations. Adapted from
					Clough et al. (2016, p. 2).
				</figcaption>
			</figure>
			<p>
				<strong>Outline</strong> 1-2 possible key message(s) each from
				your point of view.
			</p>

			<div className="w-full border border-primary-900 rounded-md px-2 focus-within:ring-primary-900 focus-within:ring-2">
				{/* input label */}
				<span className="text-xs">Key message(s):</span>

				{/* the input */}
				<textarea
					value={value}
					onChange={(e) => handleTask6Change(e.target.value)}
					className="w-full relative text-sm min-h-24 py-2 focus:outline-none"
				/>
			</div>

			<InfoBox>
				<div className="text-sm flex flex-col gap-2">
					<p>
						<strong>
							How to: Critically Assess Sources of Information
						</strong>
					</p>
					<p>
						Information literacy is important when dealing with science
						learning and socioscientific issues (Klosterman & Sadler,
						2008). Whenever you are confronted with given information,
						you should ask yourself the following questions (adapted
						from Missouri Edu, 2012):
					</p>
					<ol className="list-decimal list-inside flex flex-col gap-2">
						<li>
							<span>Addressers and Addressees:</span>
							<ul className="list-disc pl-4">
								<li>Who (person) or what (company, organisation) is presenting the information?</li>
								<li>What expertise and motifs might the addressers have?</li>
								<li>What is the purpose of the source?</li>
							</ul>
						</li>
						<li>
							<span>Representation:</span>
							<ul className="list-disc pl-4">
								<li>Does the information presented seem accurately reported (does not leave important information out or present unnecessary information)?</li>
								<li>What creative elements are used to attract/distract my attention? Why?</li>
							</ul>
						</li>
						<li>
							<span>Evidence:</span>
							<ul className="list-disc pl-4">
								<li>Is the information supported by evidence from research?</li>
								<li>If there is evidence, who is paying for the research behind the evidence?</li>
							</ul>
						</li>
					</ol>
				</div>
			</InfoBox>
		</main>
	);
}
