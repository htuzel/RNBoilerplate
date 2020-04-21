import * as React from 'react';
import {View, Text, Button} from 'react-native';


function SearchScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search screen</Text>
      <Button
        title="Search By Date"
        onPress={() => navigation.navigate('SearchByDate')}
      />
      <Button
        title="Search By Screen"
        onPress={() => navigation.navigate('SearchByTutor')}
      />
    </View>
  );
}

export default SearchScreen;
