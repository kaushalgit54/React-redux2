const redux = require('redux');

//THis is the Reducer for which the store data is being mutated
const counterReducer = (state = {counter: 0}, action)=>{
    if(action.type === 'increment'){
        return {
            counter: state.counter+1,
         };
    } 
    if(action.type === 'decrement'){
        return {
            counter: state.counter-1,
         };
    } 
};

//This is the Central store of the Redux application
const store = redux.createStore(counterReducer);
// console.log(store.getState());

//This is the subscribing component functions
const counterSubscriber = ()=>{
   const latestState = store.getState();
   console.log(latestState);
};

//Now the subscribing component functions is being subscribed by store.subscribe() function
store.subscribe(counterSubscriber);

//After subscribing the component function we need to dispatch an aciton 
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});

