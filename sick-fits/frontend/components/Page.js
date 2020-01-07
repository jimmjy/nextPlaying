import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";
import styled from "styled-components";

const MyButton = styled.button`
  background: red;
  font-size: 100px;
  .test {
    color: white;
  }
`;

export default class Page extends Component {
  render() {
    return (
      <div className="test">
        <Meta />
        <Header />
        <MyButton>
          Click Me
          <span className="test">T</span>
        </MyButton>
        {this.props.children}
      </div>
    );
  }
}
