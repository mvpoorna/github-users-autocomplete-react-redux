import GithubUsers from '../api/githubUsers'

export function getUsers(request) {
  if (request != "") {
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
        console.log("EERRR", error.response)
        dispatch({
          type: "GET_GIT_USERS",
          payload: {
            users: []
          }
        })
        //throw(error)
      })
    }
  }
  return dispatch => {
    dispatch({
      type: "GET_GIT_USERS",
      payload: {
        users: []
      }
    })
  }
}
