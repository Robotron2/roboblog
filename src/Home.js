import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: "Electromechanical Devices", body: "Electromechanical devices are hybrid devices that put to good use to important forms of energy.", author: "Professor Theophilus", id: 1 },
		{ title: "Circuit Analysis", body: "Electrical circuits are pathways for electric current to flow.", author: "Robotron", id: 2 },
		{
			title: "Introduction to Robotics Programming",
			body: "Robotic programming is best seen as a way you give set of commands to a machine so that you can sit back and watch the machine do all the dirty work.",
			author: "Professor Theophilus",
			id: 3,
		},
	]);
	const handleClick = () => {};

	return (
		<div className="home">
			<BlogList blogsProps={blogs} title="All Blogs" />
			<button onClick={handleClick}>Click Me</button>
		</div>
	);
};

export default Home;
