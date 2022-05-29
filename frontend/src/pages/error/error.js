function Error(props){
	let code = props.code || 404
	let message = props.message || "page not found"
	return (
		<>
			<h1>Error {code}</h1>
			<p>{message}</p>
			<a href="/">home</a>
		</>
	)
}

export default Error