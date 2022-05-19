let accessToken;

const Spotify = {
  getAccessToken() {
    // check if we already have the access token
    if (accessToken) {
      return accessToken;
    }

    // check for an access token match
    const accessToken = window.location.href.match(/access_token=([^&]*)/);
  },
};

export default Spotify;
