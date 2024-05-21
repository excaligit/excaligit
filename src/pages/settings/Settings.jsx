import React from 'react'
import { ContainInner, ContainMain } from '../../layout/Layout'
import { IoMdSettings } from 'react-icons/io'
import { Toaster } from 'sonner'
import { Trans } from 'react-i18next'
import CardB from '../../components/cards/CardB'
import LanguagesChange from './components/languagesChange'
import { FaHandsHelping, FaUserAstronaut } from 'react-icons/fa'
import { MdGTranslate } from 'react-icons/md'

export default function Settings() {
  return (
    <>
      <ContainMain>
        <ContainInner className='my-5 mx-5'>
          <div className='flex items-center gap-2 text-2xl font-semibold opacity-80'>
            <IoMdSettings size={30} />
            <Trans>Ayarlar</Trans>
          </div>
          <section className='grid grid-cols-2 max-sm:grid-cols-1 gap-3 mt-7'>
            <CardB>
              <LanguagesChange />
            </CardB>
            <CardB>
              <section className='p-4 flex flex-col gap-1 leading-5 text-set4Text'>
                <div className='text-lg flex gap-1 items-center font-semibold text-white'>
                  <FaHandsHelping size={24} />
                  <Trans>Çeviri Yardımı</Trans>
                </div>
                <section className='bg-set6Back mt-2 p-2 rounded-md flex items-center border border-solid border-set2Border'>
                  <Trans>
                    Çeviriye yardım etmek ve henüz yer almayan dilleri eklemek istiyorsan, {`/src/i18next.jsx`} dosyasında ve dökümantasyon için {`/pages/home/components/doc/`} klasörünün içlerinde çalışabilirsin. İsmin Yardım Edenler listesinde görünecek.
                  </Trans>
                </section>
                <div className='text-lg mt-5 flex gap-1 items-center font-semibold text-white'>
                  <FaUserAstronaut size={24} />
                  <Trans>Yardım Edenler</Trans>
                </div>
                <section className='bg-set6Back mt-2 p-2 rounded-md flex flex-col border border-solid border-set2Border'>
                  <div className='flex gap-1 items-center'>
                    English - Google Translate <MdGTranslate />
                  </div>
                </section>
                <section className='bg-set6Back p-2 rounded-md flex flex-col border border-solid border-set2Border'>
                  <div className='flex gap-1 items-center'>
                    Türkçe - Google Translate <MdGTranslate />
                  </div>
                </section>
                <section className='bg-set6Back p-2 rounded-md flex flex-col border border-solid border-set2Border'>
                  <div className='flex gap-1 items-center'>
                    Deutsch - Google Translate <MdGTranslate />
                  </div>
                </section>
                <section className='bg-set6Back p-2 rounded-md flex flex-col border border-solid border-set2Border'>
                  <div className='flex gap-1 items-center'>
                    Русский - Google Translate <MdGTranslate />
                  </div>
                </section>
              </section>
            </CardB>
          </section>
        </ContainInner>
      </ContainMain>
      <Toaster
        position='bottom-right'
        toastOptions={{
          classNames: {
            toast: 'bg-set1 flex gap-3 border border-solid border-set2Border h-20 p-2',
            title: 'text-set4Text select-none',
            description: 'text-red-400',
            actionButton: 'bg-zinc-400',
            cancelButton: 'bg-orange-400',
            closeButton: 'bg-white',
          },
        }}
        icons={{ success: '✅', error: '🔥', info: '🌐', warning: '⚠️' }}
      />
    </>
  )
}
