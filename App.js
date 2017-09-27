import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/counter'
import CounterButton from './components/counterButton'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counter from './reducers/countReducer'

const store = createStore(counter);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <Counter/>
        <CounterButton/>
      </View>
        </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
