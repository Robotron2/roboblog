import { useHistory, useParams } from "react-router-dom"

const BlogDetails = () => {
    const history = useHistory()
	const dbBlog = JSON.parse(localStorage.getItem("AllBlogs")) // [{}, {}, ...]
	const idObject = useParams()
	const urlId = idObject.id

	const filterer = (blogItem) => {
		return blogItem.id == urlId
	}
	const delfilterer = (blogItem) => {
		return blogItem.id != urlId
	}
    
    const handleDelete=(id)=>{
        console.log(id)
        let renewedBlogs = dbBlog.filter(delfilterer)
        localStorage.setItem("AllBlogs", JSON.stringify(renewedBlogs))
        history.push("/")
        console.log(renewedBlogs);
        
    }

	const filteredArray = dbBlog.filter(filterer)
	// console.log(typeof(filteredArray))
	// console.log(filteredArray[0])

	return( filteredArray.map((blog, index) => {
		return (
			<div className="blog-details" key={index + 1}>
				{blog && (
					<article>
						<h2>{blog.title}</h2>
						<p>{blog.author}</p>
						<div>{blog.body}</div>
					</article>
				)}
				<button onClick={()=>{handleDelete(urlId)}}>Delete Blog</button>
			</div>
		)
	}))
}

export default BlogDetails
