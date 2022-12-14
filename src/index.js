// import store from '../bugs-frontend/src/store/store';
// import {addBug, bugAdded, loadBugs, resolveBug, assignUser} from '../bugs-frontend/src/store/bugs'
// import {bugAdded, bugResolved , bugRemoved, getUnResolvedBugs} from './store/bugs';
// import { projectAdded } from './store/project';
// import { bugAssigned } from './store/member';
// import { getAssignedMember } from './store/member';
// const unsubscribe = store.subscribe(()=>
// {
//     console.log("Store changed=>" , store.getState())
// })
// store.dispatch(bugAdded({description : "Bug_1"}));
// store.dispatch(bugAdded({description : "Bug_2"}));
// store.dispatch(bugAdded({description : "Bug_3"}));
// store.dispatch(bugAdded({description : "Bug_4"}));

// store.dispatch(bugResolved({id : 1}));

// store.dispatch(bugRemoved({id : 1}));

// store.dispatch(projectAdded({project : "test project"}))

// store.dispatch(bugAssigned({bugId : 1 , memberId : 1}))
// store.dispatch(bugAssigned({bugId : 2 , memberId : 1}))
// store.dispatch(bugAssigned({bugId : 3 , memberId : 4}))
// const unResolvedBugs = getUnResolvedBugs(store.getState())

// console.log(unResolvedBugs)
// console.log(getAssignedMember(1)(store.getState()))
// console.log(store.getState())

// import { configureStore} from "@reduxjs/toolkit";
// const store = configureStore();

// store.dispatch((dispatch , getState)=>{
//     dispatch({type : "bugs",bugs : [1,2,3]} )
//     console.log(getState())
// })

// store.dispatch({
//     type : "error", 
//     payload : {message: "An error occured"}
// })

store.dispatch(loadBugs())

// setTimeout(()=>{loadBugs()}, 2000)

// store.dispatch(addBug({description : 'h3ll0'}))
setTimeout(()=>{store.dispatch(resolveBug( 1))}, 2000)

setTimeout(() => {
    store.dispatch(assignUser(1, "user1"))
}, 4000);
