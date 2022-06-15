export default function InfoCard(props){
	const redirectToLink = _ => window.location.href = window.location.origin + props.link
	return (
		<div onClick={_=>props.link.length>0 && redirectToLink()} class={`info-card ${props.link.length>0 && 'clickable'}`}>
			<div class="image">{props.icon}</div>
			<div class="info">
			  <h1>{props.title}</h1>
			  <p>{props.subtext}</p>
			</div>
		</div>
	)
}