import React, {Component} from 'react';
import Router from './src/Router';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import persist from './src/config/store';
import {StatusBar} from 'react-native';

const persistStore = persist();

class App extends Component {
  render() {
    const store = persistStore.store;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore.persistor}>
          <Router />
          <StatusBar hidden />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
