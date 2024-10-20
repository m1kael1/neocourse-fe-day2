import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const authUserAtom = atomWithStorage('user',
  localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
)
const searchBookAtom = atom('')

export { authUserAtom, searchBookAtom }