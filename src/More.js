import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Item,
  Constants,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Card,
  AppRegistry,
  TextInput,
  AsyncStorage,Alert
} from 'react-native';

import {Header, Title, Body} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  async componentDidMount() {this.fetchData();}

  async fetchData() {}

  render() {
    return ( 
      <View style={styles.Container}>
        <TouchableOpacity style={{height:50, width:"100%", justifyContent: 'center', alignSelf:"center", marginTop:5, backgroundColor:"#fff", borderRadius:8}}><Text style={{fontSize:15, fontStyle: 'italic',marginLeft:"10%"}}>Partnerships </Text></TouchableOpacity>
        <TouchableOpacity style={{height:50, width:"100%", justifyContent: 'center', alignSelf:"center", marginTop:5, backgroundColor:"#fff", borderRadius:8}}><Text style={{fontSize:15, fontStyle: 'italic',marginLeft:"10%"}}>Therapists </Text></TouchableOpacity>
        <TouchableOpacity style={{height:50, width:"100%", justifyContent: 'center', alignSelf:"center", marginTop:5, backgroundColor:"#fff", borderRadius:8}}><Text style={{fontSize:15, fontStyle: 'italic',marginLeft:"10%"}}>Contact Us</Text></TouchableOpacity>
        <View style={{width:"95%",height:130,backgroundColor:"#fff", alignSelf:"center", borderRadius:10, marginTop:10}}>
          <Text style={{alignSelf:"center", width:"90%", marginTop:10,fontWeight:"bold",fontSize:14}}>Lets Keep in touch</Text>
          <TextInput placeholder="E-mail" style={{height:40, backgroundColor:"#fff",borderRadius:5, width:"90%", justifyContent:"center", marginTop:10, alignSelf:"center"}}  returnKeyType="done" keyboardType="email-address"/>
          <TouchableOpacity style={{height:40, backgroundColor:"#4CDAE4",borderRadius:5, width:"90%", justifyContent:"center", margin:5, alignSelf:"center"}}><Text style={{color:"#fff", alignSelf:"center"}}>Register</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:"#d3d3d3",
    height:"100%",
    width:"100%"
  },
});


