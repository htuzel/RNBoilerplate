import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchStack from './views/searchstack';
import Register from './views/register';
import Login from './views/login';
import ReservationStack from './views/reservationstack';
import MyTabBar from './components/tab-bar';
import Profile from './views/profile';
import {Provider} from 'mobx-react';
import store from './stores/appStore';
import {AppRegistry} from 'react-native';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={store}>
      {store.isAuthenticated ? (
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Search"
            tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="Reservations" component={ReservationStack} />
            <Tab.Screen name="Search" component={SearchStack} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </Provider>
  );
}
AppRegistry.registerComponent('app', () => App);

export default App;
