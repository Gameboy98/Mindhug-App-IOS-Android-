import * as React from 'react';
import { Component } from "react";
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
  TextInput,
  AppRegistry,
  AsyncStorage,Alert,
  Dimensions, StatusBar,
} from 'react-native';

import Modal from 'react-native-modal';
import {Header, Title, Body} from 'native-base';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

export default class BookingsScreen extends React.Component {
  state = {
    visibleModal: null,
    index: 0,
    routes: [
      { key: 'first', title: 'Past Events' },
      { key: 'second', title: 'Live Events' },
    ],
    pasts_data:[{"tittle":"Mindhug memories","time":"5:30 pm","date":"Feb 21, Fri","hash":"#Health","location":"UCL BaseKx, London","price":"FREE","image":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F91546221%2F408600323021%2F1%2Foriginal.20200208-185505?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C21%2C4368%2C2184&s=fd524e24f6b3caff89585216dd36dab2"},
                {"tittle":"Dealing with Coronavirus Anxiety","time":"2:00 pm","date":"Apr 1","hash":"#Health #Seminar","location":"","price":"FREE","image":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F97668092%2F408600323021%2F1%2Foriginal.20200330-220900?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C652%2C866%2C433&s=0812223d0452104b32f720bce4eade9e"}],
    live_data:[{"tittle":"Depression — One size does not fit all","time":"6:00 pm","date":"April 12","hash":"#Depression","location":"","price":"","image":"data:image/png;base64,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"}],
  };

  componentDidMount() {this.fetchData();}

  async fetchData() {}

  modal(){
    return(
      <Modal isVisible={this.state.visibleModal === 1}>
          <View style={styles.modalContent}>
          <TextInput placeholder="Full Name" style={{height:40, backgroundColor:"#fff",borderRadius:5, width:"90%", justifyContent:"center", margin:5, alignSelf:"center"}}  returnKeyType="done" keyboardType="email-address"/>
          <TextInput placeholder="Mobile Number" style={{height:40, backgroundColor:"#fff",borderRadius:5, width:"90%", justifyContent:"center", margin:5, alignSelf:"center"}}  returnKeyType="done" keyboardType="numeric"/>
          <TextInput placeholder="E-mail" style={{height:40, backgroundColor:"#fff",borderRadius:5, width:"90%", justifyContent:"center", margin:5, alignSelf:"center"}}  returnKeyType="done" keyboardType="email-address"/>
          <TouchableOpacity onPress={() => this.setState({ visibleModal: null })} style={{height:40, backgroundColor:"#4CDAE4",borderRadius:5, width:"90%", justifyContent:"center", margin:5}}><Text style={{color:"#fff", alignSelf:"center"}}>Register</Text></TouchableOpacity>
          </View>
        </Modal>
      );
  }

  render() {
    const FirstRoute = () => (
      <View style={[styles.scene, { backgroundColor: '#98D9B7' }]}>
        <FlatList
          style={{height:"100%"}}
          horizontal={false}
          data={this.state.pasts_data}
          renderItem={({item}) =>  
            <View style={styles.box}>
              <Image
                  resizeMode="cover"
                  style={{alignSelf:"center",marginTop:10, height:150, width:"90%", borderRadius:5,borderColor:"#d3d3d3",borderWidth:0.5}}
                  source={{uri: item.image}}/>
              <Text style={{alignSelf:"center", width:"90%", margin:10,fontWeight:"bold",fontSize:14}}>{item.tittle}</Text>
              <Text style={{alignSelf:"center", width:"90%",fontSize:14,fontStyle: 'italic'}}>{item.date}</Text>
              <Text style={{alignSelf:"center", width:"90%", fontSize:14, fontStyle: 'italic'}}>{item.time}</Text>
              <Text style={{alignSelf:"center", width:"90%",marginBottom:5, fontSize:14, fontStyle: 'italic'}}>{item.hash}</Text>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}/>      
      </View>
  );

  const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#fff',}]}>
      {this.modal()}
      <FlatList
          style={{height:"100%"}}
          horizontal={false}
          data={this.state.live_data}
          renderItem={({item}) =>  
            <View style={styles.box}>
              <Image
                  resizeMode="cover"
                  style={{alignSelf:"center",marginTop:10, height:150, width:"90%", borderRadius:5,borderColor:"#d3d3d3",borderWidth:0.5}}
                  source={{uri: item.image}}/>
              <Text style={{alignSelf:"center", width:"90%", margin:10,fontWeight:"bold",fontSize:14}}>{item.tittle}</Text>
              <Text style={{alignSelf:"center", width:"90%",fontSize:14,fontStyle: 'italic'}}>{item.date}</Text>
              <Text style={{alignSelf:"center", width:"90%",marginBottom:10, fontSize:14, fontStyle: 'italic'}}>{item.time}</Text>
              <TouchableOpacity style={{height:40, backgroundColor:"#4CDAE4", justifyContent:"center", margin:5}} onPress={() => this.setState({ visibleModal: 1 })}><Text style={{color:"#fff", alignSelf:"center"}}>Register Now</Text></TouchableOpacity>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}/>     
    </View>
  );
  
    return (

      <View style={styles.container}>
        <View style={{flex:1}}>
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              first: FirstRoute,
              second: SecondRoute,
            })}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get('window').width }}
            style={{ backgroundColor: '#d3d3d3',}}
            renderTabBar={(props) =>
                    <TabBar
                      {...props}
                      indicatorStyle={{ backgroundColor: '#fff' }}
                      style={{backgroundColor: "#98D9B7", height: 50,}}
                      indicatorStyle={{backgroundColor: "#fff"}}
                    />
                  }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    height:"100%",
  },
  box:{
    width:"94%",
    alignSelf:"center",
    backgroundColor:"#fff",
    marginTop:10,
    marginBottom:5,
    borderRadius:5,
    shadowOffset:{height:1, width:1},
    shadowOpacity:0.5,
    borderWidth:0.2,
  },
  modalContent: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center",
    width:"95%",
    borderRadius:10,
  },
});