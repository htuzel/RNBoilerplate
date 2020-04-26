import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Button from './button';
import CenterButton from './center-button';
import Box from './box';
import WhiteBox from './white-box';
import {Search, Bookmark, Settings} from './icons';

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === 'Search' ? (
          <WhiteBox key={label}>
            <CenterButton onPress={onPress}>
              <Search stroke="white"/>
            </CenterButton>
          </WhiteBox>

        ) : (
          <Button key={label} onPress={onPress} style={{marginTop: 8}}>
            {label === 'Reservations' ? <Bookmark stroke="#00a1e0"/> : <Settings stroke="#00a1e0"/>}
            {isFocused ? <Box /> : <></>}
          </Button>
        );
      })}
    </View>
  );
}

export default MyTabBar;
