import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Button,
} from 'react-native'
import EntryModal from './EntryModal.js'

export default function AddEntryModal(props) {
  const [name, setName] = useState("")
  const [text, setText] = useState("")
  const entry = props.entry

  useEffect(() => {
    setName(entry.name)
    setText(entry.text)
  }, [entry])

  const handleSubmit = () => {
    if (name !== "") {
      props.onSubmit(name, text, entry.id)
      props.onClose()
      setName("")
      setText("")
    }
  }

  const handleDelete = () => {
    props.onRemoveEntry(entry)
    props.onClose()
    setName("")
    setText("")
  }

  return (
    <EntryModal
      name={name}
      setName={setName}
      text={text}
      setText={setText}
      onSubmit={handleSubmit}
      onClose={props.onClose}
      visible={props.visible}
    >
      <Button
        title="Delete"
        onPress={handleDelete}
      />
    </EntryModal>
  )
}

const styles = StyleSheet.create({

});