import React from 'react';
import AllTabs from './tabs/AllTabs';
import { StyleSheet, Text, View,StatusBar  } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
        <View style={{flex: 1}}>
            <StatusBar translucent={false}
                       backgroundColor="#002733"
                       barStyle="light-content"
                       hidden={true} />
            <AllTabs/>
        </View>
    );
  }
}