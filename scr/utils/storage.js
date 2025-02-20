import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadShoppingLists = async () => {
  try {
    const lists = await AsyncStorage.getItem("shoppingLists");
    return lists ? JSON.parse(lists) : [];
  } catch (error) {
    console.error("Error loading data", error);
    return [];
  }
};
