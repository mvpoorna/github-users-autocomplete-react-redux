import axios from 'axios'

export default class GithubUsers {
  // get a list of users
  static getList(request) {

    /*const url = 'https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF'
    axios.get(url).then(response => console.log(response));

    return axios.get(url)*/
    return new Promise(resolve => {
      setTimeout(() => {
        // build some dummy users list
        let users = [];
        for (let x = 1; x <= 28; x++) {
          users.push({
            id: x,
            username: 'Johny ' + x,
            job: 'Employee ' + x
          });
        }
        resolve(users);
      }, 1000);
    });
  }

  static getUsers(request) {
    console.log("getUsers",request)
    //const url = 'https://api.github.com/search/users/'+request
    const url = 'https://api.github.com/search/users'
    const params = {username:"Machkeck",token:"6380f0c2914509bfd9c4075e9a24b7e434a673d8",q:request}
    return axios.get(url,{params:params})/*.then(response => {
      console.log("Axios response: ",response.data.items)
      return response.data.items.json()
    }).catch(error => {
      return error
    });*/
  }
}
