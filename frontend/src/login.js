const loginFunction = async  () => {
  window.location.href = (`${process.env.REACT_BACKEND_URL || "http://localhost:3001"}/OAuth/login`)
}

export default loginFunction