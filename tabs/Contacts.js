import React from 'react';
import {Text,View,Image,Button,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import { Contacts,Alert} from 'expo';




export default class Contacts extends React.Component {
    static navigationOptions = {
        tabBarLabel:'Contacts',
        tabBarIcon: () => {
            return <Icon name="ios-contacts" size={25} color="#fff"/>;
        }
    }

    
    render() {
        return (
            <View>
                <Text style={styles.text}>Contacts</Text>
                
            </View>
        );
    }
}

const styles=StyleSheet.create({
    text: {
        fontSize:25,
        marginTop:30,
        backgroundColor:'#cce6ff',
        textAlign:'center',
    },
});
