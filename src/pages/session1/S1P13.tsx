import InfoBox from "@/components/InfoBox";
import infographic1 from "@/assets/infographic1.png";
import infographic2 from "@/assets/infographic2.png";
import infographic3 from "@/assets/infographic3.png";

export default function S1P13() {
	return (
		<main className="w-full text-slate-800 px-6 py-8 poppins flex flex-col gap-4 max-w-screen-lg mx-auto with-custom-popover">
			<h1>Infographic: Oil Palm Management</h1>
			<div className="flex">
				<div className="flex flex-col gap-4">
					<p><strong>Task 15</strong>: Go back to your first draft of the infographic on oil palm management from the beginning of this session.</p>
					<p><em>Add</em> at least 4 elements that were new to you during Session I.</p>
					<p><strong>Time</strong>: max. 15 minutes for further development</p>
					<p>Upload your revised infografic (draft) to your LMS course for peer and lecturer feedback. It does not need to be finalised now. You will continue to revise and enrich the infographic in the next two sessions.</p>
				</div>
				<div>

				</div>
			</div>

			<p>
				<strong>Task 16</strong>: Please, <strong><em>give feedback</em></strong> to at least one infographic of your course members in the LMS. Look at the possible feedback criterias below.
			</p>
			<div>
				<p><strong>Feedback Criteria for Designing Infographics:</strong></p>
				<ol className="list-decimal pl-4 flex flex-col gap-4 mt-4">
					<li><strong>Content/Clarity</strong>: covers topic clearly and scientifically correct with appropriate details and examples; ensures that infographic is self-explanatory; inclusion of new facts learned throughout the sessions.</li>
					<li><strong>Design/Layout</strong>: makes use of font, color, graphics, effects, etc., to enhance the presentation.</li>
					<li><strong>Audience</strong>: appropriately targets general audience (in this case: peers) through using common language and/or analogies.</li>
					<li><strong>Graphics/Images</strong>: all graphics/images are related to the topic and make it easier to understand.</li>
					<li><strong>References</strong>: cite sources used appropriately; all images either original or comply with copyright law.</li>
				</ol>
			</div>
			
			<div className="flex flex-col">
				<small>adapted from: Digital Media Center at the Anderson Academic Commons (2021).</small>
				<small><a href="https://libguides.du.edu/c.php?g=583438&p=4029147" target="_blank" className="text-blue-500 underline decoration-dotted">https://libguides.du.edu/c.php?g=583438&p=4029147</a></small>
			</div>

			<InfoBox>
				<div className="flex flex-col gap-4">
					<p>
						<strong>How to</strong>: Infographics are quick and
						clear visual representations of information, data, or
						knowledge.
					</p>
					<div className="flex flex-col gap-3 lg:flex-row">
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
                        <div className="lg:whitespace-nowrap">
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
