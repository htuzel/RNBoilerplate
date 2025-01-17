import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchByDate from './searchbydate';
import Profile from './profile';
import PersonalInfo from './personalInfo';
import SearchByTutor from './searchbydate';
import ClassPreferences from './classPreferences';

const AccountStack = createStackNavigator();

function ProfileStack() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Profile Screen" component={Profile} />
      <AccountStack.Screen name="Personal Info" component={PersonalInfo} />
      <AccountStack.Screen
        name="Class Preferences"
        component={ClassPreferences}
      />
    </AccountStack.Navigator>
  );
}

export default ProfileStack;
