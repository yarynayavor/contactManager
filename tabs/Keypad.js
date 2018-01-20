import React from 'react';
import {Text, View, Image, Button, StyleSheet, TextInput, AsyncStorage,TouchableNativeFeedback ,TouchableHighlight
,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome';

export default class Keypad extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            contacts:[],
            searchInput:''
        };
    }
    static navigationOptions = {
        tabBarLabel:'Keypad',
        tabBarIcon: () => {
            return <Icon name="md-keypad" size={25} color="#fff"/>;
        }
    }

    getContacts = () =>  {
        let {contacts} = this.state;
        // AsyncStorage.removeItem('favorites');
        return AsyncStorage.getItem('contacts').then((data) => {
            if(data) {
                this.setState({
                    contacts: JSON.parse(data),
                });
            } else {
                this.setState({
                    contacts
                });
            }
        });
    }

    componentWillUpdate(){
        this.getContacts();
    }

    componentWillMount() {
        this.getContacts();
    }

    drawContent(contact, index) {
        return (
            <TouchableNativeFeedback key={index} onPress={()=> {}}>
                <View style={styles.contact}>
                    <IconF style={styles.image} name="user-circle" size={35} color="#b2edff"/>
                    <View style={styles.contactUser}>
                        <Text style={styles.contactName}>
                            <Text>{contact.firstName} </Text>
                            <Text>{contact.lastName}</Text>
                        </Text>
                        <Text style={styles.contactCell}>{contact.cellPhone}</Text>
                    </View>
                    <TouchableHighlight underlayColor='#99ff9a' style={styles.dial} onPress={()=>{}}>
                        <IconF  name="phone" size={35} color="#00cc03"/>
                    </TouchableHighlight>
                </View>
            </TouchableNativeFeedback>
        );
    }
    render() {
        const {contacts,searchInput}=this.state;
        let filteredArr = contacts.filter(contact =>{
            let phoneString=contact.cellPhone.toString();
            let outString = phoneString.replace(/[-]/gi, '');
            return outString.includes(searchInput);
        })
        if(filteredArr.length===0 && this.state.searchInput) {
            return (
                <View style={{flex: 1}}>
                    <Text style={styles.text}>Enter phone number</Text>
                    <TextInput keyboardType={'phone-pad'}
                               style={{height: 40, borderColor: 'gray', borderWidth: 1,fontSize:20}}
                               onChangeText={(searchInput) => this.setState({searchInput})}
                               underlineColorAndroid="transparent"
                               value={this.state.searchInput}
                               placeholder="Search"
                    />
                    <Text style={styles.textNotFound}>Nothing found</Text>
                </View>
            );
        } else if(filteredArr.length===0 && this.state.searchInput.length===0) {
            return (
                <View style={{flex: 1}}>
                    <Text style={styles.text}>Enter phone number</Text>
                    <TextInput keyboardType={'phone-pad'}
                               value={this.state.searchInput}
                               style={{height: 40, borderColor: 'gray', borderWidth: 1,fontSize:20}}
                               onChangeText={(searchInput) => this.setState({searchInput})}
                               underlineColorAndroid="transparent"
                               placeholder="Search"
                    />
                </View>
            );
        }
        else {
            return (
                <View style={{flex: 1}}>
                    <Text style={styles.text}>Enter phone number</Text>
                    <TextInput keyboardType={'phone-pad'}
                               value={this.state.searchInput}
                               style={{height: 40, borderColor: 'gray', borderWidth: 1,fontSize:20}}
                               onChangeText={(searchInput) => this.setState({searchInput})}
                               underlineColorAndroid="transparent"
                               placeholder="Search"
                    />
                    {/*<ScrollView style={styles.wrapper}>*/}
                        {/*{filteredArr && filteredArr.map((filt, index) => {*/}
                            {/*return this.drawContent(filt, index)*/}
                        {/*})}*/}
                    {/*</ScrollView>*/}
                </View>
            );
        }

    }
}

const styles=StyleSheet.create({
    text: {
        fontSize:25,
        marginTop:30,
        backgroundColor:'#6f8888',
        textAlign:'center',
    },
    textNotFound: {
        fontSize:20,
        marginTop:10,
        textAlign:'center',
    },
});






