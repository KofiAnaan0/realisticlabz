"use client";

import React, { useState } from "react";

const voices = [
	{
		id: "sheilah",
		name: "Sheilah",
		description: "Warm, Expressive & Natural",
		color: "#bf441b",
	},
	{
		id: "joy",
		name: "Joy",
		description: "Clear, Engaging & Friendly",
		color: "#7a2a0e",
	},
	{
		id: "cynthia",
		name: "Cynthia",
		description: "Deep, Resonant & Professional",
		color: "#d4521f",
	},
];

const languages = [
	{ code: "sw", label: "Swahili", flag: "🇹🇿" },
	{ code: "en-KE", label: "English (KE)", flag: "🇰🇪" },
	{ code: "lg", label: "Luganda", flag: "🇺🇬" },
	{ code: "en-UG", label: "English (UG)", flag: "🇺🇬" },
];

const placeholderTexts: Record<string, string> = {
	sw: "Katika nchi ya kale ya Eldoria, ambapo anga yalikuwa yanang'aa na misitu ilisimama kimya, upepo uliimba siri za zamani...",
	"en-KE":
		"In the ancient land of Eldoria, where glowing skies stretched above endless forests, the wind carried forgotten secrets...",
	lg: "Mu nsi enkadde ya Eldoria, eggulu lyali limulisa era empewo ne yeetikka ebyama eby'edda...",
	"en-UG":
		"In the ancient land of Eldoria, where glowing skies stretched above endless forests, the wind carried forgotten secrets...",
};

