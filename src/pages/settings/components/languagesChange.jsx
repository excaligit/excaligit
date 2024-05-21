import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { IoLanguage } from 'react-icons/io5'
import { useLanguage } from '../../../../zustand/settings'
import ButtonA from '../../../components/buttons/ButtonA'
import { VscPassFilled, VscPass } from 'react-icons/vsc'

export default function LanguagesChange() {
  const { setLanguages } = useLanguage()
  const { i18n } = useTranslation()

  const language = localStorage.getItem('language')

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setLanguages(lng)
  }

  return (
    <section className='p-4 flex flex-col gap-1 leading-5 text-set4Text'>
      <div className='text-lg flex gap-1 items-center font-semibold text-white'>
        <IoLanguage size={24} />
        <Trans>Dil Ayarları</Trans>
      </div>
      <div className='text-sm'>
        <Trans>Dil seçimi</Trans>
      </div>
      <ButtonA onClick={() => changeLanguage('en')} className='bg-set6Back mt-2 p-2 rounded-md flex justify-between items-center border border-solid border-set2Border'>
        <div className='font-semibold flex items-center gap-2'>{language == 'en' ? <VscPassFilled /> : <VscPass />}English</div>
        <div>100%</div>
      </ButtonA>
      <ButtonA onClick={() => changeLanguage('tr')} className='bg-set6Back p-2 rounded-md flex justify-between items-center border border-solid border-set2Border'>
        <div className='font-semibold flex items-center gap-2'>{language == 'tr' ? <VscPassFilled /> : <VscPass />}Türkçe</div>
        <div>100%</div>
      </ButtonA>
      <ButtonA onClick={() => changeLanguage('de')} className='bg-set6Back p-2 rounded-md flex justify-between items-center border border-solid border-set2Border'>
        <div className='font-semibold flex items-center gap-2'>{language == 'de' ? <VscPassFilled /> : <VscPass />}Deutsch</div>
        <div>100%</div>
      </ButtonA>
      <ButtonA onClick={() => changeLanguage('ru')} className='bg-set6Back p-2 rounded-md flex justify-between items-center border border-solid border-set2Border'>
        <div className='font-semibold flex items-center gap-2'>{language == 'ru' ? <VscPassFilled /> : <VscPass />}Русский</div>
        <div>100%</div>
      </ButtonA>
    </section>
  )
}
