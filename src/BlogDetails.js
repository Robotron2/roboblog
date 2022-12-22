// import { useHistory } from "react-router-dom"
import useFetch from "./useFetch"

const BlogDetails = () => {
	// const { id } = useParams()
	// const history = useHistory()

	const { data: blogs, isLoading } = useFetch(`AllBlogs`)

	// const handleDelete = () => {
	// 	fetch(`http://localhost:8000/blogs/${blog.id}`, {
	// 		method: "DELETE"
	// 	}).then(() => {
	// 		history.push("/")
	// 	})
	// }

	return (
		<div className="blog-details">
			{isLoading && <div>Loading....</div>}
			{/* {error && <div>{error}</div>} */}
			{blogs && (
				<article>
					<h2>{blogs.title}</h2>
					<p>{blogs.author}</p>
					<div>{blogs.body}</div>
					{/* <button onClick={handleDelete}>Delete Blog</button> */}
				</article>
			)}
		</div>
	)
}

export default BlogDetails
