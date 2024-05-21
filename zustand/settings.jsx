import { create } from 'zustand'

export const useLanguage = create((set) => ({
  languages: '',

  setLanguages: (data) => {
    set({
      languages: data,
    })
    localStorage.setItem('language', data)
  },
}))

export const useMenu = create((set) => ({
  menu: false,

  setMenu: (data) => {
    set({
      menu: data,
    })
  },
}))

export const useSearch = create((set) => ({
  search: '',

  setSearch: (data) => {
    set({
      search: data,
    })
  },
}))
