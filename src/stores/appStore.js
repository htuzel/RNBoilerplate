import mobx, {observable, action} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

class Store {
  @observable isAuthenticated = null;

  constructor() {
    this.isAuthenticated = false;
    this.apiToken = '';
    this.isLoading = false;
  }

  @action initApp = async () => {
    this.isAuthenticated = await AsyncStorage.getItem('@isAuthenticated');
    this.apiToken = await AsyncStorage.getItem('@apiToken');
  };

  @action setAuthUser = async () => {
    this.isAuthenticated = true;
    await AsyncStorage.setItem('@isAuthenticated', JSON.stringify(true));
  };

  @action setLoading = status => {
    this.isLoading = status;
  };

  @action setApiToken = async apiToken => {
    this.apiToken = apiToken;
    await AsyncStorage.setItem('@apiToken', JSON.stringify(apiToken));
  };
}

const store = new Store();

export default store;
