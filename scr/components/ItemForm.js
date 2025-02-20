import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const ItemForm = ({ onSubmit, initialValues = { name: "", quantity: "" } }) => {
  const [name, setName] = useState(initialValues.name);
  const [quantity, setQuantity] = useState(initialValues.quantity);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Item Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Save Item" onPress={() => { onSubmit({ name, quantity }); setName(""); setQuantity(""); }} />
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

export default ItemForm;
