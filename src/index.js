import store from  './customeStore'
import * as action from './actions';


store.subscribe(() => {
    console.log("state changed");
})
store.dispatch(action.bugAdded('Learn about actions'));


console.log(store.getState());
store.dispatch(action.bugAdded('Learn about actions'));