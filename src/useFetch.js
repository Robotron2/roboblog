import { useState, useEffect } from "react"

const useFetch = (url) => {
	const [data, setData] = useState(null)
	const [isLoading, setisLoading] = useState(true)
	const [error, setError] = useState(null)
	useEffect(() => {
		const abortCtrl = new AbortController()

		setTimeout(() => {
			fetch(url, { signal: abortCtrl.signal })
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
					if (err.name === "AbortError") {
						// console.log("Fetch aborted")
					} else {
						setError(err.message)
						setisLoading(false)
					}
				})
		}, 1000)
		return () => abortCtrl.abort()
	}, [url])
	return { data, isLoading, error }
}

export default useFetch
