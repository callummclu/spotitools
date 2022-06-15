const logoutFunction = () => {
  localStorage.removeItem('spotify_access_token')

  window.open('https://www.spotify.com/us/logout/', "Listening is everything - Spotify","status = 1, height = 0, width = 0, resizable = 0" )
  window.location.href = (`${process.env.REACT_BACKEND_URL || `${window.location.origin}:3000`}`)
}

export default logoutFunction