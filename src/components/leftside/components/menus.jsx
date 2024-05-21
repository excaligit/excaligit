import React from 'react'
import ButtonB from '../../buttons/ButtonB'
import { CgWebsite } from 'react-icons/cg'
import { GoHomeFill } from 'react-icons/go'
import { IoMdStats, IoMdSettings } from 'react-icons/io'
import { Trans } from 'react-i18next'
import { useMenu } from '../../../../zustand/settings'

export default function Menus() {
  const { menu, setMenu } = useMenu()

  return (
    <div className='flex flex-col gap-1 p-3 py-4'>
      <ButtonB onClick={() => setMenu(false)} link='/' className='gap-2 text-sm'>
        <GoHomeFill size={24} />
        <Trans>Anasayfa</Trans>
      </ButtonB>
      <div className='gap-2 flex items-center select-none p-2 text-sm text-set2Border'>
        <CgWebsite size={24} />
        <Trans>Keşfet</Trans>
      </div>
      <div className='gap-2 flex items-center select-none p-2 text-sm text-set2Border'>
        <IoMdStats size={24} />
        <Trans>İstatistik</Trans>
      </div>
      <ButtonB onClick={() => setMenu(false)} link='/settings' className='gap-2 text-sm'>
        <IoMdSettings size={24} />
        <Trans>Ayarlar</Trans>
      </ButtonB>
    </div>
  )
}
