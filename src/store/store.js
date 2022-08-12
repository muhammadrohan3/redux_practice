import {createStore} from 'redux';
import reducer from './bugs';
import { devToolsEnhancer } from 'redux-devtools-extension';



const store = createStore(
    reducer /* preloadedState, */
     , devToolsEnhancer({trace : true})
  );

export default store; 