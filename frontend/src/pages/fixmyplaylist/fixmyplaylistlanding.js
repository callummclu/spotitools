import BannerNav from '../../components/bannerNav'
import InfoCard from '../../components/InfoCard'
import {CgMusic} from 'react-icons/cg'

function FmpLanding(props){

	return (
		<>
			<BannerNav title='Fix My Playlist' tagline='website tagline holder is a tagline' loggedIn={props.loggedIn}/>
			<div class="container">
			  <h1>Make the most of your playlists</h1>
			  <p>Help your playlists reach their full potential</p>
			  <InfoCard link={'/c/fixmyplaylist/my-playlists'} icon={<CgMusic style={{width:"100%",height:"100%", transform:"scale(0.6)",opacity:0.7}}/>} title="Top Played" subtext="Find your top played artists/songs."/>
			</div>			
		</>
	)
}

export default FmpLanding