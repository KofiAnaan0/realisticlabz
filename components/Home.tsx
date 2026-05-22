import React from "react";
import Hero from "./HomePage/Hero";
import Approach from "./HomePage/Approach";
import Contact from "./HomePage/Contact";
import PainPoint from "./HomePage/PainPoint";

const Home = () => {
	return (
		<div className="w-full space-y-10">
			<Hero />
			<PainPoint />
			<Approach />
			<Contact />
		</div>
	);
};

export default Home;
