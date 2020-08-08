import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
//引入各页面
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from '../pages/page3';
import Page4 from '../pages/page4';

const routes = {
  Page1: {
    screen: Page1,
  },
  Page2: {
    screen: Page2,
  },
  Page3: {
    screen: Page3,
  },
  Page4: {
    screen: Page4,
  },
};

const options = {
  initialRouteName: 'Page1',
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#fff',
    },
  },
  headerMode: 'none',
  mode: 'card',
  onTransitionStart: (to, from) => {},
  onTransitionEnd: (to, from) => {},
};

class Routers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // this.props change options
    if (this.props.routerName) {
      options.initialRouteName = this.props.routerName;
      const keys = Object.keys(routes);
      keys.forEach((key) => {
        routes[key].params = {};
      });
      routes[this.props.routerName].params = {
        isNative: true,
        ...this.props,
      };
    }
    const StackNavigator = createAppContainer(
      createStackNavigator(routes, options),
    );
    return <StackNavigator />;
  }
}
export default Routers;
