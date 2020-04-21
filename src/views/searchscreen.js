import * as React from 'react';
import {View, Text, Button} from 'react-native';
import BoxCenter from '../components/boxcenter';
import {Bookmark} from '../components/icons';
import styled from 'styled-components/native';


const Aaa = styled(Bookmark)`
  color: red;
`;

function SearchScreen({navigation}) {
  return (
    <BoxCenter>
      <Text>Search screen</Text>
      <Button
        title="Search By Date"
        onPress={() => navigation.navigate('SearchByDate')}
      />
      <Button
        title="Search By Screen"
        onPress={() => navigation.navigate('SearchByTutor')}
      />
      <Aaa></Aaa>
    </BoxCenter>
  );
}

export default SearchScreen;
