class RefreshUserService {
  static parseJwt(token) {
    try {
      const parsedToken = JSON.parse(atob(token.split('.')[1]));
      return parsedToken._id
    } catch (e) {
      return null;
    }
  }
}

export default RefreshUserService;
