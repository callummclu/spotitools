import loginFunction from '../../login'
import logoutFunction from '../../logout'

const LandingPage = (props) =>{


	const redirectPage = (area) => {
		window.location.href = (`${window.location.origin}/${area}`)
	}

	return (
		<>
			{props.loggedIn ? <button onClick={logoutFunction}>logout</button> : <button onClick={loginFunction}>sign in</button>}
			<h1>Home</h1>
			<button onClick={e=>redirectPage("c/fixmyplaylist")}>fix my playlist</button>
			<button onClick={e=>redirectPage("c/topplayed")}>top played</button>

		</>
	)
}

export default LandingPage