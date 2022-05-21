import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={{flex: 1, width: '100%', heighy: '100%'}}>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              height: '10%',
              width: '50%',
            }}></View>
          <View
            style={{
              height: '30%',
              width: '80%',
              borderRadius: 8,
              justifyContent: 'center',
              alignSelf: 'center',
              backgroundColor: 'green',
            }}>
            <Text
              onPress={() => {
                this.props.navigation.navigate('Test', {
                  postId: 1000,
                  otherParam: 'pass whatever you want here',
                });
              }}
              style={{
                alignSelf: 'center',
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Login
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
