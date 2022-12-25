import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import BlogList from "./BlogList"

const Home = () => {
	const [localBlogs, setLocalBlogs] = useState([])
	let params = useParams()

	// const getBlogs = () => {
	// 	const dbBlog = JSON.parse(localStorage.getItem("AllBlogs"))
	// 	setLocalBlogs(dbBlog)
	// }

	// getBlogs()

	useEffect(() => {
		const dbBlog = JSON.parse(localStorage.getItem("AllBlogs"))
		setLocalBlogs(dbBlog)
		console.log(params)
	}, [])

	return (
		<div className="home">
			{localBlogs === [] && (
				<center>
					<div className="links">
						<Link to={"/create"} style={{ color: "white", backgroundColor: "#f1356d", borderRadius: "8px", padding: "10px", textDecoration: "none" }}>
							Oops there are no blogs. Click to add some
						</Link>
					</div>
				</center>
			)}

			{localBlogs !== [] && <BlogList blogsProps={localBlogs} title="All Blogs" />}
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
