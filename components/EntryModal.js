import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
} from 'react-native'

export default function EntryModal(props) {
  return (
    <Modal
      animationType="slide"
      presentationStyle={"pageSheet"}
      transparent={false}
      visible={props.visible}
      onRequestClose={props.onClose}
    >
      <View style={styles.modalView} >
        <TextInput
          style={styles.input}
          onChangeText={props.setName}
          value={props.name}
          placeholder={"Worry name"}
          autoFocus={true}
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.input}
          onChangeText={props.setText}
          value={props.text}
          placeholder={"White a little about your worry"}
          multiline={true}
        />
        {props.children}
        <View style={{ flexDirection:"row" }}>
          <Button
            title="Cancel"
            onPress={props.onClose}
          />
          <Button
            title="Save" disabled={false}
            onPress={props.onSubmit}
          />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalView: {
    margin: 30,
    flex: 1,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
  },
  input: {
    width: '100%',
    marginVertical: 30,
  },
  divider: {
    width: '100%',
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});