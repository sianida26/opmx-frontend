import EFForTSLogo from "../assets/logo/EFForTS.png";
import DFGLogo from "../assets/logo/DFG.png";
import { Outlet, ScrollRestoration, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import session1 from "@/data/session1";

export default function Session1() {
	const [currentPage, setCurrentPage] = useState(0);

	const location = useLocation();

	useEffect(() => {
		//retrieve page number
		const page = parseInt(
			location.pathname.match(/page(\d+)$/)?.[1] ?? "0"
		);

		setCurrentPage(page);

		//find object
		const title = session1.find((x) => x.page === page)?.title ?? "OPMX";

		//update title
		document.title = title;
	}, [location]);

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
									Oil Palm Plantations &minus; How to Manage
									Them?
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
			{/* navigation */}
			<div className="flex flex-col text-xs gap-4 md:flex-row md:justify-between w-full max-w-screen-lg mx-auto px-6 pb-4 poppins">
				{currentPage > 1 && (
					<Link
						className="btn-prev md:max-w-1/2 md:self-end md:flex-grow-0"
						to={`./page${ currentPage - 1 }`}
					>
						<i className="bi bi-chevron-left"></i>
						<div className="flex flex-col flex-grow">
							<p className="font-bold">Previous Page:</p>
							<p>{ session1.find(x => x.page === currentPage-1)?.title ?? "" }</p>
						</div>
					</Link>
				)}
				<Link
					className="btn-next md:max-w-1/2 md:self-end md:flex-grow-0"
					to={`./page${ currentPage + 1 }`}
				>
					<div className="flex flex-col">
						<p className="font-bold">Next Page:</p>
						<p>{ session1.find(x => x.page === currentPage+1)?.title ?? "End of Course" }</p>
					</div>
					<i className="bi bi-chevron-right"></i>
				</Link>
			</div>
			<ScrollRestoration />
		</div>
	);
}
