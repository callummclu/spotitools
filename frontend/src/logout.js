const logoutFunction = () => {
  window.location.href = (`${process.env.REACT_BACKEND_URL || "http://localhost:3000"}`)
  localStorage.removeItem('spotify_access_token')
}

export default logoutFunction