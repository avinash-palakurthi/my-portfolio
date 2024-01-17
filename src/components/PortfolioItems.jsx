// eslint-disable-next-line react/prop-types
// import React from "react";

const PortfolioItems = ({ imageUrl, title, link, stack, id }) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="mt-10 flex flex-col  border-2 border-stone-700 rounded-md overflow-hidden "
		>
			<img
				src={imageUrl}
				alt="image"
				className="w-full h-60 md:h-72  object-cover   cursor-pointer   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700"
			/>
			<div className="w-full p-4">
				<h1 className="text-lg md:text-xl mb-2 md:mb-3  font-semibold">
					{title}
				</h1>
				<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-sm md:text-lg ">
					{stack.map((item) => (
						<span className="border-2 border-stone-700 px-2 py-1    rounded-md font-semibold inline-block">
							{item}
						</span>
					))}
				</p>
			</div>
		</a>
	);
};

export default PortfolioItems;
