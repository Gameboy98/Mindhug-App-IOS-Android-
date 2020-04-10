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
  AsyncStorage,Alert,
  TouchableHighlight
} from 'react-native';

import {Header, Title, Body} from 'native-base';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello:"hello",
      blogs_data:[{"tittle":"Mindhug in the time of COVID-19","auther":"Chitraj Singh","time":"4","date":"Mar 18","claps":"105","link":"https://medium.com/mymindhug/mindhug-in-the-time-of-covid-19-8aa2ea0c2cee","image":"https://miro.medium.com/max/500/1*AmvM2vZl13CUIh6rBGNmAg.jpeg"},
                  {"tittle":"How Data Science might just be the much-needed breath of fresh air in the Mental Wellbeing space.","auther":"Manmeet Sethi","time":"4","date":"Mar 11","claps":"108","link":"https://medium.com/mymindhug/how-data-science-might-just-be-the-much-needed-breath-of-fresh-air-in-the-mental-wellbeing-space-d833b6b702ec","image":""},
                  {"tittle":"Depression — One size does not fit all","auther":"Thaddeus Cheung","time":"6","date":"Jan 30","claps":"9","link":"https://medium.com/mymindhug/depression-one-size-does-not-fit-all-86605f53048c","image":"https://miro.medium.com/max/1400/1*TgsDUmYwx4mC06y5rHTW0w.jpeg"}]
    };
  }

  async componentDidMount() {this.fetchData();}

  async fetchData() {}

  render() {
    return (
      <View style={styles.Container}>
        <FlatList
          style={{height:"100%"}}
          horizontal={false}
          data={this.state.blogs_data}
          renderItem={({item}) =>  
            <TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate("Blog")}>
              <View style={{flexDirection:"row", justifyContent: 'center', width:"90%",}}><Image style={{height:22, width:22, borderRadius:11, margin:10}} source={require('../assets/profile.jpg')}/><Text style={{margin:10,fontSize:16, fontWeight:"bold",fontStyle: 'italic'}}>{item.auther}</Text></View>
              <Image
                  resizeMode="cover"
                  style={{alignSelf:"center", height:150, width:"90%", borderRadius:5,borderColor:"#d3d3d3",borderWidth:0.5}}
                  source={{uri: item.image}}/>
              <Text style={{alignSelf:"center", width:"90%", margin:10,fontWeight:"bold",fontSize:14}}>{item.tittle}</Text>
              <Text style={{alignSelf:"center", width:"90%",fontSize:14,fontStyle: 'italic'}}>{item.date}</Text>
              <Text style={{alignSelf:"center", width:"90%",marginBottom:10, fontSize:14, fontStyle: 'italic'}}>{item.time} min read (Read More)</Text>
            </TouchableOpacity>
          }
          keyExtractor={(item, index) => index.toString()}/>   
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
  header:{
    width: "100%",
    backgroundColor:"#98D9B7",
    alignSelf:"center",
    flexDirection:"column",
  },
  box:{
    width:"94%",
    alignSelf:"center",
    backgroundColor:"#fff",
    marginTop:10,
    borderRadius:5,
    shadowOffset:{height:1, width:1},
    shadowOpacity:0.5,
  }
});
        // <Header style={styles.header}><Text style={{alignSelf:"center",fontSize:20,color:"#fff"}}>MindHug®</Text></Header>
