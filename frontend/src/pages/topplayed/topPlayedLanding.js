import loginFunction from '../../login'
import logoutFunction from '../../logout'

function TopPlayedLanding(props){
	return (
		<>
			{props.loggedIn ? <button onClick={logoutFunction}>logout</button> : <button onClick={loginFunction}>sign in</button>}
			<h1>Top Played Landing</h1>
			<a href="topplayed/categories">categories</a>
		</>
	)
}

export default TopPlayedLanding