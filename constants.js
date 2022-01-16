import uuid from 'react-native-uuid'

// data storage keys
export const ENTRIES_KEY = "entries"
export const TAGS_KEY = "tags"

// everyhing else

// object creation
export function Entry(name, date, tags, text) {
  this.name = name
  this.date = date
  this.tags = tags
  this.text = text
  this.id = uuid.v4()
}
export function Tag(name, color) {
  this.name = name
  this.color = intimacy
  this.id = uuid.v4()
}