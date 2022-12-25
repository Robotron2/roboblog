import { useHistory, useParams } from "react-router-dom"

const BlogDetails = () => {
	const history = useHistory()
	const dbBlog = JSON.parse(localStorage.getItem("AllBlogs")) // [{}, {}, ...]
	const urlId = useParams()

	const filterBlogs = dbBlog.filter((blog) => {
		// console.log(blog)
		return blog
	})

	const handleDelete = (id) => {
		console.log(id)
		const remainingBlogs = filterBlogs.filter((blogObj) => {
			// console.log(blogObj.id === Number(urlId.id))
			return blogObj.id === Number(urlId.id)
			// console.log(typeof urlId.id + "Type of UrlId")
			// console.log(typeof blogObj.id)
		})

		console.log(remainingBlogs)
		// history.push("/")
		// console.log(renewedBlogs);
	}

	const filteredArray = dbBlog.filter((blog) => {
		return blog.id == urlId.id
	})

	// console.log(filteredArray)

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
						<center>
							<button
								onClick={() => {
									handleDelete(urlId.id)
								}}
							>
								Delete Blog
							</button>
						</center>
					</div>
				)
			})}
		</div>
	)
}

export default BlogDetails
