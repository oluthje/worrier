import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import ActionButton from 'react-native-action-button'
import AddEntryModal from '../AddEntryModal.js'
import EditEntryModal from '../EditEntryModal.js'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function WorryTab(props) {
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [entryProps, setEntryProps] = useState({})
  const commonProps = props.commonProps

  const handleEditEntry = (item) => {
    setEntryProps(item)
    setShowEditModal(true)
  }

  const renderEntry = ({ item, index }) => {
    const date = new Date(item.date)
    const dateString = monthNames[date.getMonth()] + " " + date.getDay()

    return (
      <TouchableOpacity
        style={styles.entry}
        onPress={() => handleEditEntry(item)}
      >
        <View style={{ justifyContent: 'space-between', flexDirection:"row" }} >
          <Text style={{ marginBottom: 5, fontWeight: 'bold' }} >{item.name}</Text>
          <Text>{dateString}</Text>
        </View>
        <Text>{item.text}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.entryContainer} >
        <FlatList
          data={commonProps.entries}
          renderItem={renderEntry}
        />
      </SafeAreaView>
      <AddEntryModal
        onClose={() => setShowAddModal(false)}
        visible={showAddModal}
        onSubmit={props.commonProps.onAddEntry}
      />
      <EditEntryModal
        onClose={() => setShowEditModal(false)}
        visible={showEditModal}
        onSubmit={props.commonProps.onEditEntry}
        onRemoveEntry={props.commonProps.onRemoveEntry}
        entry={entryProps}
      />
      <ActionButton
        buttonColor="rgba(231,76,60,1)"
        onPress={() => setShowAddModal(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  entryContainer: {
    margin: 20,
    height: '100%'
  },
  entry: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  }
});