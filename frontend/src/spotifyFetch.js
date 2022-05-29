import axios from 'axios'

function spotifyFetchGet(url){
    return axios.post(url,{
      data:{"spotify_access_token":localStorage.getItem('spotify_access_token')}      
    })     
}

function spotifyFetchPost(url,otherData){
    return axios.post(url,{
      data:{"spotify_access_token":localStorage.getItem('spotify_access_token')},
      otherData:otherData
    })     
}

function spotifyFetchPut(url,otherData){
    return axios.put(url,{
      data:{"spotify_access_token":localStorage.getItem('spotify_access_token')},
      otherData:otherData
    })     
}


export {spotifyFetchGet,spotifyFetchPost}
export default {spotifyFetchGet,spotifyFetchPost}