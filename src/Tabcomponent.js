import React, { Component } from 'react';
import Tabs, { Tab } from 'react-awesome-tabs'; 

export class Tabbing extends Component {
  handleTabSwitch(active) {
      this.setState({ activeTab: active });
  }

  constructor(props) {
      super(props);
      this.state = {
          activeTab: 0
      };
  }

  render() {
      return (
          <Tabs
              active={ this.state.activeTab }
              onTabSwitch={ this.handleTabSwitch.bind(this) }
          >
              <Tab title="Tab1">foo</Tab>
              <Tab title="Tab2">bar</Tab>
              <Tab title="Tab3">baz</Tab>
          </Tabs>
      );
  }
}

export default Tabbing;