import appStore from './stores/appStore';

class Store {
  constructor() {
    this.store = new appStore();
  }
}

export default Store;