import * as React from 'react';
import {View, Text, Button} from 'react-native';

function Reservations({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Reservations!</Text>
      <Button
        title="Go to reservation"
        onPress={() => navigation.navigate('Video')}
      />
    </View>
  );
}

export default Reservations;
