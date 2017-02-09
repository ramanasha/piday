import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Navigator,
  TouchableHighlight
} from 'react-native';

import Keypad from '../components/Keypad';

export default class Timed extends React.Component {
    constructor(props) {
        super(props);
        this.enterDigit = this.enterDigit.bind(this);
        this.formatTime = this.formatTime.bind(this);
        this.tick = this.tick.bind(this);
        this.startTime = this.startTime.bind(this);
        this.state = {
            display: '',
            digits: 0,
            pi: Math.PI.toString(),
            time: 60,
            gameOver: false
        }
    }
    onButtonPress() {
      Alert.alert('Button has been pressed!');
    };
    _navigate(route){
      this.props.navigator.push({
        name: route,
      })
    }
    enterDigit(value) {
       if(this.state.pi[this.state.digits] == value) {
           this.setState({
               display: this.state.display + value.toString(),
               digits: this.state.digits + 1
           });
       } else {
           this.setState({
               gameOver: true
           });
       }
   }
   startTime() {
       this.interval = setInterval(this.tick, 1000);
   }
   tick() {
       this.setState({time: this.state.time - 1});
       if (this.state.time <= 0) {
           clearInterval(this.interval);
       }
   }
   formatTime(time) {
        let minutes = Math.floor(time / 60);
        let seconds = time;
        if(seconds > 59) {
            seconds = '0'
        }
        if(minutes <= 0){
            minutes = '0';
        }
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#1976D2',
            }}

            >
                <View  style={{top: 5, left: 5}}>
                    <TouchableHighlight onPress={ () => this._navigate('Home') }>
                        <Text style={{color: 'white'}}>Back</Text>
                    </TouchableHighlight>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        marginTop: -100,
                        marginBottom: 50
                    }}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 24
                            }}
                            >
                            {this.formatTime(this.state.time)}
                        </Text>
                    </View >
                    <View style={{marginBottom: 50}} >
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 24
                            }}
                            >
                            PI: {this.state.display}
                        </Text>
                    </View>
                    <Keypad enterDigit={this.enterDigit} />
                    <View style={{marginTop: 20}} >
                        <TouchableHighlight onPress={ () => this.startTime() }>
                            <Text style={{color: 'white'}}>Start</Text>
                        </TouchableHighlight>
                    </View>
                </View>


            </View>
        )
    }
}
