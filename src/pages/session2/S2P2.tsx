import InfoBox from "@/components/InfoBox";
import image21 from "@/assets/image21.png";

export default function S2P2() {
	return (
		<main className="w-full text-slate-800 px-6 py-8 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<h1>Background: Science on Fertilising and Weeding</h1>
			<p>
				Scientists aim to provide knowledge for improving fertilising
				and weeding efficacy to minimise the environmental
				disadvantages, while still maintaining high yields. For that
				purpose, many scientific disciplines contribute to the field of
				fertilising- and weeding-related research. Here are some
				examples (cf. Sedlacek et al., 2020):
			</p>
			<ol className="flex flex-col list-decimal pl-4">
				<li>
					<strong>Microbiologists</strong> investigate nitrogen-fixing
					and denitrifying soil microorganisms to reduce greenhouse
					gases emission (nitrogen leaching losses) directly or
					indirectly caused by fertilisers.
				</li>
				<li>
					<strong>Chemists</strong> conduct research for more
					efficient herbicides (e.g., more selective herbicides) and
					fertilisers (e.g., more stable and slow-releasing
					fertilisers).
				</li>
				<li>
					<strong>Plant biologists</strong> work on developing and
					investigating genetically-optimised crops, which, e.g.,
					require less nitrogen from fertiliser or are in less
					competition with weeds.
				</li>
				<li>
					<strong>Soil scientists and engineers</strong> design more
					efficient techniques for monitoring and targeted application
					of herbicides and fertiliser, e.g., with sensors, drones and
					corresponding smart applications.
				</li>
			</ol>
			<p>
				As a foundation of each research, it is essential to get an
				overview of the research object and learn about the core
				concepts. So, let us travel back to Jambi province and get a
				better picture of the impact of fertiliser and herbicides on oil
				palm, soil and the environment.
			</p>

			<InfoBox>
				<div className="flex flex-col text-center items-center md:flex-row md:gap-2 text-base">
					<div className="flex flex-col gap-4">
						<p>
							“As we know there is a huge change […] in Sumatra from
							the lowland forest to transformation systems, like
							rubber and oil palm plantations. […] So, I think, there
							is really the need for us to study and to find the
							conciliation between the ecological functions and also
							the human welfare.“
						</p>
						<a
							className="text-xs link"
							href="https://youtu.be/ZVxUz6O_eqg?t=285"
							target="_blank"
						>
							(EFForTS-Video, 4:44-5:23)
						</a>
						<div>
							<p className="font-medium">-----Dr. Bambang Irawan-----</p>
							<p className="text-xs">
								Indonesian Member of the Board of Directors of the
								Collaborative Research Centre 990: EFForTS
							</p>
						</div>
					</div>
					<img src={ image21 } alt="Potrait of Dr. Bambang Irawan" className="lg:w-28" />
				</div>
			</InfoBox>
		</main>
	);
}
