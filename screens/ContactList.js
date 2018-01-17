import React from 'react';
//import {Text,View,StyleSheet} from 'react-native';
import { Text, View,
    Button, StyleSheet,
    Image, ScrollView,
    TouchableNativeFeedback,AsyncStorage,TextInput,
    TouchableHighlight,
    Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logs from '../tabs/Logs';

export default class ContactList extends React.Component {

    constructor(props) {
        super(props);
        this.onPressDetails = this.onPressDetails.bind(this);
        this.onPressCall = this.onPressCall.bind(this);

        this.state = {
            contacts: [],
            text: '',
            logs:[]
        }
    }

    capitalize(val) {
        return val[0].toUpperCase()+val.substring(1);
    }

    componentDidMount() {

        let {contacts} = this.state;

        AsyncStorage.getItem('contacts').then((data) => {
            if(data) {
                this.setState({
                    contacts: JSON.parse(data),
                });
            } else {
                fetch("https://randomuser.me/api/?nat=gb&inc=name,email,cell,picture&results=10").then(x => {
                    const results = JSON.parse(x._bodyInit).results;
                    results.map((contact) => {
                        contacts.push({
                            firstName: this.capitalize(contact.name.first),
                            lastName: this.capitalize(contact.name.last),
                            cellPhone: contact.cell
                        });
                        return contacts;
                    })
                    this.setState({ contacts});
                    AsyncStorage.setItem('contacts', JSON.stringify(contacts));
                });
            }

        });
    }

    onPressDetails(contact) {
        this.props.navigation.navigate("ContactDetails", {contact: contact});
    }

    onPressCall(contact) {

        let {logs} = this.state;
        Alert.alert(
            'Contact manager',
            'You make a call, see in Logs',
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        );

        logs.push({
            firstName: contact.firstName,
            lastName: contact.lastName,
            cellPhone: contact.cellPhone,
            callDuration:'00:00:01'
        });
        // this.props.navigation.dispatch(
        //     {
        //         type: 'Navigation/NAVIGATE',
        //         routeName: 'Logs',
        //         action: {
        //             type: 'Navigation/NAVIGATE',
        //             routeName: 'Logs',
        //         }
        //     }
        // );
        this.props.navigation.navigate("Logs", {logs: logs});
        this.setState({logs });
        AsyncStorage.setItem('logs', JSON.stringify(logs));

    }



    drawContent(contact, index) {
        return (
            <TouchableNativeFeedback key={index} onPress={()=> {this.onPressDetails(contact)}}>
                <View style={styles.contact}>
                    {/*<Image style={styles.image} source={{ uri: contact.picture.thumbnail }} />*/}
                    <Icon style={styles.image} name="user-circle" size={35} color="#b2edff"/>
                    <View style={styles.contactUser}>

                        <Text style={styles.contactName}>
                            <Text>{contact.firstName} </Text>
                            <Text style={styles.contactNameLast}>{contact.lastName}</Text>
                        </Text>
                        <Text style={styles.contactCell}>{contact.cellPhone}</Text>
                    </View>
                    <TouchableHighlight underlayColor='#99ff9a' style={styles.dial} onPress={()=>{this.onPressCall(contact)}}>
                        <Icon  name="phone" size={35} color="#00cc03"/>
                    </TouchableHighlight>
                </View>
            </TouchableNativeFeedback>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name="search" size={20} color="#ccc"/>
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        onChangeText={(searchString) => {this.setState({searchString})}}
                        underlineColorAndroid="transparent"
                    />
                </View>
                {/*<TextInput keyboardType={'phone-pad'}*/}
                           {/*style={styles.searchInput}*/}
                           {/*onChangeText={(text) => this.setState({text})}*/}
                           {/*value={this.state.text}*/}
                           {/*placeholder={'Search'}*/}
                {/*></TextInput>*/}
                <ScrollView style={styles.wrapper}>
                    {this.state.contacts && this.state.contacts.map((contact, index) => {
                        return this.drawContent(contact, index)
                    })}
                </ScrollView>
                <TouchableHighlight onPress={()=>{}}>
                    <View>
                        <Text style={styles.addButton}>
                            <Icon name="user-plus" size={35} color="#fff"/>
                            Add new contact</Text>
                    </View>
                </TouchableHighlight>

                {/*<Button onPress={() => { }} title={}/>*/}
            </View>)
    }
}

const styles = StyleSheet.create({
    searchSection: {
        // flex: 1,
         flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        padding:5,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingLeft: 5,
        backgroundColor: '#fff',
        color: '#424242',
        fontSize:20
    },
    container: {
        flex: 1,
        backgroundColor:'#fff'
    },
    wrapper: {
        flex: 1,
        marginBottom: 10,
        marginTop:10,
    },
    // searchInput: {
    //     borderColor: 'green',
    //     borderWidth: 2,
    //     fontSize:20,
    //     padding:10
    // },
    contact: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#849999',
        padding:10
    },

    contactUser: {
        paddingLeft:20
    },
    contactName: {
        fontWeight:'700',
        fontSize:22
    },

    contactNameLast: {

    },
    contactCell: {
        fontSize:18
    },
    image: {
        marginLeft: 10,
        marginTop:10
    },
    dial: {
        marginLeft: 'auto',
        marginTop:10,
        backgroundColor:'#e5f9ff',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:5,
        paddingBottom:5,
        borderRadius:100
    },
    addButton: {
        textAlign:'center',
        backgroundColor:'#004e66',
        padding:5,
        color:'#fff'
    },
});