import { useEffect } from "react";
import figure4 from "@/assets/figure4.png";
import figure5 from "@/assets/figure5.png";
import figure6 from "@/assets/figure6.png";
import InfoBox from "@/components/InfoBox";
import { useAppDispatch } from "@/redux/hooks";
import { updateCoordinateTask1 } from "@/redux/slices/session1Slice";
import { IFrameTaskMessage } from "@/interfaces";

export default function S1P2() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const handler = (
			ev: MessageEvent<IFrameTaskMessage<number[]>>
		) => {
			const messageData = ev.data;
			if (typeof messageData !== "object") return;
			if (!messageData.taskId) return;
			if (messageData.taskId !== "s1t1") return;
			if (!messageData.value) return;

			//update coordinate data into redux
			if (messageData.action === "updateCoordinate") {
				if (!(messageData.value instanceof Array))
					throw new Error("Message value must be an array")
				dispatch(updateCoordinateTask1(messageData.value))
			}
		};

		window.addEventListener("message", handler);

		// Don't forget to remove addEventListener
		return () => window.removeEventListener("message", handler);
	}, []);

	return (
		<main className="w-full text-slate-800 px-6 py-8 poppins flex flex-col gap-4 max-w-screen-lg mx-auto">
			<h1>Density of Oil Palm Plantations in South East Asia</h1>
			<p>
				Oil palm thrives best in the zone of evergreen tropical
				rainforests on both sides of the equator. Since the beginning of
				the 20th century, it has been cultivated on a large scale and
				commercially produced in plantations around the world (Meijaard
				et al., 2018). The total planted area of closed-canopy oil palm
				plantation around the world is estimated as 21 million hectares
				(Mha), for Southeast Asia as 18,7 Mha and for Indonesia as 12
				Mha (Descals et al., 2021). Exports from both countries account
				more than 85% of the global palm oil production (Qaim et al.
				2020 based on FAO, 2019).
			</p>

			{/* Task 1 */}
			<p>
				<strong>Task 1</strong>: Based on your pre-knowledge, mark where
				in Indonesia (Southeast Asia) large areas of oil palm
				plantations are located on the map . For the marking, you can
				click on the map to mark the area
			</p>
			<iframe
				src={`${import.meta.env.VITE_TASK_BASE_URL}/session_1/task_1/`}
				title="Task 1"
				className="w-full h-96"
			></iframe>

			<img src={figure4} alt="Two maps" />
			<caption className="text-xs">
				<strong>Figure 1</strong>: The two density maps above show the
				density of industrial oil palm plantations (left) and of
				smallholder plantations (right). The maps have a spatial
				resolution of 10 km and represent the surface of closed-canopy
				oil palm, in hectares, in an area of 109 hectares (Descals et
				al., 2021).
			</caption>

			<InfoBox>
				Oil palm plantation can have either of two forms: smallholder or
				industrial plantations. In Indonesia, oil palm plantations which
				cultivate less than 25 ha are labeled smallholdings. Industrial
				plantations can cover thousands of hectares (Meijaard, 2018). In
				this unit, we will focus on industrial plantations which
				represent ca. 67 % of the plantation area in Indonesia (Descals
				et al., 2021).
			</InfoBox>

			{/* Photos */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="flex flex-col items-center gap-1">
					<img
						src={figure5}
						alt="Figure 5"
						className="w-full object-cover aspect-square"
					/>
					<caption className="text-xs">
						<strong>Figure 2</strong>: Aerial photo of large-scale
						industrial plantation in Jambi province.
					</caption>
				</div>
				<div className="flex flex-col items-center gap-1">
					<img
						src={figure6}
						alt="Figure 6"
						className="w-full object-cover aspect-square"
					/>
					<caption className="text-xs">
						<strong>Figure 3</strong>: Smallholder plantation in
						Jambi province.
					</caption>
				</div>
			</div>
		</main>
	);
}
