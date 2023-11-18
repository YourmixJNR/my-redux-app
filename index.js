const redux  = require('redux');
const createStore = redux.createStore;

const combineReducers = redux.combineReducers;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const buyCake = () => {
    return {
        type: BUY_CAKE
    }
};

const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    }
};


const initialCakeState = {
    numOfCakes: 10
};
const initialIcreamState = {
    numOfIceCreams: 10
};

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };
        default:
            return state; // Add a default case to handle other actions
    }
};

const iceCreamReducer = (state = initialIcreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            };
        default:
            return state; // Add a default case to handle other actions
    }
};


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});



const store = createStore(rootReducer);

console.log('InitialState', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe()
