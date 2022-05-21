import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Test extends Component {
  render() {
      const {postId, otherParam}=this.props.route.params;
    return (
        <View style={StyleSheet.container}>
            <View style={{flexDirection:'column',padding:'5%'}}>
                <Text>this page is from screen 1</Text>
                <Text> post id is : {postId}</Text>
                <Text> parameter passed from screen 1 is :{otherParam}</Text>

                <Text style={styles.txt1}>
                onPress{() =>this.props.navigation.navigate('Success')}
                
                
                Testing

                </Text>
            </View>
        </View>

    );
};
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    txt1:{
        textAlign:'center',
       
    }   
})