import React from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import ProfilScreen from './Screens/ProfilScreen';
export default class App extends React.Component {
  render(){
    return(
      <AppContainer/>
    );
  }
}
const RootStack=createStackNavigator(
  {
    Home:HomeScreen,
    Details:ProfilScreen,
  },
  {
    initialRouteName:'Home'
  }
);
const AppContainer=createAppContainer(RootStack);
