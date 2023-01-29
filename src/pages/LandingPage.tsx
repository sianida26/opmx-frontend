import EFForTSLogo from "../assets/logo/EFForTS.png";
import DFGLogo from "../assets/logo/DFG.png";

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
		</div>
	);
}
