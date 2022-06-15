import './cmclui-footer.css'

const Footer = ({sections=[]}) => {

	let sections_content = () => {
		return sections.map(e=>{
			return (
				<div className="cmclui-footer-content-section" style={{width:`calc(${(100/sections.length)}% - 50px)`}}>
					<h3>{e.title}</h3>
					<p>{e.content}</p>

				</div>
			)
		})
	}

	return (
		<>
			<div className="cmclui-footer">
				<div className="cmclui-footer-content">
					{sections_content()}
				</div>
				<div className="cmclui-footer-brand">
					<p>©2022 CMcLUI</p>
				</div>
			</div>
		</>
	)
}

export default Footer