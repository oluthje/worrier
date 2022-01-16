import React, { useState } from 'react'
import {
  StyleSheet,
} from 'react-native'
import EntryModal from './EntryModal.js'

export default function AddEntryModal(props) {
  const [name, setName] = useState("")
  const [text, setText] = useState(0)

  const handleSubmit = () => {
    if (name !== "") {
      props.onSubmit(name, text)
      props.onClose()
      setName("")
      setText("")
    }
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
    />
  )
}

const styles = StyleSheet.create({

});