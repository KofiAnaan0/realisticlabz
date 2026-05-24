"use client";

import React, { useEffect, useRef, useState } from "react";
import P from "../ui/P";
import H1 from "../ui/H1";
import { Button } from "../ui/Button";
import Main from "../ui/Main";
import Section from "../ui/Section";
import { useRouter } from "next/navigation";

const Hero = () => {
	const videoRef = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{
				threshold: 0.6, // 60% visible before autoplay
			},
		);

		if (videoRef.current) {
			observer.observe(videoRef.current);
		}

		return () => {
			if (videoRef.current) {
				observer.unobserve(videoRef.current);
			}
		};
	}, []);

	return (
		<Section className="pt-36 md:pt-38 ">
			{/* main content */}
			<Main data-aos="fade-up">
				<div>
					{/* Title */}
					<H1 className="mb-2">
						Advancing Voice Intelligence for{" "}
						<span className="text-[#7AE2CF]">2,000+ African Languages.</span>
					</H1>

					{/* description */}
					<P className="max-w-2xl mx-auto">
						We develop multilingual speech AI that sounds natural, expressive,
						and culturally aware — powering creators, AI agents, customer
						support, and next-generation voice applications.
					</P>
				</div>

				{/* video explanation */}
				<div
					ref={videoRef}
					className="mx-auto flex items-center justify-center max-w-4xl w-full"
					data-aos="fade-up"
					data-aos-delay="150"
				>
					<div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
						<iframe
							className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
							src="https://www.youtube.com/embed/FKYMZzve1p8?si=wbGEkEv60KfdXQSr"
							// {
							// 	isVisible
							// 		? "https://www.youtube.com/embed/FKYMZzve1p8?si=wbGEkEv60KfdXQSr?autoplay=1&mute=1&playsinline=1"
							// 		: "https://www.youtube.com/embed/FKYMZzve1p8?si=wbGEkEv60KfdXQSr?mute=1&playsinline=1"
							// }
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
				</div>

				{/* CTA */}
				<div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 pb-6 w-full">
					<Button className="border-[#7a2a0e] w-full md:w-fit">
						Invest In Us
					</Button>

					<Button
						variant="outline"
						size="default"
						className="w-full md:w-fit"
						onClick={() => router.push("/product")}
					>
						Try Our Speech Models
					</Button>
				</div>
			</Main>
		</Section>
	);
};

export default Hero;
