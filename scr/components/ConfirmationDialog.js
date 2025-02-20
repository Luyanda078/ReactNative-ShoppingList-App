import React from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native";

const ConfirmationDialog = ({ visible, message, onConfirm, onCancel }) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttons}>
            <Button title="Yes" onPress={onConfirm} />
            <Button title="No" onPress={onCancel} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default ConfirmationDialog;
