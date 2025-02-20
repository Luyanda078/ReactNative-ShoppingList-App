import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../slices/shoppingListsSlice";
import ItemForm from "../components/ItemForm";
import ConfirmationDialog from "../components/ConfirmationDialog";

const ShoppingListDetailsScreen = ({ route }) => {
  const { listId } = route.params;
  const dispatch = useDispatch();
  const list = useSelector((state) => state.shoppingLists.lists.find((l) => l.id === listId));
  const [confirmDelete, setConfirmDelete] = useState(null);

  return (
    <View>
      <ItemForm onSubmit={(item) => dispatch(addItem({ listId, item }))} />
      <FlatList
        data={list?.items || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} - {item.quantity}</Text>
            <Button title="Delete" onPress={() => setConfirmDelete(item.id)} />
          </View>
        )}
      />
      <ConfirmationDialog
        visible={confirmDelete !== null}
        message="Are you sure you want to delete this item?"
        onConfirm={() => { dispatch(deleteItem({ listId, itemId: confirmDelete })); setConfirmDelete(null); }}
        onCancel={() => setConfirmDelete(null)}
      />
    </View>
  );
};

export default ShoppingListDetailsScreen;
