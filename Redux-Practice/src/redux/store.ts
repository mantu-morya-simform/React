import { legacy_createStore as createStore } from "redux";

const initialState = {
  count: 1,
};

function reducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
