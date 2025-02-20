import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadFromStorage } from './slices/shoppingListsSlice';
import ShoppingListNavigator from './navigation/ShoppingListNavigator';

const LoadData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('shoppingLists');
        if (storedData) {
          dispatch(loadFromStorage(JSON.parse(storedData)));
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  return null;
};

export default function App() {
  return (
    <Provider store={store}>
      <LoadData />
      <ShoppingListNavigator />
    </Provider>
  );
}
