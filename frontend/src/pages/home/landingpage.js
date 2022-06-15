import loginFunction from '../../login'
import logoutFunction from '../../logout'
import './landingpage.css'
import {CgMusic, CgPlayList} from 'react-icons/cg'

import InfoCard from '../../components/InfoCard'
import BannerNav from '../../components/bannerNav'

const LandingPage = (props) =>{
	return (
		<>
			<BannerNav title='Spotitools' tagline='website tagline holder is a tagline' loggedIn={props.loggedIn}/>
			<div class="container">
			  <h1>Tagline about spotify tools</h1>
			  <p>short passage describing why this site was made</p>
			  <InfoCard link={'/c/topplayed'} icon={<CgMusic style={{width:"100%",height:"100%", transform:"scale(0.6)",opacity:0.7}}/>} title="Top Played" subtext="Find your top played artists/songs."/>
			  <InfoCard link={'/c/fixmyplaylist'} icon={<CgPlayList style={{width:"100%",height:"100%", transform:"scale(0.6)",opacity:0.7}}/>}title="Fix My Playlist" subtext="Make your playlists flow the way they should."/>
			</div>
		</>
	)
}

export default LandingPage