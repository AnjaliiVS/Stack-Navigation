import React,{Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/login';
import Test from '../screens/test';
import Success from '../screens/success';

const Stack= createStackNavigator();
export default class HomeStack extends Component{
    render(){
        return (
            <Stack.Navigator initialRouteName="Login" headerMode={false}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Test" component={Test}/>
                <Stack.Screen name="Success" component={Success}/>

            </Stack.Navigator>
        );
    };
}