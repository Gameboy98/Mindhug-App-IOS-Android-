import React from 'react';
import { View, Text ,AsyncStorage, Image} from 'react-native';

export default class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    let isLogin =  await AsyncStorage.getItem("isLogIn");
    if(isLogin =="1"){
      this.props.navigation.navigate('Main');
    }else{
      this.props.navigation.navigate('Main');
    }
}
  render() {
    return (
      <View style={styles.viewStyles}>
        <Image
          style={{width: 205, height: 180,resizeMode:'cover'}}
          source={require('../assets/Logo.png')}/>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  textStyles: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold'
  }
}
