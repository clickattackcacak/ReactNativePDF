import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import PdfView from './PdfView';
import Main from './Main';


export default class Route extends React.Component {

  render() {

    return (

      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="pdf" component={PdfView} title="pdf"/>
          <Scene key="main" component={Main} title="main" initial={true} />
    
        </Stack>
      </Router>
    )
  }
}