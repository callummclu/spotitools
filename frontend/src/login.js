const loginFunction = async  () => {
  localStorage.removeItem("spotify_access_token")
  window.location.href = (`${process.env.REACT_BACKEND_URL || `${window.location.origin}:3001`}/OAuth/login`)
}

export default loginFunction