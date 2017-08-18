// users reducer
export default function users(state = {}, action) {
  switch (action.type) {
    case 'GITHUB_USERS_LIST_SAVE':
      return action.users;


    // initial state
    default:
      return state;
  }
}
