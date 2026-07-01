/** 

// LEGACY REDUXconst ADD_ITEM = 'cart/ADD_ITEM';const REMOVE_ITEM = 'cart/REMOVE_ITEM';
export const addItem = (item) => ({ type: ADD_ITEM, payload: item });export const removeItem = (id) => ({ type: REMOVE_ITEM, payload: id });
const initialState = { items: [], totalAmount: 0 };
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        totalAmount: state.totalAmount + action.payload.price,
      };
    case REMOVE_ITEM:
      const itemToRemove = state.items.find(item => item.id === action.payload);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        totalAmount: state.totalAmount - (itemToRemove ? itemToRemove.price : 0),
      };
    default:
      return state;
  }
}



*/

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
      state.totalAmount += action.payload.price;
    },

    removeItem(state, action) {
      const id = action.payload;

      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) return;

      state.items = state.items.filter((item) => item.id !== id);
      state.totalAmount -= existingItem.price;
    },
  },

  extraReducers: (builder) => {
    builder.addCase();
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
