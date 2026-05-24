import { ApproachType } from "@/types/approachType";
import enterprise from "@/public/approach/enterprise.png";
import support from "@/public/approach/support.png";

export const approachData: ApproachType[] = [
	{
		id: 1,
		index: "narration",
		title: "Narration model",
		description:
			"Generate Audiobook narration, Tiktok narration and Youtube voice overs with our narration model",
		// imageUrl: enterprise,
		videoUrl: "https://youtu.be/i2_7CtWF0x4?si=F04cBIqFyPwJAdez",
	},
	{
		id: 2,
		index: "translation",
		title: "Translation model",
		description:
			"Translate your video/podcasts/audiobooks to 2,000+ African languages and accents with our translation model.",
		// imageUrl: support,
		videoUrl: "https://youtu.be/FKYMZzve1p8?si=NjbXMVHbqlgur1K9",
	},
	// {
	// 	id: 3,
	// 	index: "avatar",
	// 	title: "Avatar model",
	// 	description:
	// 		"Generate your avatar from your static photo or a short video of yourself with our avatar model.",
	// 	// imageUrl: support,
	// 	videoUrl: "https://youtu.be/rJtF32LTX8U?si=AtBi7a_5L_wMOkyI",
	// },
];
