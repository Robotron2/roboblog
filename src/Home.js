import { useState } from "react";

const Home = () => {
	const [name, setName] = useState("Theo");
	const [age, setAge] = useState(15);

	const handleClick = () => {
		setName("Philus");
		setAge(20);
	};

	return (
		<div className="home">
			<h2>Homepage</h2>
			<p>
				{name} is {age} years old
			</p>
			<button onClick={handleClick}>Click Me</button>
		</div>
	);
};

export default Home;
