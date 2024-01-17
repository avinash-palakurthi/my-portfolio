// import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItems from "./PortfolioItems";
const Portfolio = () => {
	return (
		<div className="flex w-full flex-col md:flex-row items-center justify-evenly  mb-6">
			<div className="grid mx-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
			>
				{portfolio.map((project) => (
					<PortfolioItems
					
						imageUrl={project.imageUrl}
						title={project.title}
						stack={project.stack}
						link={project.link}
						id={project.id}
						key={project.id}
					/>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
