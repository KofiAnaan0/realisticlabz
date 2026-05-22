import { cn } from "@/lib/utils";
import React, { HTMLProps } from "react";

const Main = (props: HTMLProps<HTMLDivElement>) => {
	return (
		<div
			{...props}
			className={cn(
				"w-[90%] md:w-[80%] mx-auto space-y-8 px-2 py-8 rounded-md",
				props.className,
			)}
		/>
	);
};

export default Main;
