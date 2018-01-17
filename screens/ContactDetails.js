import React from 'react';
import { Text, View, Image, StyleSheet,Button,TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconF from 'react-native-vector-icons/MaterialIcons';


export default class ContactDetails extends React.Component {

    constructor() {
        super();
        this.state = {
            contact: [],
            favorites:[]
        }
    }

    componentDidMount() {
        this.setState({ contact: this.props.navigation.state.params.contact });
    }

    onPress() {
        this.props.navigation.navigate("ContactList");
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.contact !== 0 ?
                    <View>
                        <View>

                            {/*<Button onPress={()=> {this.onPress()}} title="←Return to contact list"></Button>*/}
                            <View style={styles.skyBlue}>
                                <TouchableHighlight underlayColor='#7fe2ff' onPress={()=>{this.onPress()}} style={{width:50}}>
                                    <View>
                                        <Icon style={styles.addButton} name="arrow-left" size={20} color="#fff"/>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.imageWrapper}>
                                <Icon style={styles.image} name="user-circle" size={100} color="#b2edff"/>

                            </View>
                            <Text style={styles.name}>{this.state.contact.firstName} {this.state.contact.lastName}</Text>
                        </View>
                        <View>
                            <View style={styles.phoneWrapper}>
                                <Text style={styles.metadata}>Phone: </Text>
                                <Text style={styles.detailData}>{this.state.contact.cellPhone}</Text>
                            </View>
                        </View>
                        <TouchableHighlight onPress={()=>{}}>
                            <View>
                                <Text style={styles.addToFavorites}>
                                    <IconF name="favorite" size={22} color="red"/>
                                    Add to favorites</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{marginTop:5}} onPress={()=>{}}>
                            <View>
                                <Text style={styles.deleteContact}>
                                    <Icon name="trash" size={22} color="#fff"/>
                                     Remove contact</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    : null}
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#e5f9ff'
    },
    skyBlue: {
        backgroundColor: 'skyblue',
        height: 40
    },
    imageWrapper: {
        alignItems: 'center',
        marginBottom: 5
    },
    image: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: '#004e66',
        borderRadius: 100,
        marginTop:5
    },
    name: {
        fontSize: 35,
        fontWeight: '800',
        color: '#004e66',
        textAlign:'center'
    },
    phoneWrapper: {
        flexDirection: 'row',
        backgroundColor: '#f2fcff',
        padding:10,
        paddingTop:15,
        paddingBottom:15,
        marginBottom:30
    },
    metadata: {
        fontWeight: '600',
        fontSize: 15,
        width: 120,
        marginRight: 5,
        fontStyle:'italic'
    },
    detailData: {
        fontSize: 25,
        textAlign:'center',
    },
    addButton: {
        textAlign:'center',
        backgroundColor:'#ccf3ff',
        padding:10,
        color:'#00c5ff',
    },
    addToFavorites: {
        textAlign:'center',
        backgroundColor:'skyblue',
        padding:5,
        color:'#fff',
        fontSize:22,
        borderWidth: 1,
        borderColor: '#004e66',
        fontStyle:'italic'
    },
    deleteContact: {
        textAlign:'center',
        backgroundColor:'#ff4c4c',
        color:'#fff',
        padding:5,
        fontSize:22,
        borderWidth: 1,
        borderColor: '#004e66'
    },
});
