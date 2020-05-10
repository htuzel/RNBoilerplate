import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchStack from './searchstack';
import Register from './register';
import Login from './login';
import ReservationStack from './reservationstack';
import MyTabBar from '../components/tab-bar';
import ProfileStack from './profilestack';
import store from '../stores/appStore';
import {inject, observer} from 'mobx-react';
import {View, Text} from 'react-native';


const Tab = createBottomTabNavigator();

@inject('store')
@observer
class Navigation extends React.Component {

  UNSAFE_componentWillMount() {
    this.props.store.initApp();
  }

  render() {
    return (
      <NavigationContainer>
        {store.isAuthenticated ? (
          <Tab.Navigator
            initialRouteName="Search"
            tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="Reservations" component={ReservationStack} />
            <Tab.Screen name="Search" component={SearchStack} />
            <Tab.Screen name="Profile" component={ProfileStack} />
          </Tab.Navigator>
        ) : (
          <Tab.Navigator>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

export default Navigation;
