import 'raf/polyfill'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('aphrodite/lib/inject');

const localStorageMock = (() => {
  let store = {};
  return {
    getItem: function(key) {
      return store[key];
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key) {
      delete store[key];
    }
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

configure({ adapter: new Adapter() });