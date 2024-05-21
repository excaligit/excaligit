import React from 'react'
import { ContainInner, ContainMain } from '../../layout/Layout'
import { GoHomeFill } from 'react-icons/go'
import CardB from '../../components/cards/CardB'
import HR_A from '../../components/hr/HRuleA'
import { Toaster } from 'sonner'
import Ready from './components/Ready'
import GetStarted from './components/GetStarted'
import WelcomeBrand from './components/WelcomeBrand'
import Packages from './components/Packages'
import ContainsUsage from './components/ContainsUsage'
import { Trans } from 'react-i18next'

export default function Home() {
  return (
    <>
      <ContainMain>
        <ContainInner className='my-5 mx-5'>
          <div className='flex items-center gap-2 text-2xl font-semibold opacity-80'>
            <GoHomeFill size={30} />
            <Trans>Anasayfa</Trans>
          </div>
          <WelcomeBrand />
          <CardB className='mt-3'>
            <GetStarted />
            <HR_A />
            <Ready />
          </CardB>
          <CardB className='mt-3'>
            <Packages />
          </CardB>
          <CardB className='mt-3'>
            <ContainsUsage />
          </CardB>
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
