import React from "react";
import Section from "../ui/Section";
import Main from "../ui/Main";
import H2 from "../ui/H2";
import {
	activaDirectory,
	analytics,
	EndpointManagement,
	Enterprise,
	IdentityGovernance,
	PrivilegedAccess,
} from "@/data/productData";
import ProductCard from "../helper/productCard";
import NarrationDemo from "../helper/NarrationCard";
import Translation from "../helper/TranslationCard";
import P from "../ui/P";
import H3 from "../ui/H3";

const Product = () => {
	return (
		<Section>
			<Main className="flex flex-col justify-center items-center gap-16 py-10">
				{/* narration */}
				<div id="iam" className="space-y-8 py-16 md:py-8 w-full lg:w-[75%]">
					{/* title - sticky at top */}
					<H2>Narration Model</H2>

					{/* cards with stacking effect */}
					<NarrationDemo />
				</div>

				{/* translation */}
				<div className="space-y-8">
					{/* title - sticky at top */}
					<H2>Translation Model</H2>

					{/* cards with stacking effect */}
					<Translation />
				</div>

				{/* avatar */}
				<div className="space-y-8">
					{/* title - sticky at top */}
					<H2>Avatar Model</H2>

					{/* cards with stacking effect */}
					<div className="flex flex-col items-center gap-6">
						<H3 className="text-white">Coming Soon</H3>
					</div>
				</div>

				{/* video */}
				<div id="endpoint-management" className="space-y-8">
					{/* title - sticky at top */}
					<H2>Video Generation Model</H2>

					{/* cards with stacking effect */}
					<div className="flex flex-col items-center gap-6">
						<H3 className="text-white">Coming Soon</H3>
					</div>
				</div>
			</Main>
		</Section>
	);
};

export default Product;
