import axios from 'axios';

const url = 'http://localhost:5000/api/menu/';

class MenuService {
  static async getMenu() {
    const { data } = await axios.get(url)
    return data;
  }
   // return new Promise ((resolve,reject) => {
   //    axios.get(url).then((res) => {
   //      const data = res.data;
   //      resolve(
   //        data.map(item => ({
   //          ...item,
   //          createdAt: ''
   //        }))
   //      );
   //
   //    })
   //     .catch((err)=> {
   //         reject(err);
   //     })
   //   });
   // }

  static getMenuitem(id) {
    return axios.get(`${url}${id}`);
  }

 static updateMenuItem(id, title, description, price, categorie) {
   return axios.put(`${url}${id}`, {
     title,
     description,
     price,
     categorie
   });
 }

 static insertMenuItem(title, description, price, categorie) {
   return axios.post(url, {
     title,
     description,
     price,
     categorie
   });
 }

 static deleteMenuItem(id) {
   return axios.delete(`${url}${id}`);
 }
}

export default MenuService;
