import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

const BASE_URL = "https://api.spotify.com/v1";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = "http://localhost:3000/callback";
const SCOPE = "playlist-modify-private";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://developer.spotify.com/dashboard/applications"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
