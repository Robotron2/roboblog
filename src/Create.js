import { useState } from "react"
import { useHistory } from "react-router-dom"

const Create = () => {
	const [title, setTitle] = useState("")
	const [body, setBody] = useState("")
	const [author, setAuthor] = useState("Theo")
	const [isAdding, setIsAdding] = useState(false)
	const history = useHistory()

	// const handleSubmit = (e) => {
	// 	e.preventDefault()
	// 	const blog = { title, body, author }

	// 	setIsAdding(true)

	// 	fetch("http://localhost:8000/blogs", {
	// 		method: "POST",
	// 		headers: { "Content-Type": "application/json" },
	// 		body: JSON.stringify(blog)
	// 	}).then(() => {
	// 		console.log("New blog added")
	// 		setIsAdding(false)
	// 		setTitle("")
	// 		setBody("")
	// 		history.push("/")
	// 	})
	// }

	const handleSubmit = (e) => {
		e.preventDefault()
		let jsonBlogsArray = []
		const newBlogObject = { title, body, author }
		const check = localStorage.getItem("AllBlogs")
		console.log(check)

		setTimeout(() => setIsAdding(true), 500)
		if (check === null) {
			jsonBlogsArray.push(newBlogObject)
			localStorage.setItem("AllBlogs", JSON.stringify(jsonBlogsArray))
		} else {
			jsonBlogsArray = JSON.parse(localStorage.getItem("AllBlogs"))
			jsonBlogsArray.push(newBlogObject)
			localStorage.setItem("AllBlogs", JSON.stringify(jsonBlogsArray))
		}
		setIsAdding(false)
		history.push("/")
	}

	return (
		<div className="create">
			<h2>Add a New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog title:</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => {
						setTitle(e.target.value)
					}}
				/>
				<label>Blog body:</label>
				<textarea
					required
					value={body}
					onChange={(e) => {
						setBody(e.target.value)
					}}></textarea>
				<label>Blog author:</label>
				<select
					value={author}
					onChange={(e) => {
						setAuthor(e.target.value)
					}}
					required>
					<option value="Theophilus">Theophilus</option>
					<option value="Robotron">Robotron</option>
				</select>
				{!isAdding && <button>Add Blog</button>}
				{isAdding && <button>Please wait...</button>}
			</form>
		</div>
	)
}

export default Create
