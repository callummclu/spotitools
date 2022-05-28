import loginFunction from '../../login'
import logoutFunction from '../../logout'

function FmpLanding(props){

	return (
		<>
			{props.loggedIn ? <button onClick={logoutFunction}>logout</button> : <button onClick={loginFunction}>sign in</button>}

			<h1>FixMyPlaylist Home</h1>
			<a href="fixmyplaylist/my-playlists">my playlists</a>
		</>
	)
}

export default FmpLanding