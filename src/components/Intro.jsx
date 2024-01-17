import React from "react";

const Intro = () => {
	return (
		<div className=" flex flex-col items-center justify-center pt-20 pb-6 text-center">
			<h1 className="text-3xl md:text-6xl md:mb-3 mb-1 font-bold text-gray-500">
				{" "}
				Avinash Palakurthi
			</h1>
			<p className="text-base capitalize md:text-xl font-medium mb-3">
				web-developer
			</p>
			<p className="max-w-3xl font-medium">
				I am a self-taught developer who has learned{" "}
				<span className="text-rose-600 font-bold">HTML, CSS, JavaScript,</span>{" "}
				and front-end libraries like
				<span className="text-rose-600 font-bold"> React </span>
				. Currently, I'm working on my own project focusing on society and
				politics.
				<br />
				This project is close to my heart as it combines my technical skills
				with my interest in social and political issues. I aim to create a
				platform where these important topics can be discussed. Through this
				project, I want to show how technology can be used for meaningful
				purposes that benefit society.
			</p>
		</div>
	);
};

export default Intro;
