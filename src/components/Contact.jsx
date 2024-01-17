import React from "react";
import Title from "./Title";

const Contact = () => {
	return (
		<div className="flex flex-col mb-20 mx-auto">
			<div className="flex justify-center items-center">
				<form
					action="https://getform.io/f/b75f443e-d036-4b27-a2b0-9bdf610d56da"
					method="POST"
					className="flex flex-col w-full md:w-7/12"
				>
					<Title>Contact</Title>
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="p-2 bg-transparent border-2 rounded-md 
						border-zinc-600 
						focus:outline-none"
					/>

					<input
						type="email"
						name="email"
						placeholder="Email Address"
						className="my-2 p-2 bg-transparent border-2 rounded-md 
						border-zinc-600 
						focus:outline-none"
					/>

					<textarea
						name="message"
						id=""
						rows="10"
						placeholder="I am willing to accept help for my career. "
						className="p-2 mb-4 bg-transparent border-2
						border-zinc-600 rounded-md focus:outline-none"
					/>
					<button className=" w-full text-center  inline-block px-8 py-3 font-thin  rounded-md text-white text-xl capitalize bg-gradient-to-l from-gray-800 via-gray-800 to-black">
						I will assist you.
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
