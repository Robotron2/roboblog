import { useState } from "react"

const Create = () => {
	const [title, setTitle] = useState("")

	return (
		<div className="create">
			<h2>Add a New Blog</h2>
			<form>
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
				<textarea required></textarea>
				<label>Blog author:</label>
				<select>
					<option value="Theophilus">Theophilus</option>
					<option value="Robotron">Robotron</option>
				</select>
				<button>Add Blog</button>
			</form>
			<div>{title}</div>
		</div>
	)
}

export default Create
