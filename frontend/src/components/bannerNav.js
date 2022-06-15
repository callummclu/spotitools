import loginFunction from '../login'
import logoutFunction from '../logout'

export default function BannerNav(props){
	return(
		<>
		<div class="banner">
		  <h1>{props.title}</h1>
		  <p>{props.tagline}</p>
		</div>
		<div class="sub-nav">
		  <p><a href="">what does this app do?</a></p>
		  <p><a href="">Get started</a></p>
		  <p>{props.loggedIn ? <button onClick={logoutFunction}>Logout</button> : <button onClick={loginFunction}>Sign in</button>}</p>
		</div>
		</>
	)
}