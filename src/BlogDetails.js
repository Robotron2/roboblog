import { useHistory, useParams } from "react-router-dom"

const BlogDetails = () => {
	const history = useHistory()
	const dbBlog = JSON.parse(localStorage.getItem("AllBlogs")) // [{}, {}, ...]

	const urlId = useParams()

	// const filterer = (blogItem) => {
	// 	return blogItem.id === urlId
	// }
	// const delfilterer = (blogItem) => {
	// 	return blogItem.id !== urlId
	// }

	const handleDelete = (id) => {
		console.log(id)
		// let renewedBlogs = dbBlog.filter(delfilterer)
		// localStorage.setItem("AllBlogs", JSON.stringify(renewedBlogs))

		history.push("/")
		// console.log(renewedBlogs);
	}

	const filteredArray = dbBlog.filter((blog) => {
		return blog.id == urlId.id
	})

	console.log(filteredArray)

	return (
		<div>
			{filteredArray.map((blog, index) => {
				return (
					<div className="blog-details" key={index + 1}>
						<h2>{blog.title}</h2>

						<p>
							<i>written by:</i> {blog.author}
						</p>
						<div className="content">
							<p>{blog.body}</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default BlogDetails
