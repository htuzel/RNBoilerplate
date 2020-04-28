import 'react-native-gesture-handler';
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'mobx-react';
import store from './stores/appStore';
import * as eva from '@eva-design/eva';
import {default as theme} from './theme.json';
import {
  ApplicationProvider,
  IconRegistry
} from '@ui-kitten/components';
import Navigation from './views/navigation';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <Navigation></Navigation>
      </ApplicationProvider>
    </Provider>
  );
}

export default App;
