import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Reservations from './reservations';
import Video from './video';

const ReservarionStack = createStackNavigator();

function Search() {
  return (
    <ReservarionStack.Navigator>
      <ReservarionStack.Screen
        name="Future Reservations"
        component={Reservations}
      />
      <ReservarionStack.Screen name="Video" component={Video} />
    </ReservarionStack.Navigator>
  );
}

export default Search;
