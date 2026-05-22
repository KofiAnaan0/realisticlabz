import React from "react";
import { approachData } from "@/data/approachData";
import ApproachCard from "../helper/ApproachCard";

const Approach = () => {
	return (
		<section className="relative py-20">
			{/* Title */}
			<div className="text-center">
				<h2 className="text-5xl font-bold text-white">Our Produts</h2>

				<p className="mt-4 text-gray-100">
					Our speech AI models sound African.
				</p>
			</div>

			{/* Sticky Cards */}
			<div className="pb-40">
				{approachData.map((item, index) => (
					<div
						key={item.id}
						className="sticky"
						style={{ top: `${90 + index * 20}px` }}
					>
						<ApproachCard reversed={index % 2 !== 0} {...item} />
					</div>
				))}
			</div>
		</section>
	);
};

export default Approach;
