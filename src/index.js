import store from './store/store';
import * as actions from './store/project';
const unsubscribe = store.subscribe(()=>
{
    console.log("Store changed=>" , store.getState())
})
// store.dispatch(actions.bugAdded({description : "Bug_1"}));

// store.dispatch(actions.bugResolved({id : 1}));

// store.dispatch(actions.bugRemoved({id : 1}));

store.dispatch(actions.projectAdded({project : "test project"}))

console.log(store.getState())