const NarrationDemo = () => {
	const [selectedVoice, setSelectedVoice] = useState(voices[0]);
	const [selectedLang, setSelectedLang] = useState(languages[0]);
	const [text, setText] = useState(placeholderTexts["sw"]);
	const [playing, setPlaying] = useState(false);
	const [langOpen, setLangOpen] = useState(false);
	const [voiceDropdownOpen, setVoiceDropdownOpen] = useState(false);

	const handleLangSelect = (lang: (typeof languages)[0]) => {
		setSelectedLang(lang);
		setText(placeholderTexts[lang.code]);
		setLangOpen(false);
	};

	const handleVoiceSelect = (voice: (typeof voices)[0]) => {
		setSelectedVoice(voice);
		setVoiceDropdownOpen(false);
	};

	const handlePlay = () => {
		setPlaying(true);
		setTimeout(() => setPlaying(false), 2500);
	};

	return (
		<section className="w-full lg:max-w-6xl mx-auto rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-br from-[#7a2a0e] to-[#4d1707] shadow-2xl shadow-black/40 backdrop-blur-xl">
			<div className="flex flex-col lg:flex-row w-full">
				{/* LEFT PANEL — full list on desktop, dropdown on mobile */}
				<div className="lg:w-[38%] border-b lg:border-b-0 lg:border-r border-white/10 p-6 lg:p-8">
					<div className="mb-6">
						<h3 className="text-center md:text-start text-lg font-bold text-white">
							Choose a Narrator
						</h3>
					</div>

					{/* MOBILE — dropdown */}
					<div className="block lg:hidden relative">
						<button
							onClick={() => setVoiceDropdownOpen(!voiceDropdownOpen)}
							className="w-full rounded-2xl bg-white/10 border border-white/20 px-4 py-3 text-left text-white flex items-center justify-between"
						>
							<div className="flex items-center gap-3">
								<div
									className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
									style={{ background: selectedVoice.color }}
								>
									{selectedVoice.name[0]}
								</div>
								<div>
									<p className="font-semibold text-sm">{selectedVoice.name}</p>
									<p className="text-xs text-gray-300">
										{selectedVoice.description}
									</p>
								</div>
							</div>
							<svg
								className={`w-4 h-4 text-white/60 transition-transform duration-200 ${voiceDropdownOpen ? "rotate-180" : ""}`}
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
						</button>

						{voiceDropdownOpen && (
							<div className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-white/10 bg-[#3a1205] shadow-2xl overflow-hidden z-50">
								{voices
									.filter((v) => v.id !== selectedVoice.id)
									.map((voice) => (
										<button
											key={voice.id}
											onClick={() => handleVoiceSelect(voice)}
											className="w-full flex items-center gap-3 px-4 py-3 text-left text-white hover:bg-white/10 transition border-b border-white/5 last:border-0"
										>
											<div
												className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
												style={{ background: voice.color }}
											>
												{voice.name[0]}
											</div>
											<div>
												<p className="font-semibold text-sm">{voice.name}</p>
												<p className="text-xs text-gray-300">
													{voice.description}
												</p>
											</div>
										</button>
									))}
							</div>
						)}
					</div>

					{/* DESKTOP — full list */}
					<div className="hidden lg:block space-y-3">
						{voices.map((voice) => {
							const active = voice.id === selectedVoice.id;
							return (
								<button
									key={voice.id}
									onClick={() => setSelectedVoice(voice)}
									className={`w-full rounded-2xl transition-all duration-300 p-4 text-left border ${
										active
											? "bg-white text-black border-white shadow-xl"
											: "bg-white/5 border-white/10 hover:bg-white/10 text-white"
									}`}
								>
									<div className="flex items-center gap-4">
										<div
											className="w-10 aspect-square rounded-full shrink-0 flex items-center justify-center text-white font-bold"
											style={{ background: voice.color }}
										>
											{voice.name[0]}
										</div>
										<div>
											<h4 className="font-semibold text-base">{voice.name}</h4>
											<p
												className={`text-xs ${active ? "text-gray-600" : "text-gray-300"}`}
											>
												{voice.description}
											</p>
										</div>
									</div>
								</button>
							);
						})}
					</div>

					<button className="mt-8 w-full rounded-full border border-white/20 text-white text-sm py-3 hover:bg-white/10 transition hidden lg:block">
						Explore 5+ Voices
					</button>
				</div>

				{/* RIGHT PANEL */}
				<div className="lg:w-[62%] p-6 lg:p-8 flex flex-col justify-between">
					<div>
						<div className="flex flex-col lg:flex-row items-center space-y-2 lg:justify-between mb-6">
							<h3 className="text-lg font-bold text-white">Select Language</h3>

							{/* Language dropdown */}
							<div className="relative">
								<button
									onClick={() => setLangOpen(!langOpen)}
									className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white hover:bg-white/10 transition"
								>
									<span>{selectedLang.flag}</span>
									<span className="text-sm">{selectedLang.label}</span>
									<svg
										className="w-4 h-4"
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
								</button>

								{langOpen && (
									<div className="absolute top-full right-0 mt-2 w-48 rounded-2xl border border-white/10 bg-[#1E1B1A] shadow-2xl overflow-hidden z-50">
										{languages.map((lang) => (
											<button
												key={lang.code}
												onClick={() => handleLangSelect(lang)}
												className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm hover:bg-white/10 transition ${
													selectedLang.code === lang.code
														? "text-[#FFD9C2] font-medium"
														: "text-white"
												}`}
											>
												<span>{lang.flag}</span>
												<span>{lang.label}</span>
											</button>
										))}
									</div>
								)}
							</div>
						</div>

						<textarea
							value={text}
							onChange={(e) => setText(e.target.value)}
							className="w-full h-[200px] lg:h-[240px] rounded-3xl bg-black/20 border border-white/10 p-6 text-white placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-white/20 text-md leading-relaxed"
							placeholder="Enter your narration..."
						/>
					</div>

					<div className="flex items-center justify-center lg:justify-between mt-6">
						<div className="hidden lg:block">
							<p className="text-sm text-gray-300">Selected Voice</p>
							<h4 className="text-white font-semibold text-sm">
								{selectedVoice.name}
							</h4>
						</div>

						<button
							onClick={handlePlay}
							disabled={playing}
							className="px-5 py-3 rounded-full bg-white text-[#bf441b] font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-60 flex items-center gap-3"
						>
							{playing ? (
								<>
									<div className="w-4 h-4 border-2 border-[#bf441b] border-t-transparent rounded-full animate-spin" />
									Generating...
								</>
							) : (
								<>
									<svg
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M8 5v14l11-7z" />
									</svg>
									Play Narration
								</>
							)}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NarrationDemo;
