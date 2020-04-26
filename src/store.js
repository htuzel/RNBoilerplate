import appStore from './stores/appStore';

class Store {
  constructor() {
    this.appStore = new appStore(this);
  }
}

const store = new Store();
export default store;