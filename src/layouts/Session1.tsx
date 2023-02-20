import EFForTSLogo from "../assets/logo/EFForTS.png";
import DFGLogo from "../assets/logo/DFG.png";
import bookIcon from "@/assets/book-letter-a.svg";
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
			<section id="landing-cover" className="relative w-full lg:shadow-xl lg:border-b-2 lg:border-primary-800">
				{/* content */}
				<div className="p-4 md:py-2 flex flex-col md:flex-row gap-2 xl:max-w-screen-xl xl:mx-auto relative lg:justify-between">
					{/* logo */}
					<span className="bg-zinc-50 py-2 px-2 bg-opacity-50 flex-none self-start lg:self-start flex gap-2 rounded-lg lg:rounded-md items-center">
						<img src={EFForTSLogo} alt="" className="w-4 h-4" />
						<div className="w-px border rounded-full bg-zinc-300 border-zinc-300 self-stretch "></div>
						<img src={DFGLogo} alt="" className="h-4 lg:h-3.5" />
					</span>
					<div className="flex flex-col lg:items-center gap-4 lg:flex-row">
						{/* left side */}
						<div className="flex flex-col gap- lg:pl-4">
							<div className="flex items-center flex-col md:items-baseline text-white lg:flex-row gap-2 lg:gap-2">
								{/* title */}
								<span className="text-3xl md:text-base font-semibold montserrat text-center md:text-left lg:text-left">
									Session I:
								</span>
								<span className="text-center lg:text-left font-semibold md:text-xs md:font-normal lg:font-semibold montserrat">
									Oil Palm Plantations &minus; How to Manage
									Them?
								</span>
							</div>
						</div>
					</div>

					{/* appendix */}
					<div className="absolute lg:static top-4 md:top-2 right-2 flex items-center rounded-md bg-[#D9D9D9]/50 text-white p-1 lg:px-2 text-[0.75rem] montserrat gap-1">
						<img src={ bookIcon } alt="Book icon with letter 'A'" />
						<span className="hidden lg:inline">Appendix</span>
					</div>
				</div>
			</section>
			<Outlet />
			{/* navigation */}
			<div className="flex flex-col text-xs gap-4 md:flex-row md:justify-between w-full max-w-screen-lg mx-auto px-6 pb-4 poppins">
				{currentPage > 1 ? (
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
				) : <span></span>}
				<Link
					className="btn-next md:max-w-1/2 md:self-end md:flex-grow-0"
					to={currentPage === session1.length ? './finish' : `./page${ currentPage + 1 }`}
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
