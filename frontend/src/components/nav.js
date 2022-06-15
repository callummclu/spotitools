import loginFunction from '../login'
import logoutFunction from '../logout'
import CNav from './cmclui/cmclui-nav'

export default function Nav(props){
	return (
		<>
		<CNav 
			brand={'Spotitools'}
			style={{color:"white",background:"rgb(90,90,90)"}}
		>
            <p><a href="#">what does this app do?</a></p>
            <p><a href="#">Get Started</a></p>
            <div className="fl-r">
				{props.loggedIn ? <p style={{cursor:"pointer"}} onClick={logoutFunction}>logout</p> : <p style={{cursor:"pointer"}} onClick={loginFunction}>sign in</p>}
            </div>
          </CNav>
		</>
	)
}