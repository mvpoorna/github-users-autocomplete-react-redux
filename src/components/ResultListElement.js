import React from 'react'

export default class ResultListElement extends React.Component {

  render() {

    return (
      <div className="ElementWrapper">
        <figure><img src={this.props.user.avatar_url} alt={this.props.user.login} width="50" height="50"/></figure>
        <div className="userNameText">
          <p>{this.props.user.login}</p>
        </div>
      </div>
    )
  }
}
