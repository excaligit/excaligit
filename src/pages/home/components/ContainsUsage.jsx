import React, { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { TbBracketsContain } from 'react-icons/tb'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-jsx'
import 'ace-builds/src-noconflict/theme-twilight'

export default function ContainsUsage() {
  const code = `<ContainMain>
    <ContainInner>
      ...
    </ContainInner>
  </ContainMain>`

  const code2 = `<>
  <ContainMain>
    <ContainInner>
      ...
    </ContainInner>
  </ContainMain>
</>`

  const [jsx, setJSX] = useState(code)
  const [jsx2, setJSX2] = useState(code2)

  const { t } = useTranslation()

  return (
    <section className='p-4 flex flex-col gap-1 leading-5 text-set4Text'>
      <div className='text-lg flex gap-1 items-center font-semibold text-white'>
        <TbBracketsContain size={24} />
        <Trans>Kapsayıcıların Kullanımı</Trans>
      </div>
      <div>
        <Trans>Sayfanızı yazmaya başlamadan önce</Trans>
      </div>
      <div className='mt-4 text-white font-semibold'>{`<ContainMain>`}</div>
      <section className='bg-set6Back flex flex-col p-2 rounded-md  border border-solid border-set2Border'>{t('ContainMain')}</section>
      <div className='mt-4 text-white font-semibold'>{`<ContainInner>`}</div>
      <section className='bg-set6Back flex flex-col p-2 rounded-md  border border-solid border-set2Border'>{t('ContainInner')}</section>
      <div className='mt-4 text-white font-semibold'>
        <Trans>Örnek kullanım:</Trans>
      </div>
      <div className='grid grid-cols-2 max-sm:grid-cols-1 w-full gap-2 mt-1'>
        <div className='rounded-md overflow-hidden w-full'>
          <AceEditor theme='twilight' value={jsx} readOnly mode='jsx' fontSize={15} height='130px' width='auto' />
        </div>
        <div className='rounded-md overflow-hidden w-full'>
          <AceEditor theme='twilight' value={jsx2} readOnly mode='jsx' fontSize={15} height='130px' width='auto' />
        </div>
      </div>
    </section>
  )
}
