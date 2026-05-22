"use client";

import React, { useState } from "react";

const languages = [
	{ code: "sw", label: "Swahili", flag: "🇰🇪" },
	{ code: "lg", label: "Luganda", flag: "🇺🇬" },
];

const Translation = () => {
	const [youtubeUrl, setYoutubeUrl] = useState("");
	const [selectedLang, setSelectedLang] = useState(languages[0]);
	const [dragging, setDragging] = useState(false);
	const [fileName, setFileName] = useState("");
	const [translating, setTranslating] = useState(false);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		if (file) {
			setFileName(file.name);
		}
	};

	const handleTranslate = () => {
		setTranslating(true);

		setTimeout(() => {
			setTranslating(false);
		}, 2500);
	};

	return (
		<section className="w-full max-w-6xl mx-auto rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-br from-[#7a2a0e] to-[#4d1707] shadow-2xl shadow-black/40 backdrop-blur-xl">
			<div className="flex flex-col lg:flex-row">
				{/* LEFT */}
				<div className="lg:w-[42%] border-b lg:border-b-0 lg:border-r border-white/10 p-6 lg:p-8">
					<div className="mb-8 text-center lg:text-start">
						<h3 className="text-xl font-bold text-white mb-2">
							Upload Audio or Video
						</h3>

						<p className="text-sm text-gray-300 leading-relaxed">
							Upload a local audio/video file for
							multilingual translation.
						</p>
					</div>

					{/* Upload Box */}
					<label
						className={`w-full h-[220px] rounded-3xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer px-6 ${
							dragging
								? "border-[#7AE2CF] bg-white/10"
								: "border-white/10 bg-black/20 hover:bg-black/30"
						}`}
						onDragEnter={() => setDragging(true)}
						onDragLeave={() => setDragging(false)}
					>
						<input
							type="file"
							accept="audio/*,video/*"
							className="hidden"
							onChange={handleFileChange}
						/>

						<div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
							<svg
								className="w-8 h-8 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
								/>
							</svg>
						</div>

						<h4 className="text-white font-semibold mb-2">Drop files here</h4>

						<p className="text-sm text-gray-400">or click to browse</p>

						{fileName && (
							<div className="mt-4 text-sm text-[#7AE2CF]">{fileName}</div>
						)}
					</label>
				</div>

				{/* RIGHT */}
				<div className="lg:w-[58%] p-6 lg:p-8 flex flex-col justify-between">
					<div>
						<div className="mb-6">
							<h3 className="text-xl text-center lg:text-start font-bold text-white mb-2">
								Paste YouTube URL 
							</h3>

							{/* <p className="text-sm text-gray-300">
								Translate audio or video into African languages with realistic
								speech synthesis.
							</p> */}
						</div>

						{/* YouTube URL */}
						<div className="mb-6">
							<label className="text-sm text-gray-300 mb-2 block">
								YouTube URL
							</label>

							<input
								type="text"
								value={youtubeUrl}
								onChange={(e) => setYoutubeUrl(e.target.value)}
								placeholder="https://youtube.com/watch?v=..."
								className="w-full rounded-2xl bg-black/20 border border-white/10 px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7AE2CF]/50"
							/>
						</div>

						{/* Language Selection */}
						<div>
							<label className="text-sm text-gray-300 mb-3 block">
								Select Language
							</label>

							<div className="relative">
	<select
		value={selectedLang.code}
		onChange={(e) => {
			const lang = languages.find(
				(l) => l.code === e.target.value
			);

			if (lang) {
				setSelectedLang(lang);
			}
		}}
		className="w-full appearance-none rounded-2xl bg-black/20 border border-white/10 px-5 py-4 pr-12 text-white focus:outline-none focus:ring-2 focus:ring-[#7AE2CF]/50"
	>
		{languages.map((lang) => (
			<option
				key={lang.code}
				value={lang.code}
				className="bg-[#1E1B1A] text-white"
			>
				{lang.flag} {lang.label}
			</option>
		))}
	</select>

	{/* dropdown icon */}
	<div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
		<svg
			className="w-4 h-4 text-gray-400"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M19 9l-7 7-7-7"
			/>
		</svg>
	</div>
</div>
						</div>
					</div>

					{/* Bottom */}
					<div className="mt-8 flex items-center justify-center lg:justify-end">
						

						<button
							onClick={handleTranslate}
							disabled={translating}
							className="px-6 py-4 rounded-full bg-[#7AE2CF] text-black font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-60 flex items-center gap-3"
						>
							{translating ? (
								<>
									<div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
									Translating...
								</>
							) : (
								<>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 5.5A18.022 18.022 0 0015.588 9m-3.54 5.5L21 21"
										/>
									</svg>
									Coming Soon
								</>
							)}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Translation;
