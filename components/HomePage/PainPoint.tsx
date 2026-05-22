import React from "react";
import P from "../ui/P";
import { Button } from "../ui/Button";
import Section from "../ui/Section";
import Main from "../ui/Main";
import H1 from "../ui/H1";

const PainPoint = () => {
	return (
		<Section>
			<Main data-aos="fade-up" className="bg-[#7a2a0e]">
				{/* title */}
				<H1>Our Believe</H1>

				{/* description */}
				<div className="space-y-4 flex flex-col items-center justify-center">
					{/* pain */}
					<P className="max-w-3xl mx-auto">
						We believe the next major leap in AI across Africa will not come
						from text — it will come from voice. In the coming years, voice AI
						will become deeply embedded in everyday life, powering how
						businesses serve customers, how educators teach, how governments
						communicate, and how creators reach their audiences. From virtual
						assistants in local languages to AI avatars delivering training and
						healthcare information, voice will become the most natural interface
						between people and technology across the continent.
					</P>

					{/* set room */}
					<P className="max-w-3xl mx-auto">
						Yet for this future to exist, Africa needs its own speech
						infrastructure. Today’s voice AI systems are largely built for a
						handful of global languages, leaving thousands of African languages
						and accents underrepresented or entirely absent. But language is
						more than communication — it carries identity, culture, emotion,
						trust, and belonging. Without it, AI risks sounding foreign in the
						very places it is meant to serve.
					</P>

					{/* solution */}
					<P className="max-w-3xl mx-auto">
						At Realistic Labs, we are building realistic multilingual speech
						models for 2,000+ African languages and accents — creating voice AI
						that sounds natural, expressive, and culturally aware. We are
						building the voice layer for Africa’s AI era, powering creators,
						businesses, educators, AI agents, and organizations with technology
						that truly speaks like us, not just to us.
					</P>
				</div>

				{/* CTA */}
				<div className="flex items-center justify-center">
					<Button>Invest in Us</Button>
				</div>
			</Main>
		</Section>
	);
};

export default PainPoint;
