import { useState } from "react"
import { useHistory } from "react-router-dom"

const Create = () => {
	const [title, setTitle] = useState("")
	const [body, setBody] = useState("")
	const [author, setAuthor] = useState("Theophilus")
	const [isAdding, setIsAdding] = useState(false)
	const history = useHistory()


	const handleSubmit = (e) => {
		e.preventDefault()
		let jsonBlogsArray = []
		const newBlogObject = { title, body, author, id: Math.round(Math.random() * 2048) }
		const check = localStorage.getItem("AllBlogs")
		// console.log(check)

		setTimeout(() => setIsAdding(true), 100)
		setTimeout(() => {
			setIsAdding(false)
			history.push("/")
		}, 1000)

		if (check === null) {
			jsonBlogsArray.push(newBlogObject)
			localStorage.setItem("AllBlogs", JSON.stringify(jsonBlogsArray))
		} else {
			jsonBlogsArray = JSON.parse(localStorage.getItem("AllBlogs"))
			jsonBlogsArray.push(newBlogObject)
			localStorage.setItem("AllBlogs", JSON.stringify(jsonBlogsArray))
		}
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
