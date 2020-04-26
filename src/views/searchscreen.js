import * as React from 'react';
import {View, Text, Button} from 'react-native';
import BoxCenter from '../components/boxcenter';
import {Logo} from '../components/icons';
import styled from 'styled-components/native';
import { inject, observer } from 'mobx-react';


@inject('store')
@observer

class SearchScreen extends React.Component {
  render () {
    const { navigation } = this.props;
    const isAuthenticated = this.props.store.isAuthenticated;
    return (
      <BoxCenter>
        <Text>Search screen {isAuthenticated}</Text>
        <Button
          title="Search By Date"
          onPress={() => navigation.navigate('SearchByDate')}
        />
        <Button
          title="Search By Screen"
          onPress={() => navigation.navigate('SearchByTutor')}
        />
        <Logo/>
        <Text>sada</Text>
      </BoxCenter>
    );
  } 
}

export default SearchScreen;
