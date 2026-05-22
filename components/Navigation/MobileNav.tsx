import { navLinks } from "@/constants/constant";
import Link from "next/link";
import React, { useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { Button } from "../ui/Button";

type Prop = {
	navClose: () => void;
	showNav: boolean;
	handleshowModel: () => void;
};

const MobileNav = ({ navClose, showNav, handleshowModel }: Prop) => {
	const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

	useEffect(() => {
		if (showNav) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}

		// cleanup on unmount
		return () => document.body.classList.remove("overflow-hidden");
	}, [showNav]);

	return (
		<div>
			{/* overlay */}
			<div
				className={`fixed ${navOpen} h-screen w-full bg-[#bf441b] opacity-[70%] z-[1002] inset-0 transform transition`}
			></div>

			{/* Menu */}
			<div
				className={`fixed ${navOpen} z-[1054] h-full w-[80%] md:w-[60%] flex flex-col justify-center items-center transform transition duration-500 delay-300 bg-[#7a2a0e] space-y-6`}
			>
				{navLinks.map((link) => (
					<Link
						href={link.url}
						key={link.id}
						onClick={navClose}
						className="text-white border-b w-fit font-medium hover:text-[#FFD9C2] text-sm md:text-base"
					>
						{link.label}
					</Link>
				))}

				<div className="flex flex-col items-center justify-center w-fit space-y-4">
					<Button
						variant="outline"
						size="default"
						onClick={() => (window.location.href = "tel:+12244643952")}
					>
						Invest In Us
					</Button>
					<Button variant="default" size="default">
						Try our Models
					</Button>
				</div>

				<CgClose
					onClick={navClose}
					className="absolute top-[0.7rem] right-[1.4rem] w-6 h-6 cursor-pointer text-white"
				/>
			</div>
		</div>
	);
};

export default MobileNav;
