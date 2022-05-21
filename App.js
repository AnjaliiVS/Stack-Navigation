import React,{Component} from "react";
import { View,Text } from "react-native";
import {NavigationContainer } from '@react-navigation/native';
import HomeStack from "./src/navigation/mainnav";

export default class App extends Component{
    render(){
        return (
            <NavigationContainer>
            <HomeStack/>
            </NavigationContainer>
        )
    }
}