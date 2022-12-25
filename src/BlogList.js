import { Link } from "react-router-dom"

const BlogList = (props) => {
	const blogs = props.blogsProps // [ {}, {}, ...]
	const title = props.title
	// console.log(blogs)
	// console.log(typeof [] + "Empty array")
	// console.log(typeof blogs + "Blog")
	// console.log(blogs == [])

	const check = JSON.parse(localStorage.getItem("AllBlogs"))
	// if (check === []) {
	// 	console.log("Empty array")
	// }
	// console.log(typeof check)
	// console.log(check.length)

	return (
		<div className="blog-list">
			{check.length === 0 && (
				<center>
					<div className="links">
						<Link to={"/create"} style={{ color: "white", backgroundColor: "#f1356d", borderRadius: "8px", padding: "10px", textDecoration: "none" }}>
							Oops there are no blogs. Click to add some
						</Link>
					</div>
				</center>
			)}
			{check.length !== 0 && <h1>{title}</h1>}

			{check.length !== 0 &&
				blogs.map((blog, index) => {
					return (
						<div className="blog-preview" key={index + 1}>
							<Link to={`/blogs/${blog.id}`}>
								<h2>{blog.title}</h2>
								<p>Written by {blog.author}</p>
							</Link>
						</div>
					)
				})}
		</div>
	)
	// return "Theo"
}

export default BlogList

// const BlogList = ({ blogsProps, title, handleDeleteProp, handleGreetingProp }) => {
// 	return (
// 		<div className="blog-list">
// 			<h1>{title}</h1>
// 			<div>
// 				<button onClick={handleGreetingProp}>Greet</button>
// 			</div>
// 			{blogsProps.map((blog) => {
// 				return (
// 					<div className="blog-preview">
// 						{blog.body}
// 						<div>
// 							<button onClick={() => handleDeleteProp(blog.id)}>Delete blog</button>
// 						</div>
// 					</div>
// 				)
// 			})}
// 		</div>
// 	)
// }
