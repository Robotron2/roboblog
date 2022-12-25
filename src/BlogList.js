import { Link } from "react-router-dom"

const BlogList = (props) => {
	const blogs = props.blogsProps // [ {}, {}, ...]
	const title = props.title
	// console.log(blogs)
	// console.log(typeof [] + "Empty array")
	// console.log(typeof blogs + "Blog")
	// console.log(blogs == [])

	return (
		<div className="blog-list">
			{blogs !== [] && <h1>{title}</h1>}

			{blogs !== [] &&
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
