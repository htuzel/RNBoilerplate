import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {inject, observer} from 'mobx-react';
import {store} from '../store';

@inject('store')
@observer
class Reservations extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Reservations!</Text>
        <Button
          title="Go to reservation"
          onPress={() => this.props.navigation.navigate('Video')}
        />
      </View>
    );
  }
}

export default Reservations;
