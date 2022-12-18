const BlogList = ({ blogsProps, title, handleDeleteProp }) => {
	return (
		<div className="blog-list">
			<h1>{title}</h1>

			{blogsProps.map((blog) => {
				return (
					<div className="blog-preview">
						{blog.body}
						<div>
							<button onClick={() => handleDeleteProp(blog.id)}>Delete blog</button>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default BlogList
