import React from 'react';
import {Text,View,Image,Button,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Favorites extends React.Component {
    static navigationOptions = {
        tabBarLabel:'Favorites',
        tabBarIcon: () => {
            return <Icon name="favorite" size={25} color="#fff"/>;
        }
    }
    render() {
        return (
            <View>
                <Text style={styles.text}>Favorites</Text>
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