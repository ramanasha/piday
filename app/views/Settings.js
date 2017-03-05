import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import BackgroundImage from '../components/BackgroundImage';
import BackBtn from '../components/BackBtn';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
    }
    _navigate(route){
        this.props.navigator.push({
            name: route,
        })
    }
    render() {
        return (
            <BackgroundImage>
                <BackBtn navigate={() => this._navigate('Home') } />
                <View style={styles.top}>
                    <Text style={styles.title}>More</Text>
                </View>


                <View style={styles.container}>
                    <TouchableHighlight  style={styles.roundedBtn} onPress={ () => this._navigate('Home') } underlayColor="rgba(215, 147, 63,.3)">
                        <Text style={styles.centerNav}>
                            Turn off ads
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight  style={styles.roundedBtn} onPress={ () => this._navigate('Donate') } underlayColor="rgba(215, 147, 63,.3)">
                        <Text style={styles.centerNav}>
                            Donate
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.roundedBtn} onPress={ () => this._navigate('Records') } underlayColor="rgba(215, 147, 63,.3)">
                        <Text style={styles.centerNav}>
                            Records
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.roundedBtn} onPress={ () => this._navigate('About') } underlayColor="rgba(215, 147, 63,.3)">
                        <Text style={styles.centerNav}>
                            About
                        </Text>
                    </TouchableHighlight>

                </View>
            </BackgroundImage>
        )
    }
}
const styles = StyleSheet.create({
    top: {
        bottom: 75
    },

    title: {
        color:'#810000',
        fontSize: 58,
        fontWeight: "700",
        fontFamily: 'Roboto'
    },
    container: {
        backgroundColor: '#810000',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        top: 50
    },
    centerNav: {
        fontSize: 22,
        marginBottom: 5,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color:'#810000',
        textAlign: 'center',
        paddingTop: 7,
        paddingBottom: 7
    },

    roundedBtn: {
        width: 200,
        backgroundColor: '#d7933f',
        borderRadius: 50,
        marginBottom: 15

    }
});
