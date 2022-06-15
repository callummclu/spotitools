import loginFunction from '../../login'
import logoutFunction from '../../logout'

import BannerNav from '../../components/bannerNav'
import InfoCard from '../../components/InfoCard'

import {GiPodiumWinner} from 'react-icons/gi'

function TopPlayedLanding(props){
	return (
		<>
			<BannerNav title='Top Played Statistics' tagline='website tagline holder is a tagline' loggedIn={props.loggedIn}/>
			<div class="container">
			  <h1>Find your top played Artists and Songs</h1>
			  <p>The place to find statistics about your most played on spotify</p>
			  <InfoCard link={'/c/topplayed/categories'} icon={<GiPodiumWinner style={{width:"100%",height:"100%", transform:"scale(0.6)",opacity:0.7}}/>} title="Top Played" subtext="Find your top played artists/songs."/>
			</div>
		</>
	)
}

export default TopPlayedLanding