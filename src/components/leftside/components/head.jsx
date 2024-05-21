import React, { useEffect } from 'react'
import ButtonA from '../../buttons/ButtonA'
import { IoSearchSharp, IoReturnDownBack } from 'react-icons/io5'
import { Version } from '../../../settings/version'
import { Trans } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { usePressCtrlKey } from '../../../hooks/usePressKey'
import { useMenu } from '../../../../zustand/settings'

export default function LeftSideHead() {
  const navigate = useNavigate()
  const location = useLocation()
  const { setMenu } = useMenu()

  usePressCtrlKey('k', (e) => {
    navigate('/find')
  })

  return (
    <div className='p-3 py-4 flex flex-col gap-3'>
      <div className='flex justify-between items-center'>
        <img src='/logo.svg' alt='Excaligit Logo' />
        <div className='flex items-center text-xs text-set4Text'>{Version}</div>
      </div>
      {location.pathname == '/find' ? (
        <ButtonA onClick={() => history.back() + setMenu(false)} className='text-sm text-set4Text justify-between p-2'>
          <div className='flex items-center justify-center gap-1'>
            <IoReturnDownBack size={20} />
            <Trans>Geri dön</Trans>
          </div>
          <div className='flex gap-1 items-center'>
            <div className='border-2 border-solid border-set2Border px-1 rounded-md'>ESC</div>
          </div>
        </ButtonA>
      ) : (
        <ButtonA link='/find' onClick={() => setMenu(false)} className='text-sm text-set4Text justify-between p-2'>
          <div className='flex items-center justify-center gap-1'>
            <IoSearchSharp size={20} />
            <Trans>Ara</Trans>
          </div>
          <div className='flex gap-1 items-center'>
            <div className='border-2 border-solid border-set2Border px-1 rounded-md'>CTRL</div> + <div className='border-2 border-solid border-set2Border px-1 rounded-md'>K</div>
          </div>
        </ButtonA>
      )}
    </div>
  )
}
