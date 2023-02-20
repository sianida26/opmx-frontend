import infographic1 from "@/assets/infographic1.png";
import infographic2 from "@/assets/infographic2.png";
import infographic3 from "@/assets/infographic3.png";
import InfoBox from "@/components/InfoBox";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";
import { IFrameTaskMessage } from "@/interfaces";
import { updateValueTask2 } from "@/redux/slices/session1Slice";

export default function S1P3() {

	const dispatch = useAppDispatch();

	useEffect(() => {
		const handler = (
			ev: MessageEvent<IFrameTaskMessage<string[]>>
		) => {
			const messageData = ev.data;
			if (typeof messageData !== "object") return;
			if (!messageData.taskId) return;
			if (messageData.taskId !== "s1t2") return;
			if (!messageData.value) return;

			//update coordinate data into redux
			if (messageData.action === "updateValues") {
				if (!(messageData.value instanceof Array))
					throw new Error("Message value must be an array")
				dispatch(updateValueTask2(messageData.value))
			}
		};

		window.addEventListener("message", handler);

		// Don't forget to remove addEventListener
		return () => window.removeEventListener("message", handler);
	}, []);

	return (
		<main className="w-full text-slate-800 px-6 py-8 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<h1>Infographic: Oil Palm Management</h1>
			<p>What do you know about oil palm management?</p>

			<p>
				<strong>Task 2</strong>: Based on your pre-knowledge, design a
				first draft of an infographic on oil palm management.
			</p>
			<p>
				You can use the oil palm below as a starting point and add any
				text, icons and figures. Be as creative as you like. You can
				design it on paper (hand-drawn and scan) or use an app/tool you
				like to work with, e.g., PowerPoint or Canva.
			</p>
			<p>
				<strong>Time</strong>: max. 20 minutes for the first draft.
			</p>
			<p>
				<strong>Outlook</strong>: At the end of each session, you can
				enrich your infographic and upload it to your Learning
				Management System (LMS) course for feedback. The infographic
				should serve as a portfolio and overarching task for the whole
				unit. It should include a selection of the most important
				information for you and does not necessarily cover all the
				content of the unit. After completing the third session, you
				submit your final infographic in Bahasa Indonesia (max. 2 pages
				A4 size or other format in equal size). You will find review
				criteria for the infographics at the end of this session.
			</p>
			<iframe
				src={`${ import.meta.env.VITE_TASK_BASE_URL }/session_1/task_2/`}
				title="Task 1"
				className="w-full h-96"
			></iframe>

			<InfoBox>
				<div className="flex flex-col gap-4">
					<p>
						<strong>How to</strong>: Infographics are quick and
						clear visual representations of information, data, or
						knowledge.
					</p>
					<div className="flex flex-col gap-3">
                        <div>
                            <p>For examples of infographics, click for zoom:</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                <a href={infographic1} target="_blank">
                                    <img
                                        src={infographic1}
                                        alt="Example Infographic 1"
                                    />
                                </a>
                                <a href={infographic2} target="_blank">
                                    <img
                                        src={infographic2}
                                        alt="Example Infographic 2"
                                    />
                                </a>
                                <a
                                    href={infographic3}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={infographic3}
                                        alt="Example Infographic 3"
                                    />
                                </a>
                            </div>
                        </div>
                        <div>
                            <p>Exemplary guiding questions for start of design:</p>
                            <ul className="list-disc list-outside pl-4">
                                <li>What are important steps in oil palm management?</li>
                                <li>How old and high can oil palms become?</li>
                                <li>What do oil palms need to grow (grow conditions)?</li>
                                <li>What and how is the oil palm harvested?</li>
                                <li>How much palm oil is harvested per month/year/decade?</li>
                                <li>...</li>
                            </ul>
                        </div>
					</div>
				</div>
			</InfoBox>
		</main>
	);
}
