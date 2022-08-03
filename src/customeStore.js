import reducer from './reducer';

function createStore(reducer)
{
    let state;
    let listeners = [];

    function subscribe(listener)
    {
        listeners.push(listener);
    }
    function getState()
    {
        return state;
    }
    function dispatch(action)
    {
        //call the reducer to get the
        // new state based on the action
        state = reducer(state, action)
        for(let i = 0; i < listeners.length; i++)
        {
            listeners[i]();
        }

    }
    return {getState, dispatch, subscribe};
    
}

export default createStore(reducer);