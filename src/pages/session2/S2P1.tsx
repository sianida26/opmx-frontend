import InfoBox from "@/components/InfoBox";
import image20 from "@/assets/image20.png";
import ObjectiveCheckbox from "@/components/ObjectiveCheckbox";

export default function S2P1() {
	return (
		<main className="w-full text-slate-800 px-6 py-8 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<p>
				To find out about best maintenance of oil palm, decision-makers
				and oil palm farmers need scientific knowledge about the
				relationships between oil palm management practices (fertilising
				and weeding), the oil palm itself and the environment of the oil
				palm (especially soil). Without this research-based knowledge,
				management practices may lead to ineffective, expensive and
				harmful cultivation. To learn about these relationships, you
				will design a network of relationships regarding the effects of
				oil palm management practices in this second session in a group
				activity. You will need the network in Session III as well.
			</p>

			<InfoBox>
				<div className="flex flex-col md:flex-row-reverse text-black text-sm gap-4 text-center md:text-left">
					<figure className="flex flex-col items-center text-xs">
						<a href={image20} target="_blank">
							<img src={image20} alt="Example of infographics" />
						</a>
						<figcaption>
							<strong>Figure 1:</strong>
							Network of relationships. Dischereit (2020). Adapted
							from Darras et al. (2019, p. 8).
						</figcaption>
						<em>Click on the image to preview</em>
					</figure>
					<div className="flex flex-col">
						<h2 className="font-bold">Network of Relationships</h2>
						<p>
							A network of relationships is a graphic overview of
							how different concepts influence and interact with
							each other.
						</p>
					</div>
				</div>
			</InfoBox>

			<h1>Learning Objectives</h1>

			{/* Objective Checkboxes */}
			<div className="flex flex-col gap-4">
				<ObjectiveCheckbox>
					Analyse information about oil palm management practices and
					the use of NPK fertiliser and herbicides on the environment.
				</ObjectiveCheckbox>
				<ObjectiveCheckbox>
					Design a simplified overview on the effects of oil palm
					management practices (NPK fertiliser and chemical weeding
					with herbicides) and their environmental effects (esp. on
					soil fertility, understory plants and soil animals).
				</ObjectiveCheckbox>
			</div>
		</main>
	);
}
