import { useParams } from "react-router-dom"


const BlogDetails = () => {
    const dbBlog = JSON.parse(localStorage.getItem("AllBlogs")) // [{}, {}, ...]
	const idObject = useParams()
	const urlId = idObject.id
	
    
    const filterer =(blogItem)=>{
        return blogItem.id == urlId
    }
        
	const filteredArray = dbBlog.filter(filterer)
    // console.log(typeof(filteredArray))
    // console.log(filteredArray[0])
    
    
    
    return(
        filteredArray.map((blog, index)=>{
        	return (
	<div className="blog-details" key={index+1}>
		{blog && (
			<article>
				<h2>{blog.title}</h2>
				<p>{blog.author}</p>
				<div>{blog.body}</div>
			</article>
		)}
	</div>
    
    )})
    )
    

}

export default BlogDetails