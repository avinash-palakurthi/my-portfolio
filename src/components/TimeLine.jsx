import React from "react";
import timeline from "../data/timeline.js";
import TimeLineItem from "./TimeLineItem";
import Title from "./Title.jsx";

const TimeLine = () => {
	return (
		<div className="flex flex-col md:flex-row justify-center my-20">
			<div className=" w-full md:w-7/12 ">
				<Title>Timeline</Title>
				{timeline.map((item) => (
					<TimeLineItem
						year={item.year}
						title={item.title}
						duration={item.duration}
						details={item.details}
						key={item.title}
					/>
				))}
			</div>
		</div>
	);
};

export default TimeLine;
