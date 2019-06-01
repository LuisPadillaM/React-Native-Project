import React from 'react';
import { Font } from 'expo';
import { Provider } from 'react-redux';

import AppContainer from 'components/AppContainer';
import store from 'store';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }
    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("native-base/Fonts/Ionicons.ttf")
        });
        this.setState({ isReady: true });
    }
  render() {
      if (!this.state.isReady) {
          return <Expo.AppLoading />;
      }
      return (<Provider store={store}>
          <AppContainer />
      </Provider>);
  }
}
