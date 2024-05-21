import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { useLanguage } from '../../zustand/settings'

export const LanguagesController = () => {
  const { setLanguages } = useLanguage()
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  useEffect(() => {
    if (!localStorage.getItem('language')) {
      const browserLang = navigator.language || navigator.userLanguage
      changeLanguage(browserLang.slice(0, 2))
      setLanguages(browserLang.slice(0, 2))
    } else {
      changeLanguage(localStorage.getItem('language'))
    }
  }, [])
}
