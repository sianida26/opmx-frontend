import { useEffect } from "react";
import { IFrameTaskMessage } from "@/interfaces";
import { useAppDispatch } from "@/redux/hooks";
import { updateStatesTask5 } from "@/redux/slices/session1Slice";

export default function S1P7() {

	const dispatch = useAppDispatch()

	useEffect(() => {
		const handler = (
			ev: MessageEvent<IFrameTaskMessage<("+"|"-"|"")[]>>
		) => {
			const messageData = ev.data;
			if (typeof messageData !== "object") return;
			if (!messageData.taskId) return;
			if (messageData.taskId !== "s1t5") return;
			if (!messageData.value) return;

			//update coordinate data into redux
			if (messageData.action === "updateStates") {
				if (!(messageData.value instanceof Array))
					throw new Error("Message value must be an array")
				dispatch(updateStatesTask5(messageData.value))
			}
		};

		window.addEventListener("message", handler);

		// Don't forget to remove addEventListener
		return () => window.removeEventListener("message", handler);
	}, []);

	return (
		<main className="w-full text-slate-800 px-6 py-8 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<h1>Oil Palm Plantations: Effects on Ecosystem Functions</h1>

			<p>
				<strong>Task 5</strong>: Look at the effect of oil palm
				plantations on each ecosystem function.
			</p>
			<p>
				If you think oil palm plantations have a positive effect, give a
				“+” sign
			</p>
			<p>If you think they have a negative effect, give a “-” sign</p>
			<p>click on the box to switch between “+” and “-” sign</p>
			<iframe
				src={`${import.meta.env.VITE_TASK_BASE_URL}/session_1/task_5/`}
				title="Task 1"
				className="w-full h-96"
			></iframe>
			<p className="text-xs">
				<strong>Figure 7</strong>: Net effects on ecosystem functions of Oil palm
				plantations. Net effects do not imply that all effects on a
				given ecosystem function are positive or negative, but that the
				majority or most-dominant effects are in the given direction.
				Estimates of net effect direction and correlation are
				qualitative and are based on the synthesis of literature
				presented in Dislich et al., 2017. Adapted from Meijaard et al.
				(2021, p. 30).
			</p>
		</main>
	);
}
