function getToken(){
    return localStorage.getItem("token")
}
function setToken(token){
    return localStorage.setItem("token", token)
}

export { getToken, setToken }