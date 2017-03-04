import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image
} from 'react-native';

export default class SettingsGear extends React.Component {
    render() {
        return(
            <TouchableHighlight style={styles.settings} onPress={ this.props.navigate }>
                <Image source={require('../images/settings.png')}/>
            </TouchableHighlight>
        )
    }
}


const styles = StyleSheet.create({
    settings: {
        position: 'absolute',
        top: 0,
        right: 0,
        opacity: 0.5,
        transform: [{scale: .7}]
    }
});
