import loginFunction from '../../login'

function FmpLanding(props){

	return (
		<>
			{!props.loggedIn && <button onClick={loginFunction}>sign in</button>}

			<h1>FixMyPlaylist Home</h1>
			<a href="fixmyplaylist/my-playlists">my playlists</a>
		</>
	)
}

export default FmpLanding