import React from 'react';
import {Text, View, Image, Button, StyleSheet, ListView, Alert, TouchableOpacity, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackNavigator} from 'react-navigation';
import ContactList from '../screens/ContactList';
import ContactDetails from '../screens/ContactDetails';
import Logs from '../tabs/Logs';

const ContactsScreenNavigator=StackNavigator({
    ContactList: {screen:ContactList},
    ContactDetails: {screen:ContactDetails},
    Logs:{screen:Logs}

},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
        }
    }
);


export default class ContactsTab extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         contact: [],
    //         text: '',
    //         logs:[]
    //     }
    //     this.onPressCall = this.onPressCall.bind(this);
    // }

    // componentDidMount() {
    //     this.setState({ contact: this.props.navigation.state.params.contact,
    //         logs: this.props.navigation.state.params.logs});
    // }


    static navigationOptions = {
        tabBarLabel:'Contacts',
        tabBarIcon: () => {
            return <Icon name="ios-contacts" size={25} color="#fff"/>;
        }
    }



    render() {
       // const {contact} = this.state;
        return (
            <View style={{flex: 1}}>
                {/*<Text style={styles.text}>Contacts</Text>*/}
                <ContactsScreenNavigator/>
            </View>
        );
    }
}

// const styles=StyleSheet.create({
//     text: {
//         fontSize:25,
//         marginTop:30,
//         backgroundColor:'#6f8888',
//         textAlign:'center',
//     },
// });
