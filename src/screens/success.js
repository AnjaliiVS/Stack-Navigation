import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Success extends Component {
  render() {
      const {postId, otherParam}=this.props.route.params;
    return (
        <View style={{flex:1}}>
            <View style={{backgroundColor:"white",height:'6%',width:'80%',borderRadius:8,top:'25%'}}>
                <Text style={styles.textt}>
               
                
                
                Testing

                </Text>
            </View>
        </View>

    );
};
}

const styles=StyleSheet.create({
   
    textt:{
        
        top:'25%',
        alignSelf:'center',
        fontSize:16,
        fontWeight:'bold',
        color:"white"
    }   
})