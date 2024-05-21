import React, { useState } from 'react'
import { IoMenuSharp, IoSearchSharp, IoClose } from 'react-icons/io5'
import { useEffect } from 'react'
import HR_A from '../hr/HRuleA'
import Menus from './components/menus'
import LeftSideHead from './components/head'
import { Link, useLocation } from 'react-router-dom'
import { Links } from './components/links'
import Coffee from './components/coffee'
import ButtonA from '../buttons/ButtonA'
import ButtonB from '../buttons/ButtonB'
import { CoffeeIcon } from '../../assets/icons/icons'
import { useMenu } from '../../../zustand/settings'

export default function LeftSide() {
  const { menu, setMenu } = useMenu()
  const location = useLocation()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenu(false)
    }

    window.addEventListener('resize', handleResize)

    // Event listener'ı temizleme
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div onClick={() => setMenu(!menu && true)} className={`md:hidden z-50 fixed right-4 top-4 bg-set1 border border-solid border-set2Border w-10 h-10 rounded-full ${Links.includes(location.pathname) ? 'flex' : 'hidden'} items-center justify-center`}>
        {menu ? <IoClose size={24} /> : <IoMenuSharp size={24} />}
      </div>
      <Link to={'/'} className='fixed bottom-3 z-50 right-3 opacity-10'>
        <img src='mini.svg' alt='' />
      </Link>
      <div className={`${!menu ? 'max-md:hidden w-[260px]' : 'w-3/4'} z-50 bg-set1 h-full ${Links.includes(location.pathname) ? 'flex' : 'hidden'} flex-col justify-between fixed left-0 top-0 border-r border-solid border-set2Border`}>
        <div>
          <LeftSideHead />
          <HR_A />
          <Menus />
        </div>
        {/* <div className='gap-1 p-3 py-4'>
          <ButtonB a='https://buymeacoffee.com/serter1' className='justify-center'>
            <CoffeeIcon className='w-6 h-6' />
            <span className='font-semibold text-sm'>Buy me a coffee</span>
          </ButtonB>
        </div> */}
      </div>
    </>
  )
}
