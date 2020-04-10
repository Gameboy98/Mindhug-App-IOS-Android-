import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './Home';
import EventsScreen from './Events';
import MoreScreen from './More';

const iconHome = require('../assets/tabbar/Home.png');
const iconEvents = require('../assets/tabbar/calendar.png');
const iconMore = require('../assets/tabbar/checklist.png');

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: "#ffffff",
    paddingHorizontal: 20,
  },
  tabBarIcon: {
    width: 23,
    height: 20,
  },
  tabBarIconFocused: {
    tintColor: "#98D9B7"
  },
  headerContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    resizeMode: 'cover',
  },
  headerCaption: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTintColor: '#4CDAE4',
      },
    },
    Events: {
      screen: EventsScreen,
      navigationOptions: {
        headerTintColor: '#4CDAE4',
      },
    },
    More: {
      screen: MoreScreen,
      navigationOptions: {
        headerTintColor: '#4CDAE4',
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Home':
            iconSource = iconHome;
            break;
          case 'Events':
            iconSource = iconEvents;
            break;
          case 'More':
            iconSource = iconMore;
            break;
          default:
            iconSource = iconHome;
        }
        return (
          <View style={styles.tabBarItemContainer}>
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
          </View>
        );
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor:'#4CDAE4',
      showLabel: false,
      style: {
        backgroundColor: "#fff",
        height:55,
        borderTopWidth: 4,
        borderTopColor: '#98D9B7',
      },
      labelStyle: {
        color: "#4CDAE4",
        fontSize:13,
        marginTop:-10,
      },
    },
  },
);
