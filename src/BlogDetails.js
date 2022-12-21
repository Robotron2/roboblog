import { useHistory, useParams } from "react-router-dom"
import useFetch from "./useFetch"

const BlogDetails = () => {
	const { id } = useParams()
	const history = useHistory()

	const { data: blog, error, isLoading } = useFetch(`http://localhost:8000/blogs/${id}`)

	const handleDelete = () => {
		fetch(`http://localhost:8000/blogs/${blog.id}`, {
			method: "DELETE"
		}).then(() => {
			history.push("/")
		})
	}

	return (
		<div className="blog-details">
			{isLoading && <div>Loading....</div>}
			{error && <div>{error}</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>{blog.author}</p>
					<div>{blog.body}</div>
					<button onClick={handleDelete}>Delete Blog</button>
				</article>
			)}
		</div>
	)
}

export default BlogDetails
