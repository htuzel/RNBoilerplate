import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchByDate from './searchbydate';
import SearchScreen from './searchscreen';
import SearchByTutor from './searchbydate';

const SearchStack = createStackNavigator();

function Search() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Make Reservation" component={SearchScreen} />
      <SearchStack.Screen name="Search By Tutor" component={SearchByTutor} />
      <SearchStack.Screen name="Search By Date" component={SearchByDate} />
    </SearchStack.Navigator>
  );
}

export default Search;
