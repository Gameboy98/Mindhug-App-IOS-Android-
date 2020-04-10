import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image,Platform, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import {createDrawerNavigator} from 'react-navigation-drawer'
const { width } = Dimensions.get('window');
                                                                                                
import SplashScreen from './src/Splash';
import MainTabNavigator from './src/MainTab';
import BlogScreen from './src/Blog';

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={styles.iconRow}>
        <TouchableOpacity
         style={styles.button}
         onPress={this.toggleDrawer.bind(this)}>
        <MaterialIconsIcon name="dehaze" style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const DrawerNavigatorE = createDrawerNavigator({
  Screen0: {
    screen: MainTabNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
});

const stackNavigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Main: {
      screen: MainTabNavigator,
      navigationOptions: (navigation) => ({
        title: 'MindHug®',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#98D9B7',
        },
        headerTintColor: '#fff',
      }),
    },
    Blog: {
      screen: BlogScreen,
      navigationOptions: () => ({
      }),
    },
  },
);


export default createAppContainer(stackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    width: 18,
    height: 25,
    marginBottom:10
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 0,
    marginBottom:5,
  },
  iconRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginTop: 15
  },
});
// green:"#98D9B7"
// blue:"#4CDAE4"