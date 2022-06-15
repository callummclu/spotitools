import { MdOutlineErrorOutline } from 'react-icons/md'

import Nav from '../../components/nav'

function Error(props){
	let code = props.code || 404
	let message = props.message || "page not found"
	return (
		<>
		<Nav loggedIn={props.loggedIn}/>
			<div className="error-container">
				<MdOutlineErrorOutline style={{width:"100px",height:"100px"}}/>
				<h1>{code}</h1>
				<p>Error</p>
				<p>{message}</p>
				<a href="/">home</a>
			</div>
		</>
	)
}

export default Error