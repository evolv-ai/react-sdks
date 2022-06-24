require('@testing-library/jest-dom/extend-expect');

jest.mock('@evolv/javascript-sdk', () => {
  return class MockEvolvSdk {
    config = null;
    constructor(config) {
      this.config = config;
    }
    initialized = false;
    initializedUserId = null;
    initializedId = null
    initialize = (userId, id) => {
      this.initialized = true;
      this.initializedUserId = userId;
      this.initializedId = id;
    }
    keyListeners = {}
    get = jest.fn((key) => {
      return {
        listen: (callback) => {
          if(!this.keyListeners[key]) {
            this.keyListeners[key] = [];
          }
          this.keyListeners[key].push(callback);
        }
      }
    })
    callListeners = (key, value) => {
      if(this.keyListeners[key]) {
        this.keyListeners[key].forEach(callback => callback(value));
      }
    }

    emit = jest.fn();
  }
})