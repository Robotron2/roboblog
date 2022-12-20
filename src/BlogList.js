import { Link } from "react-router-dom"

const BlogList = ({ blogsProps, title }) => {
	return (
		<div className="blog-list">
			<h1>{title}</h1>
			{blogsProps.map((blog) => {
				return (
					<div className="blog-preview" key={blog.id}>
						<Link to={`/blogs/${blog.id}`}>
							<h2>{blog.title}</h2>
							<p>Written by {blog.author}</p>
						</Link>
					</div>
				)
			})}
		</div>
	)
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
