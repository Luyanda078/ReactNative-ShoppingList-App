import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  lists: [], // [{ id, name, items: [{ id, name, quantity, purchased }] }]
};

const shoppingListsSlice = createSlice({
  name: "shoppingLists",
  initialState,
  reducers: {
    addList: (state, action) => {
      const newList = { id: Date.now().toString(), name: action.payload, items: [] };
      state.lists.push(newList);
      saveToStorage(state.lists);
    },
    deleteList: (state, action) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload);
      saveToStorage(state.lists);
    },
    addItem: (state, action) => {
      const { listId, item } = action.payload;
      const list = state.lists.find((l) => l.id === listId);
      if (list) {
        list.items.push({ id: Date.now().toString(), ...item });
        saveToStorage(state.lists);
      }
    },
    editItem: (state, action) => {
      const { listId, itemId, updatedItem } = action.payload;
      const list = state.lists.find((l) => l.id === listId);
      if (list) {
        const itemIndex = list.items.findIndex((item) => item.id === itemId);
        if (itemIndex !== -1) {
          list.items[itemIndex] = { ...list.items[itemIndex], ...updatedItem };
          saveToStorage(state.lists);
        }
      }
    },
    deleteItem: (state, action) => {
      const { listId, itemId } = action.payload;
      const list = state.lists.find((l) => l.id === listId);
      if (list) {
        list.items = list.items.filter((item) => item.id !== itemId);
        saveToStorage(state.lists);
      }
    },
    setLists: (state, action) => {
      state.lists = action.payload;
    },
  },
});

const saveToStorage = async (lists) => {
  try {
    await AsyncStorage.setItem("shoppingLists", JSON.stringify(lists));
  } catch (error) {
    console.error("Error saving data", error);
  }
};

export const { addList, deleteList, addItem, editItem, deleteItem, setLists } = shoppingListsSlice.actions;
export default shoppingListsSlice.reducer;
