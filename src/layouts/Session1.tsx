import EFForTSLogo from "../assets/logo/EFForTS.png";
import DFGLogo from "../assets/logo/DFG.png";
import { Outlet, ScrollRestoration } from "react-router-dom";

export default function Session1() {
	return (
		<div className="w-screen overflow-x-hidden">
			<section id="landing-cover" className="relative w-full">
				{/* content */}
				<div className="p-4 flex flex-col gap-8 xl:max-w-screen-xl xl:mx-auto xl:py-8">
					{/* logo */}
					<span className="bg-zinc-50 py-2 px-4 bg-opacity-50 flex-none self-center lg:self-start flex gap-2 rounded-lg items-center">
						<img src={EFForTSLogo} alt="" className="w-8 h-8" />
						<div className="w-px border rounded-full bg-zinc-300 border-zinc-300 self-stretch "></div>
						<img src={DFGLogo} alt="" className="h-6" />
					</span>
					<div className="flex flex-col gap-8 lg:flex-row">
						{/* left side */}
						<div className="flex flex-col gap-8 lg:pl-4">
							<div className="flex items-center lg:items-start flex-col text-white mt-8 lg:mt-0 gap-4">
								{/* title */}
								<span className="text-4xl font-semibold montserrat text-center lg:text-left">
									Session I:
								</span>
								<span className="text-center lg:text-left font-semibold text-2xl">
                                Oil Palm Plantations &minus; How to Manage Them?
								</span>
							</div>

							{/* authors */}
							<div className="flex items-center lg:items-start lg:text-left flex-col text-white gap-4">
								<p className="text-center lg:text-left">
									Jacqueline Dischereit*, Finn K. Matthiesen*,
									Gina Göhmann, Indra Fardhani, I Gede Arjana,
									I Made Oka Riawan, Raissa Mataniari,
									Safwatun Nida, & Susanne Bögeholz
								</p>
								<p className="text-center lg:text-left text-xs font-light">
									Note: [* are shared first authors].
									Preliminary authorships: The final order and
									composition of authors will be determined
									later.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Outlet />
			<ScrollRestoration />
		</div>
	);
}
