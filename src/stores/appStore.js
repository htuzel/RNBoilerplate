import mobx, {observable, action} from 'mobx';

class Store {
  @observable isAuthenticated = null;

  constructor() {
    this.isAuthenticated = false;
    this.apiToken = '';
  }

  @action setAuthUser = () => {
    this.isAuthenticated = true;
  };

  @action setApiToken = apiToken => {
    this.apiToken = apiToken;
  };
}

const store = new Store();

export default store;
