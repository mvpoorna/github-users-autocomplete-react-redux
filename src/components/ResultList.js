import React from "react";
import ResultListElement from './ResultListElement'

// Home page component
export default class ResultList extends React.Component {
  // render

  render() {

    const users = this.props.githubUsers
    console.log(this.props)


  return (
    <div className="ResultListComponent">
      {users.length > 0 && <div>
        <div className="resultsHeader">
          <p>github users</p>
        </div>
        <div className="resultsBody">
          {users.map((user, index) => {
            return (<ResultListElement key={index} user={user}/>);
          })}
        </div>
      </div>}
    </div>
  );
}
}
