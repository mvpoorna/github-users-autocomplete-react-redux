import React from "react";
import ResultList from './ResultList'
import {FormGroup,FormControl,Glyphicon} from 'react-bootstrap'
import { connect } from "react-redux";

import {getUsers} from '../actions/githubUsersActions'

// Home page component
export class Searchbar extends React.Component {

  constructor(props){
    super(props)

    this.onChangeHandle = this.props.onChangeHandle.bind(this)
  }
  // render

  /*onChangeHandle(event){
    console.log("USER: ",event.target.value)
  }*/

  /*onChangeHandle(event) {
    // delete the user
    this.props.dispatch({
      type: 'GITHUB_USERS_FETCH_LIST',
      query: event.target.value,
    });

  }*/

  render() {

    //console.log("REDNER",this.props)
    const users_mock = [{name:"john",image:"https://dizivizi.com/mbb/imgs/site/default_user.png"},
    {name:"mark",image:"https://dizivizi.com/mbb/imgs/site/default_user.png"},
    {name:"robert",image:"https://dizivizi.com/mbb/imgs/site/default_user.png"}]



    return (
      <div className="SearchbarComponent">
        <FormGroup >
          <FormControl type="text" placeholder="type a github username" ref="user_input" onChange={this.onChangeHandle}/>
          <FormControl.Feedback>
            <Glyphicon glyph="search"/>
          </FormControl.Feedback>
        </FormGroup>
        <ResultList githubUsers={this.props.users.users}/>

      </div>
    );
  }
}


// export the connected class
/*function mapStateToProps(state) {
  return {
    users: state.users
  };
}*/

const mapStateToProps = (state) =>{
  return {users: state.githubUsersThunkReducer}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeHandle: (event) => {
      console.log(event)
      dispatch(getUsers(event.target.value))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Searchbar);
