import { FooterProps, SocialLink } from "@/types/footerType";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const socialLinks: SocialLink[] = [
	{
		id: 1,
		icon: FaLinkedin,
		href: "#",
		label: "Linkedin",
	},
	{
		id: 2,
		icon: FaYoutube,
		href: "#",
		label: "Youtube",
	},
	{
		id: 3,
		icon: FaXTwitter,
		href: "#",
		label: "x(twitter)",
	},
];

export const companyData: FooterProps[] = [
	{
		id: 1,
		label: "Book Demo",
		links: "/#",
	},
	{
		id: 2,
		label: "About Us",
		links: "/#",
	},
];

export const productData: FooterProps[] = [
	{
		id: 1,
		label: "Audiobook narration",
		links: "/#",
	},
	{
		id: 2,
		label: "AI Translation",
		links: "/#",
	},
	{
		id: 3,
		label: "Podcast generation",
		links: "/#",
	},
	{
		id: 4,
		label: "YouTube voiceovers",
		links: "/#",
	},
	{
		id: 5,
		label: "TikTok narration",
		links: "/#",
	},
	{
		id: 6,
		label: "Avatars",
		links: "/#",
	},
	{
		id: 7,
		label: "Video Generation",
		links: "/#",
	},
];
