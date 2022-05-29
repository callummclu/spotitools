import loginFunction from '../login'
import logoutFunction from '../logout'

export default function Nav(props){
	return <>{props.loggedIn ? <button onClick={logoutFunction}>logout</button> : <button onClick={loginFunction}>sign in</button>}</>
}