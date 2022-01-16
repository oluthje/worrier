import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { saveObjs, getSavedObjs } from "./datastorage.js"
import WorryTab from "./components/tabs/WorryTab"
import StatsTab from "./components/tabs/StatsTab"
import * as Constants from "./constants.js"

const App = () => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    getSavedObjs(Constants.ENTRIES_KEY, setEntries)
  }, [])

  const handleAddEntry = (name, text) => {
    const date = new Date()
    var entry = new Constants.Entry(name, date.toString(), [], text)
    setEntries(entries => [...entries, entry])
    saveObjs(Constants.ENTRIES_KEY, [...entries, entry])
  }

  const handleEditEntry = (name, text, id) => {
    let newEntries = [...entries]

    for (index in entries) {
      if (entries[index].id == id) {
        newEntries[index].name = name
        newEntries[index].text = text
        break
      }
    }
    
    setEntries(newEntries)
    saveObjs(Constants.ENTRIES_KEY, newEntries)
  }

  const handleRemoveEntry = (entry) => {
    const newEntries = entries.filter(item => item.name !== entry.name)
    setEntries(newEntries)
    saveObjs(Constants.ENTRIES_KEY, newEntries)
  }

  return (
    <NavigationContainer>
      <Tabs
        commonProps={{
          entries: entries,
          onAddEntry: handleAddEntry,
          onEditEntry: handleEditEntry,
          onRemoveEntry: handleRemoveEntry,
        }}
      />
    </NavigationContainer>
  )
}

function Tabs({ commonProps }) {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator>
      <Tab.Screen name="Worries" children={props => <WorryTab commonProps={commonProps} {...props} />} />
      <Tab.Screen name="Stats" children={props => <StatsTab commonProps={commonProps} {...props} />} />
    </Tab.Navigator>
  )
}

export default App