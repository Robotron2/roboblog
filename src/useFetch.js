import { useState, useEffect } from "react"

const useFetch = (url) => {
	const [data, setData] = useState(null)
	const [isLoading, setisLoading] = useState(true)
	const [error, setError] = useState(null)
	useEffect(() => {
		setTimeout(() => {
			fetch(url)
				.then((res) => {
					if (!res.ok) {
						throw Error("Could not fetch the data for the resource")
					}
					return res.json()
				})
				.then((dataObject) => {
					setData(dataObject)
					setisLoading(false)
					setError(null)
				})
				.catch((err) => {
					// console.log(err)
					setError(err.message)
					setisLoading(false)
				})
		}, 1000)
	}, [url])
	return { data, isLoading, error }
}

export default useFetch
