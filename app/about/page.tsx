import { Button } from "@/components/ui/Button";
import H2 from "@/components/ui/H2";
import Main from "@/components/ui/Main";
import Link from "@/components/ui/NextLink";
import P from "@/components/ui/P";
import Section from "@/components/ui/Section";
import { socialLinks } from "@/data/footerData";
import React from "react";

const AboutPage = () => {
	return (
		<Section className="pt-36 md:pt-38">
			<Main className="bg-[#7a2a0e]">
				<div className="flex flex-col gap-6 max-w-lg mx-auto">
					{/* description */}
					<div>
						<H2>Our Believe</H2>
						<div className="space-y-3">
							<P>
								We believe the next major leap in AI across Africa will not
								happen through text alone — it will happen through voice.
							</P>
							<P>
								In the coming years, millions of businesses, creators, schools,
								governments, and non-profit organizations across Africa will
								adopt voice AI as part of everyday life. Virtual AI assistants
								will handle customer support in local languages. AI avatars will
								train employees, teach students, and deliver healthcare
								information in culturally familiar voices. Creators will produce
								content that speaks directly to communities in the languages,
								accents, and expressions people truly connect with.
							</P>
							<P>
								But for this future to exist, Africa needs its own speech
								infrastructure.
							</P>
						</div>
					</div>

					{/* The problem */}
					<div>
						<H2>The Problem</H2>
						<div className="space-y-3">
							<P>
								Today, most voice AI systems are built primarily for a small
								number of global languages and accents. Thousands of African
								languages remain underserved, underrepresented, or completely
								ignored. Yet language is more than communication — it carries
								identity, culture, emotion, trust, and belonging.
							</P>
							<P>
								We believe Africa deserves speech AI that sounds natural,
								emotionally expressive, and culturally aware — AI that feels
								less like a machine and more like speaking to someone from your
								own community.
							</P>
							<P>That is why Realistic Labs exists.</P>
						</div>
					</div>

					{/* The solution */}
					<div>
						<H2>The Solution</H2>

						<div className="space-y-3">
							<P>
								At Realistic Labs, we are building realistic multilingual speech
								models for 2,000+ African languages and accents. Our mission is
								to power the next generation of creators, businesses, AI agents,
								educators, and non-profit organizations with voice technology
								that truly understands Africa.
							</P>
							<P>
								We are not simply building text-to-speech systems. We are
								building Africa&apos;s voice layer for the AI era.
							</P>
							<P>
								If you believe the future of AI should speak African languages
								naturally, preserve culture, and unlock opportunity for millions
								across the continent — we invite you to invest in that future
								with us.
							</P>
						</div>
					</div>

					{/* CAT */}
					<div>
						<H2>Invest in Realistic Labs</H2>
						<P>The future of AI in Africa will speak with an African voice.</P>

						{/* CAT */}
						<div className="mt-8 flex justify-center">
							<Button>Invest in Us</Button>
						</div>
					</div>
				</div>
			</Main>
		</Section>
	);
};

export default AboutPage;
