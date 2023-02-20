import { useEffect } from "react";
import EFForTSLogo from "@/assets/logo/EFForTS.png";
import DFGLogo from "@/assets/logo/DFG.png";
import checkIcon from "@/assets/check-circle-rounded.svg";
import { Link, ScrollRestoration } from "react-router-dom";

export default function Session1Finish() {
	useEffect(() => {
		document.title = "Session I Completed";
	}, []);

	return (
		<div
			className="w-screen min-h-screen overflow-x-hidden flex flex-col items-center justify-between py-4 px-4 montserrat gap-8"
			id="background-2"
		>
			
            <span className="bg-zinc-50 py-2 px-4 bg-opacity-50 flex-none self-center flex gap-2 rounded-lg items-center">
                <img src={EFForTSLogo} alt="" className="w-8 h-8" />
                <div className="w-px border rounded-full bg-zinc-300 border-zinc-300 self-stretch "></div>
                <img src={DFGLogo} alt="" className="h-6" />
            </span>
			
            <div className="flex flex-col gap-8">
                <div className="flex flex-col items-center text-white text-center gap-2">
                    <img src={checkIcon} alt="Check icon" />
                    <p className="font-semibold text-xl">Session I:</p>
                    <p className="font-semibold">Oil Palm Plantations – How to Manage Them?</p>
                    <p className="font-semibold text-3xl">Completed</p>
                </div>

                <div className="flex flex-col text-center items-center text-white gap-4">
                    <p className="text-xs">Click here to proceed to the next session</p>
                    <Link to="/session2">
                        <button className="flex items-center justify-center bg-white rounded-full pr-1 py-1 pl-3 gap-2">
                            <span className="text-primary-700 font-bold">
                                Session II
                            </span>
                            <span className="flex-none aspect-square bg-primary-700 flex-center rounded-full w-8 h-8">
                                <i className="bi bi-chevron-right"></i>
                            </span>
                        </button>
                    </Link>
                </div>

                <div className="flex flex-col text-center text-white text-xs gap-4">
                    <p>or</p>
                    <Link to="/" className="underline">Back Home</Link>
                </div>
            </div>

			<div className="flex flex-col p-3 bg-slate-100 text-slate-800 text-xs gap-4">
				<div className="">
					<p>
						Thank you very much for your engagement in the first
						session of the EFForTS unit!
					</p>
					<p>
						If you had any major difficulties with the tasks or
						technical problems, please let your lecturers and us
						know:
					</p>
				</div>

				{/* emails */}
				<div className="text-blue-500 underline break-word flex flex-col gap-2">
					<a href="mailto:finn.matthiesen@uni-goettingen.de">
						finn.matthiesen@uni-goettingen.de;
					</a>
					<a href="mailto:jacqueline.dischereit@uni-goettingen.de">
						jacqueline.dischereit@uni-goettingen.de.
					</a>
				</div>

				<p>
					Before you start with Session II, you will receive examplary
					solutions (horizon of expectations) for the tasks of Session
					I.
				</p>
			</div>
            <ScrollRestoration />
		</div>
	);
}
