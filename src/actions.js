// Actions.

export function updateTitle(text) {
  return {
    type: 'UPDATE_TITLE',
    title: text
  }
}

export function updateHeaderTitle(date) {
  return {
    type: 'UPDATE_TITLE',
    date: date
  }
}
