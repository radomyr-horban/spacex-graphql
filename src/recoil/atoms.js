import { atom } from 'recoil'

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue))
    })
  }

export const favouriteToursState = atom({
  key: 'favouriteToursState',
  default: [],
  effects: [localStorageEffect('favourite_tours')],
})

export const currentPageState = atom({
  key: 'currentPageState',
  default: 'home',
})
