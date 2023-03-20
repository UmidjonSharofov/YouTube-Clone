import React, { Component } from "react";
import './main'
import './Body/index'
import Body from "./Body/index";
import Sidebar from "./sidebar/index";
import { Contener } from "./main";
class YouTube extends Component {
  render() {
    return (
       <Contener>

        <Body/>
        <Sidebar/>
       </Contener>
    );
  }
}

export default YouTube;
