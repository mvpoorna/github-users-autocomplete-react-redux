import GithubUsers from '../api/githubUsers'

//ACTIONS

export function getUsers(request) {
  //check if request isn't empty or null else return users as empty array
  if (request != "" && request != null) {
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
        //common error: 403 - Too many API requests
        console.log("ERROR", error.response)
        dispatch({
          type: "GET_GIT_USERS",
          payload: {
            users: []
          }
        })
        //throw(error)
      })
    }
  } else {
    return dispatch => {
      dispatch({
        type: "GET_GIT_USERS",
        payload: {
          users: []
        }
      })
    }
  }
}
