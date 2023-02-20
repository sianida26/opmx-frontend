import image16 from "@/assets/image16.png";
import image17 from "@/assets/image17.png";
import image18 from "@/assets/image18.png";

export default function S1P14() {
	return (
		<main className="w-full text-slate-800 px-6 py-8 poppins flex flex-col gap-4 max-w-screen-lg mx-auto with-custom-popover">
			<h1>For Future Teachers</h1>
			<p>
				If you are studying to become a teacher, you can find additional
				information on the integration of this session into your future
				teaching at schools on this page. Information of appropriateness
				of this unit for teaching at schools, useful pre-knowledge,
				alternative methods and general remarks are offered.
			</p>
			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-2 md:flex-row md:gap-4">
					<div className="md:w-28 md:flex-none">
						<img
							src={image16}
							alt="House clip art"
							className="mx-auto md:mx-0"
						/>
					</div>
					<p>
						Appropriate for{" "}
						<strong>
							senior secondary school students (age 16-18).
						</strong>{" "}
						Useful pre-knowledge: Students already know how to{" "}
						<strong>
							(critically) work with scientific information and
							data.
						</strong>
					</p>
				</div>

				<div className="flex flex-col gap-2 md:flex-row md:gap-4">
					<div className="md:w-28 md:flex-none">
						<img
							src={image17}
							alt="A person in front of whiteboard clip art"
							className="mx-auto md:mx-0"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<p>
							<strong>Some tasks</strong> could be dealt with by
							different expert groups at first. Group A: task 7;
							Group B: task 12. The groups would have to exchange
							the environmental (dis-) advantages of each oil palm
							management practice in a second step{" "}
							<strong>(Jigsaw Puzzle)</strong>.
						</p>
						<p>
							<strong>Task 13 and 14</strong> could be a{" "}
							<strong>
								homework task or an introductory task
							</strong>{" "}
							for the next session (as repetition). The students
							do not have to write a text, but can write short{" "}
							<strong>bullet points</strong> (à 15-20 words).
						</p>
						<p>
							Alternative for online teaching: share bullet points
							with the online tool{" "}
							<strong>
								<a
									href="https://pad.riseup.net"
									target="_blank"
									className="text-blue-500 underline decoration-dotted"
								>
									RiseUp Pad
								</a>
							</strong>
							. Note: address the bullet points via RiseUp Pad
							appropriately and include them into the session.
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-2 md:flex-row md:gap-4">
					<div className="md:w-28 md:flex-none">
						<img
							src={image18}
							alt="Pencil clip art"
							className="mx-auto md:mx-0"
						/>
					</div>
					<p>
						To ensure <strong>social relatedness</strong> (Deci &
						Ryan, 1993) and to motivate students to work on
						seemingly hard task, make sure they can work in pairs or
						groups.
					</p>
				</div>
			</div>
		</main>
	);
}
