import mobx, {observable, action} from 'mobx';

class Store {
  @observable isAuthenticated = null;

  constructor() {
    this.isAuthenticated = false;
  }

  @action setAuthUser = authUser => {
    this.authUser = authUser;
  };
}

const store = new Store();

export default store;
