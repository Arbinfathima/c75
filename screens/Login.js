import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView
} from "react-native";


const bgImage = require("../assets/background1.png");
const appIcon = require("../assets/appIcon.png");
const appName = require("../assets/appName.png");

export default class LoginScreen extends React.Component{
  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ImageBackground source={bgImg} style={styles.bgImg}>
      <View style={styles.upperContainer}>
      <Image source={appIcon} style={styles.appIcon}/>
      <Image source={appName} style={styles.appName}/>
      </View>
      </ImageBackground>


      </KeyboardAvoidingView>
      
    )
  }
}








const styles = StyleSheet.create({
  loginBox:{
    width:300,
    height:40,
    borderWidth:1.5,
    fontSize:1.5,
    paddingLeft:10
  }


})