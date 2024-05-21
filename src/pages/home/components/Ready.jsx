import React from 'react'
import { useTranslation } from 'react-i18next'
import DocTR from './doc/tr'
import DocEN from './doc/en'
import DocDE from './doc/de'
import DocRU from './doc/ru'

export default function Ready() {
  const { i18n } = useTranslation()

  if (i18n.language === 'en') return <DocEN />
  if (i18n.language === 'tr') return <DocTR />
  if (i18n.language === 'de') return <DocDE />
  if (i18n.language === 'ru') return <DocRU />
}
