import EFForTSLogo from "../assets/logo/EFForTS.png";
import DFGLogo from "../assets/logo/DFG.png";
import ObjectiveCheckbox from "@/components/ObjectiveCheckbox";

export default function LandingPage() {
	return (
		<div className="w-screen overflow-x-hidden flex flex-col poppins">
			<section id="landing-cover" className="relative w-full">
				{/* content */}
				<div className="p-4 flex flex-col gap-8">
					{/* logo */}
                    <span className="bg-zinc-50 py-2 px-4 bg-opacity-50 flex-none self-center flex gap-2 rounded-lg items-center">
						<img src={EFForTSLogo} alt="" className="w-8 h-8" />
						<div className="w-px border rounded-full bg-zinc-300 border-zinc-300 self-stretch "></div>
						<img src={DFGLogo} alt="" className="h-6" />
					</span>

					{/* left side */}
					<div className="flex flex-col gap-8">
						<div className="flex items-center flex-col text-white mt-8 gap-4">
							{/* title */}
							<span className="text-4xl font-semibold montserrat text-center">
								Oil Palm Management
							</span>
							<span className="text-center italic">
								How can weeding and fertilising contribute to
								sustainable oil palm management?
							</span>
							<span className="text-center text-sm">
								- 3<sup>rd</sup> Edition 2022 -
							</span>
						</div>

                        {/* authors */}
                        <div className="flex items-center flex-col text-white gap-4">
                            <p className="text-center">Jacqueline Dischereit*, Finn K. Matthiesen*, Gina Göhmann, Indra Fardhani, I Gede Arjana, I Made Oka Riawan, Raissa Mataniari, Safwatun Nida, & Susanne Bögeholz</p>
                            <p className="text-center text-xs font-light">Note: [* are shared first authors]. Preliminary authorships: The final order and composition of authors will be determined later.</p>
                        </div>
					</div>

                    {/* right side */}
                    <div className="flex flex-col w-full bg-white bg-opacity-70 py-6 px-4 rounded-lg text-emerald-800 gap-4">
                        <p className="text-center font-bold">Learning unit on the EFForTS - <em>Oil Palm Management Experiment (OPMX)</em></p>
                        <p className="text-center"><strong>Topic:</strong> Oil palm management strategies and its ecological and socioeconomic impacts with a focus on Jambi province, Indonesia</p>
                        <p className="text-center">The research and the development of these educational resources is conducted within the framework of the <em>Collaborative Research Centre (CRC) 990 – <strong>E</strong>cological and Socioeconomic <strong>F</strong>unctions of Tropical Lowland Rain<strong>for</strong>est <strong>T</strong>ransformation <strong>S</strong>ystems.</em> EFForTS is funded and supported by the German Research Foundation (Deutsche Forschungsgemeinschaft; DFG).</p>
                    </div>
				</div>
			</section>

            {/* Content */}
            <section className="w-full flex flex-col px-6 mt-8 gap-4">
                <h1><span className="block text-zinc-600 text-lg">Introduction:</span>Sustainable Oil Palm Management</h1>
                {/* TODO: Bold */}
                <p>Do you know how oil palm plantations are managed and in how far that is sustainable? With the help of this module, you will discover the topic of sustainable oil palm plantation management with a focus on weeding and fertilisation strategies in three sessions.</p>
                <p>The module is mostly about oil palm management strategies in Jambi, Indonesia, but you will also learn about oil palm plantations and management strategies in general. In the first session, you will discover oil palm plantation strategies and their impact on ecosystem functions (soil fertility) and biodiversity (understory plants and soil animals). Then, in Session II, you will design a network of relationships regarding the impacts of management practices on the oil palm, ecosystem functions and biodiversity. Afterwards, the Oil Palm Management Experiment (OPMX) is introduced in Session III – an experiment with the aim to develop strategies towards sustainable oil palm management. You will also do detective work on how oil palm plantations might be managed more ecological-friendly in the future.</p>
                <p>Follow the booklet page by page to not miss out on any information. There is enough room for you to write down your answers immediately. You can double-click on the green boxes to type in your answer. If you should ever need more space, feel free to use additional pages. You can follow the links behind the QR codes (right click on the QR code -&gt; open link) or scan them.</p>
                <p>If you are studying to become a teacher, there is additional information for you at the end of each session. This will help you implement your knowledge about oil palm management in your future teaching.</p>
                <ul className="list-disc list-outside pl-4">
                    <li><strong>Overarching activity</strong>: The design of an infographic on oil palm management should serve as cumulative activity for this unit.</li>
                    <li><strong>Hint for tasks</strong>: Some tasks are specifically asking for your pre-knowledge. Don&apos;t worry if you have few ideas, you can return to these tasks later on and add or modify your answers. Furthermore, some tasks are open tasks. For open tasks, there might be neither correct nor wrong answers.</li>
                    <li>Supplementary questions are no task. They should just serve as thinking stimuli for you.</li>
                </ul>
                <p>Enjoy working with this module and have fun making it your own experience with oil palm management.</p>
                <p>Terima kasih.</p>
                <p>The authors of this booklet are open for questions or feedback at any time. Contact: <a href="mailto:jacqueline.dischereit@uni-goettingen.de" className="text-sky-500 underline">Jacqueline Dischereit</a> & <a href="mailto:finn-matthiesen@uni-goettingen.de" className="text-sky-500 underline">Finn Matthiesen</a>.</p>
            </section>

            {/* Overall Learning Objectives */}
            <section className="bg-primary-800 py-8 mt-8 text-white">
                <div className="w-full flex flex-col px-6 gap-4">
                    <h1 className="text-white text-center">Overall Learning Objective</h1>
                    <p className="text-center text-lg"><em>The guiding question of the unit is: In which way can weeding and fertilising contribute to sustainable oil palm management?</em></p>
                    <p>Below, you find an overview of what you will be able to do by the end of this unit. Tick the boxes on the right, if you feel you have accomplished the learning objective. There will also be specific learning objectives at the beginning of each session.</p>
                    <div className="">
                        <p className="text-lg font-semibold">Overall Learning Objectives</p>
                        <p className="font-medium">By the end of this unit, you will be able to…</p>
                        <div className="flex flex-col mt-4 gap-2">
                            <ObjectiveCheckbox>
                            Identify environmental and socioeconomic impacts of different oil palm management strategies (different fertilising and weeding strategies) and describe corresponding advantages and disadvantages.
                            </ObjectiveCheckbox>
                            <ObjectiveCheckbox>
                            Design a simplified overview (a network of relationships) of oil palm management practices, focussing mainly on soil fertility and biodiversity (understory plants and soil animals).
                            </ObjectiveCheckbox>
                            <ObjectiveCheckbox>
                            Explain the experimental design of the Oil Palm Management Experiment (OPMX) and critically analyse as well as discuss OPMX data and results.
                            </ObjectiveCheckbox>
                            <ObjectiveCheckbox>
                            Discuss in which way weeding and fertilisation strategies can contribute to sustainable oil palm management.
                            </ObjectiveCheckbox>
                            <ObjectiveCheckbox>
                            Summarize and visualise your gained knowledge in form of an infographic.
                            </ObjectiveCheckbox>
                        </div>
                    </div>
                </div>
            </section>
		</div>
	);
}
