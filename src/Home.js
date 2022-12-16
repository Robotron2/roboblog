const Home = () => {
	const handleClick = (person) => {
		console.log(`Hello ${person}`);
	};

	return (
		<div className="home">
			<h2>Homepage</h2>
			<button
				onClick={() => {
					handleClick("Theo");
				}}>
				Click Me
			</button>
		</div>
	);
};

export default Home;
