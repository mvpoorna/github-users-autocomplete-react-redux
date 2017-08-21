import axios from 'axios'


//class containing one static function for getting data from the github API
export default class GithubUsers {

  static getUsers(request) {
    const url = 'https://api.github.com/search/users'
    const params = {
      username: "Machkeck",
      access_token: "e833d815782b033da5a48198c1e084a1cc935550",
      q: request + "in:login",
      type: "Users"
    }
    return axios.get(url, {params: params})
  }
}
