import store from './store/store';
import * as actions from './store/bugs';
const unsubscribe = store.subscribe(()=>
{
    console.log("Store changed=>" , store.getState())
})
store.dispatch(actions.bugAdded("Bug_1"));

store.dispatch(actions.bugResolved(1));

store.dispatch(actions.bugRemoved(1));



console.log(store.getState())