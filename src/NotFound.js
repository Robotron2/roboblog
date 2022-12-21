import { Link } from "react-router-dom"

const NotFound = () => {
	return (
		// <div className="home">
		// 	<div className="err">4</div>
		// 	<i className="far fa-question-circle fa-spin"></i>
		// 	<div className="err2">4</div>
		// 	<div className="msg">
		// 		Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
		// 		<p>
		// 			Let's go <Link to={"/"}>home</Link> and try from there.
		// 		</p>
		// 	</div>
		// </div>
		<div id="pagenotfound">
			<div className="pagenotfound">
				<div className="notfound404">
					<h1>Oops!</h1>
				</div>
				<h2>404 - Page not found</h2>
				<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable</p>
				<Link to={"/"}>Go to homepage</Link>
			</div>
		</div>
	)
}

export default NotFound
