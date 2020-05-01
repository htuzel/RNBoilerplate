import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchByDate from './searchbydate';
import Profile from './profile';
import SearchByTutor from './searchbydate';

const AccountStack = createStackNavigator();

function ProfileStack() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Profile Screen" component={Profile} />
      <AccountStack.Screen name="SearchByTutor" component={SearchByTutor} />
      <AccountStack.Screen name="SearchByDate" component={SearchByDate} />
    </AccountStack.Navigator>
  );
}

export default ProfileStack;
