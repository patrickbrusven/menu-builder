import axios from 'axios';

const url = 'http://localhost:5000/api/menu/';

class MenuService {
  static getMenu() {
   return new Promise ((resolve,reject) => {
      axios.get(url).then((res) => {
        const data = res.data;
        resolve(
          data.map(item => ({
            ...item,
            createdAt: ''
          }))
        );
      })
       .catch((err)=> {
           reject(err);
       })
     });
   }

  static getMenuitem(id) {
   return axios.get(`${url}${id}`);
  }
}

export default MenuService;
