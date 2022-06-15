import React from 'react'
import'./cmclui-btn.css'

const button = ({children,onClick,type,color,textColor,style,size}) => {
	let styleObj = {color:textColor,background:color,borderColor:color}

	if(style!==undefined){
		Object.assign(styleObj,style)
	}

	return (
		<button
			style={styleObj}
			className={`${type} cmclui-btn ${size == 'small' && 'small'} ${size == 'medium' && 'medium'}`}
			onClick={onClick}
		>{children}</button>
	)
}

export default button