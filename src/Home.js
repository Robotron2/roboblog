import { useEffect, useState } from "react"
import BlogList from "./BlogList"

const Home = () => {
	const [blogs, setBlogs] = useState(null)

	// const [name, setName] = useState("Theo")

	// useEffect(() => {
	// 	console.log("useEffect ran")
	// }, [name])

	useEffect(() => {
		fetch("http://localhost:8000/blogs")
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				console.log("This is the data")
				setBlogs(data)
			})
	}, [])

	return (
		<div className="home">
			{/* <p>{name}</p> */}
			{blogs && <BlogList blogsProps={blogs} title="All Blogs" />}
			{/* <button onClick={() => setName("Theophlus")}>Change Name</button> */}
		</div>
	)
}

export default Home

// const Home = () => {
// 	const [greeting, setGreeting] = useState("Hello")
// 	const [blogs, setBlogs] = useState([
// 		{ title: "Electromechanical Devices", body: "Electromechanical devices are hybrid devices that put to good use to important forms of energy.", author: "Professor Theophilus", id: 1 },
// 		{ title: "Circuit Analysis", body: "Electrical circuits are pathways for electric current to flow.", author: "Robotron", id: 2 },
// 		{
// 			title: "Introduction to Robotics Programming",
// 			body: "Robotic programming is best seen as a way you give set of commands to a machine so that you can sit back and watch the machine do all the dirty work.",
// 			author: "Professor Theophilus",
// 			id: 3
// 		}
// 	])

// 	const handleDelete = (id) => {
// 		const newBlogs = blogs.filter((blog) => blog.id !== id)
// 		setBlogs(newBlogs)
// 	}

// 	const sayGreeting = () => {
// 		setGreeting("Hello World")
// 	}

// 	return (
// 		<div className="home">
// 			<h1>{greeting}</h1>
// 			<BlogList blogsProps={blogs} title="All Blogs" handleDeleteProp={handleDelete} handleGreetingProp={sayGreeting} />
// 		</div>
// 	)
// }
