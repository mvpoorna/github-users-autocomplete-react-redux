import React from "react";

import Searchbar from './Searchbar'

import OtherContentBox from './OtherContentBox'

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <Searchbar/>
        <OtherContentBox where="here"/>
        <OtherContentBox where="there"/>
        <OtherContentBox where="there"/>
        <OtherContentBox where="there"/>

      </div>
    );
  }
}
