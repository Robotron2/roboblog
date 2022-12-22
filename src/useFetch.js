import { useState, useEffect } from "react"

const useFetch = () => {
	const [data, setData] = useState(null)
	const [isLoading, setisLoading] = useState(true)

	useEffect(() => {
		const dbBlog = JSON.parse(localStorage.getItem("AllBlogs"))
		setData(dbBlog)
		setisLoading(false)
	}, [])

	return { data, isLoading }
}

export default useFetch
