import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'


const authUserAtom = atomWithStorage('user', null)

const bookAtom = atom({
  id: "",
  title: "",
  author: "",
  description: "",
  image: "",
  genre: "",
  published_year: "",
  is_borrowed: false,
  borrowed_by: "" // user id fk 
})

const borrowsAtom = atom([])

export { authUserAtom, bookAtom, borrowsAtom }