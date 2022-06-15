import React from 'react'
import './cmclui-input.css'

const Input = ({type="text",label,id='input-1',name='default'}) => {
	return (
		<>
			<div className="cmclui-input-container">
				<input name={name} id={id} placeholder=" " className="cmclui-input" type={type}/>	
				<label htmlFor={id} className="cmclui-label">{label}</label><br/>
			</div>
		</>
	)
}

export default Input