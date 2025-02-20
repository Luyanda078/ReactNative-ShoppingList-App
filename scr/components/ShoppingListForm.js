import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const ShoppingListForm = ({ onSubmit, initialValue = "" }) => {
  const [listName, setListName] = useState(initialValue);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter list name"
        value={listName}
        onChangeText={setListName}
        style={styles.input}
      />
      <Button title="Save" onPress={() => { onSubmit(listName); setListName(""); }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    padding: 8,
    marginBottom: 10,
  },
});

export default ShoppingListForm;
