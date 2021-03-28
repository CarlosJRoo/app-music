import config from './config.js'
const api_Key = config.APIkey
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:pais&api_key=${api_Key}&format=json`;

export default function getArtist(pais) {

  const url = URL.replace(':pais', pais)
  console.log(pais);
  return fetch(url)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}


