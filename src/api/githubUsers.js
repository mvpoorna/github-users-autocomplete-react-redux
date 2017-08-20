import axios from 'axios'


//class containing one static function for getting data from the github API
export default class GithubUsers {

  static getUsers(request) {
    const url = 'https://api.github.com/search/users'
    const params = {
      username: "Machkeck",
      access_token: "6380f0c2914509bfd9c4075e9a24b7e434a673d8",
      q: request + "in:login",
      type: "Users"
    }
    return axios.get(url, {params: params})
  }
}
