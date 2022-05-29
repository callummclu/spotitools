import loginFunction from '../../login'
import logoutFunction from '../../logout'

const LandingPage = (props) =>{
	return (
		<>
			<h1>Home</h1>
			<a href="c/fixmyplaylist">fix my playlist</a>
			<br/><br/>
			<a href="c/topplayed">top played</a>

		</>
	)
}

export default LandingPage