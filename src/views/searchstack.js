import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchByDate from './searchbydate';
import SearchScreen from './searchscreen';
import SearchByTutor from './searchbydate';

const SearchStack = createStackNavigator();

function Search() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="searchScreen" component={SearchScreen} />
      <SearchStack.Screen name="SearchByTutor" component={SearchByTutor} />
      <SearchStack.Screen name="SearchByDate" component={SearchByDate} />
    </SearchStack.Navigator>
  );
}

export default Search;
