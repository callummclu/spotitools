const loginFunction = () => {
  const getAccessToken = url => url.split("#") !== undefined ? url.split('#')[1]?.replace('access_token=','').split('&')[0] : ""
  const getSessionToken = url => url.split("#") !== undefined ? url.split('#')[1]?.replace('session_token=','').split('&')[1] : ""
  window.location.replace(`http://localhost:3001/OAuth/login`)
  localStorage.setItem(
    'spotify_access_token',
    getAccessToken(window.location.href.toString())
  )
}

export default loginFunction