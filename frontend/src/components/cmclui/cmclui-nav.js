import React from 'react'
import './cmclui-nav.css'

const HamburgerIcon = ({color="rgb(60,60,60)"}) => {
	return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>
}

const XIcon = ({color="rgb(60,60,60)"}) => {
	return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
}

const CNav = ({children,brand,style={color:"rgb(60,60,60)"}}) =>{
	let brandStyle = {...style}
	Object.keys(brandStyle).includes("background") && delete brandStyle.background

	let dropStyle = {...style}
	Object.keys(dropStyle).includes("position") && delete dropStyle.position
	
	const [hamToggle,setHamToggle] = React.useState(false)
	return (
		<>
		<div style={style} className="cmclui-nav">
		{brand && <h1 style={{brandStyle}} className="brand"><a href={window.location.origin}>{brand}</a></h1>}
		<div style={dropStyle} className={`cmclui-nav-content ${hamToggle && 'active'}`}>
			{children}

		</div>
		<div className="fl-r">
			<button 
				className="cmclui-hamburger"
				onClick={()=>{setHamToggle(!hamToggle)}}
			>{!hamToggle?<HamburgerIcon color={style.color}/>:<XIcon color={style.color}/>}</button>
		</div>
		</div>
		<div className="cmclui-nav-spacer"></div>
		</>
	)
}

export default CNav