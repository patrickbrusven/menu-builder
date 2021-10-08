import axios from 'axios'

class JwtService {
  // atob parses Base64 encoding
  static parseJwt(token) {
    try {
      const parsedToken = JSON.parse(atob(token.split('.')[1]));
      return parsedToken._id;
    } catch (e) {
      return null;
    }
  }

  static assignHeaders(jwt) {
    axios.defaults.headers.common['auth-token'] = `${jwt}`;
  }

  static setSessionStorage(jwt) {
    sessionStorage.setItem('user', jwt);
  }
}

export default JwtService;
