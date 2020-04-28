import mobx, {observable, action} from 'mobx';

class Store {
  @observable isAuthenticated = null;

  constructor() {
    this.isAuthenticated = false;
    this.apiToken = '';
    this.isLoading = false;
  }

  @action setAuthUser = () => {
    this.isAuthenticated = true;
  };

  @action setLoading = status => {
    this.isLoading = status;
  };

  @action setApiToken = apiToken => {
    this.apiToken = apiToken;
  };
}

const store = new Store();

export default store;
