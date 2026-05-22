"use client";

import React, { useState } from "react";
import Section from "../ui/Section";
import H2 from "../ui/H2";
import P from "../ui/P";
import { Button } from "../ui/Button";
import Image from "next/image";
import { ApproachType } from "@/types/approachType";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import Main from "../ui/Main";
import { useRouter } from "next/navigation";

interface ApproachProps extends ApproachType {
	reversed: boolean;
}

const ApproachCard = ({
	title,
	index,
	description,
	imageUrl,
	reversed,
	videoUrl,
}: ApproachProps) => {
	const [playing, setPlaying] = useState(false);
	const router = useRouter();

	const getYouTubeEmbedUrl = (url: string) => {
		if (!url) return "";
		if (url.includes("/embed/")) return url;
		const videoIdMatch = url.match(
			/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/,
		);
		if (videoIdMatch)
			return `https://www.youtube.com/embed/${videoIdMatch[1]}?autoplay=1`;
		return url;
	};

	const getYouTubeThumbnail = (url: string) => {
		const videoIdMatch = url.match(
			/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^?&\s]+)/,
		);
		if (videoIdMatch)
			return `https://img.youtube.com/vi/${videoIdMatch[1]}/maxresdefault.jpg`;
		return "";
	};

	return (
		<Section>
			<Main
				className="lg:w-[72%] mx-auto rounded-md overflow-hidden shadow-xl shadow-black/40 relative aspect-video bg-[#7a2a0e]"
				data-aos="fade-up"
			>
				{playing ? (
					<iframe
						src={getYouTubeEmbedUrl(videoUrl!)}
						title={title}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="absolute inset-0 w-full h-full border-0"
					/>
				) : (
					<>
						{/* Full-cover thumbnail */}
						<img
							src={getYouTubeThumbnail(videoUrl!)}
							alt={title}
							className="absolute inset-0 w-full h-full object-cover"
						/>

						{/* Gradient — dark on left, transparent on right */}
						<div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
						{/* Extra bottom gradient for text readability */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

						{/* Text overlay — left side */}
						<div className="absolute top-2/3 -translate-y-2/3 left-0 p-6 md:p-8 space-y-2 max-w-[55%]">
							<p className="text-white/50 text-xs font-semibold uppercase tracking-[0.2em]">
								Realistic Labs
							</p>
							<h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">
								{title}
							</h3>
							<p className="text-white/75 text-sm md:text-base leading-snug line-clamp-3">
								{description}
							</p>

							{/* CTA */}
							<div className="flex items-center gap-3 pt-2">
								<Button
									variant="outline"
									size="sm"
									className="border-white/60 text-white hover:bg-white/10"
									onClick={() => router.push("/product")}
								>
									Try Now
								</Button>
							</div>
						</div>

						{/* Play button — center */}
						<button
							onClick={() => setPlaying(true)}
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 flex items-center justify-center hover:bg-white/35 hover:scale-110 transition-all duration-200 shadow-2xl group"
						>
							<FaPlay className="text-white w-5 h-5 ml-1 group-hover:scale-110 transition-transform duration-150" />
						</button>
					</>
				)}
			</Main>
		</Section>
	);
};

export default ApproachCard;
