import Nav from '../../components/nav'
import InfoCard from '../../components/InfoCard'

import {VscPerson} from 'react-icons/vsc'
import {CgMusicNote} from 'react-icons/cg'

function ChooseCategory(props){
	return (
		<>
			<Nav loggedIn={props.loggedIn}/>
			<div className="container small-nav">
			<h1>Choose a Category</h1>
			<p>Chose the category you want to view</p>
			<InfoCard icon={<VscPerson style={{width:"100%",height:"100%", transform:"scale(0.6)",opacity:0.7}}/>} title="Artists" subtext="Find your top artists" link="/c/topplayed/categories/artists"/>
			<InfoCard icon={<CgMusicNote style={{width:"100%",height:"100%", transform:"scale(0.6)",opacity:0.7}}/>} title="Tracks" subtext="Find your top tracks" link="/c/topplayed/categories/tracks"/>
			</div>
		</>
	)
}

export default ChooseCategory