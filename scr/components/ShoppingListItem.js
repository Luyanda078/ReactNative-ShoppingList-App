import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ShoppingListItem = ({ list, onPress, onDelete }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress(list.id)} style={styles.textContainer}>
        <Text style={styles.text}>{list.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(list.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  deleteText: {
    color: "#fff",
  },
});

export default ShoppingListItem;
