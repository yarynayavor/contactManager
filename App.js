import React from 'react';
import AllTabs from './tabs/AllTabs';
// import { Contacts } from 'expo';
import { StyleSheet, Text, View,StatusBar  } from 'react-native';

// const MyStatusBar = ({backgroundColor, ...props}) => (
//     <View style={[styles.statusBar, { backgroundColor }]}>
//         <StatusBar translucent backgroundColor={backgroundColor} {...props} />
//     </View>
// );


export default class App extends React.Component {

constructor() {
super();
    this.state = {
      translucentStatusBar: true
        //!this.state.translucentStatusBar
    }
}

  render() {

    return (
        <View style={{flex: 1}}>
            <StatusBar translucent={false}
                       backgroundColor="#002733"
                       barStyle="light-content"
                       hidden={true} />
            <AllTabs/>
            {/*console.log({'hello'});*/}
        </View>



    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#99ccff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//     text: {
//       fontSize:35,
//     },
// });
