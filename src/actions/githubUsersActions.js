import GithubUsers from '../api/githubUsers'

export function getUsers(request) {
  return dispatch => {

    let wiki_request = "https://en.wikipedia.org/w/api.php?action=query&titles=" + request + "&prop=pageimages&format=json&pithumbsize=100"
    return GithubUsers.getUsers(request).then(url => {
      console.log("apiAxctions", url.data.items)
      dispatch({
        type: "GET_GIT_USERS",
        payload: {
          users: url.data.items
        }
      })
    }).catch(error => {
      throw(error)
    })
  }
}
