import React from 'react';
import {Text,View,Image,Button,StyleSheet,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import Keyboard from 'react-native-keyboard';
// import PropTypes from 'prop-types';

// let model = {

    // _keys: [],
    //
    // _listeners: [],
    //
    // addKey(key) {
    //     this._keys.push(key);
    //     this._notify();
    // },
    //
    // delKey() {
    //     this._keys.pop();
    //     this._notify();
    // },
    //
    // clearAll() {
    //     this._keys = [];
    //     this._notify();
    // },
    //
    // getKeys() {
    //     return this._keys;
    // },
    //
    // onChange(listener) {
    //     if (typeof listener === 'function') {
    //         this._listeners.push(listener);
    //     }
    // },
    //
    // _notify() {
    //     this._listeners.forEach((listner) => {
    //         listner(this);
    //     });
    // }
// };

// React.Component.propTypes = {
//     text: PropTypes.string.isRequired,
// };


export default class Keypad extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         text: ''
    //     };
    // }
    //
    // componentDidMount() {
    //     model.onChange((model) => {
    //         this.setState({text: model.getKeys().join('')});
    //     });
    // }
    //
    // _handleClear() {
    //     model.clearAll();
    // }
    //
    // _handleDelete() {
    //     model.delKey();
    // }
    //
    // _handleKeyPress(key) {
    //     model.addKey(key);
    // }

    static navigationOptions = {
        tabBarLabel:'Keypad',
        tabBarIcon: () => {
            return <Icon name="md-keypad" size={25} color="#fff"/>;
        }
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={styles.text}>Enter number</Text>
                <TextInput keyboardType={'phone-pad'}
                           style={{height: 40, borderColor: 'gray', borderWidth: 1,fontSize:20}}
                           onChangeText={(text) => this.setState({text})}
                           value={this.state.text}
                />
                {/*<View style={{flex: 1}}>*/}
                    {/*<Text style={styles.text}>{this.state.text}</Text>*/}
                {/*</View>*/}
                {/*<Keyboard*/}
                    {/*keyboardType="decimal-pad"*/}
                    {/*onClear={this._handleClear.bind(this)}*/}
                    {/*onDelete={this._handleDelete.bind(this)}*/}
                    {/*onKeyPress={this._handleKeyPress.bind(this)}*/}
                {/*/>*/}
            </View>
        );
    }
}

const styles=StyleSheet.create({
    text: {
        fontSize:25,
        marginTop:30,
        backgroundColor:'#6f8888',
        textAlign:'center',
    },
});






