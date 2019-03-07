import React, { Component, Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { styles } from './utls/styles/helpers';

const {
  colors: { navBarGray }
} = styles;

const NavBar = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${navBarGray};
  color: ${props => (props.color ? 'white' : 'red')};
`;

const Clock = props => (
  <Fragment>
    <NavBar color={props.isWhite}>React</NavBar>
    <h1>{props.time}</h1>
    <p label="name">By {props.getName(payLoad)}</p>
  </Fragment>
);

const payLoad = {
  firstName: 'alejandro',
  preferredName: 'roberto'
}

const App = () => {

  const [state, setState] = useState({time: new Date()})

  const currentTime = () => setState({time: new Date() });

  useEffect(() => {
    setInterval(() => currentTime(), 1000);
  }, []);

  const getName = args => `${args.firstName || args.preferredName}`;

  return <Clock getName={this.getName} time={this.state.time.toLocaleTimeString()} isWhite={this.state.isWhite}/>;
}

export default App;
