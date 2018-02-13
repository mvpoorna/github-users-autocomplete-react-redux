import axios from 'axios'


//class containing one static function for getting data from the github API

//Change Username and Token for authentication. Github deletes tokens in public repos.
export default class GithubUsers {

  static getUsers(request) {
    const url = 'https://api.github.com/search/users'
    const params = {
      username: "mvpoorna",
      access_token: "7dddf08ca9f386baf6f1c4bd00e0d98ada849680",
      q: request + "in:login",
      type: "Users"
    }
    return axios.get(url, {params: params})
  }
}
