const DateGen = () => {
	let currentYear = new Date().getFullYear()

	return (
		<div className="footer">
			<center>
				<p>© Robotron {currentYear}</p>
			</center>
		</div>
	)
}

export default DateGen
