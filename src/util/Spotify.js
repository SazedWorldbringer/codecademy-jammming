let accessToken;

const Spotify = {
  getAccessToken() {
    // check if we already have the access token
    if (accessToken) {
      return accessToken;
    }
  },
};

export default Spotify;
