let accessToken;

const Spotify = {
  getAccessToken() {
    // check if we already have the access token
    if (accessToken) {
      return accessToken;
    }

    // check for an access token match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    // see when the token expires
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
  },
};

export default Spotify;
