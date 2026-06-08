import { createStore } from "redux";

const initialState = { count: 0 };
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_ONE":
      return { count: state.count + 1 };

    case "DECREMENT_ONE":
      return { count: state.count - 1 };

    case "INCREMENT_TEN":
      return { count: state.count + 10 };

    default:
      return state;
  }
};

export const store = createStore(countReducer);

/*
// if we have more then one reducer

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});


import { createStore } from "redux";
import rootReducer from "./rootReducer";
const store = createStore(rootReducer);

export default store;
*/
