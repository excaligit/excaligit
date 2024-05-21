import React from 'react'
import CardA from '../../../components/cards/CardA'
import { HiOutlineHeart } from 'react-icons/hi'
import { MdArrowOutward } from 'react-icons/md'
import ButtonC from '../../../components/buttons/ButtonC'
import { Trans } from 'react-i18next'

export default function WelcomeBrand() {
  return (
    <CardA className='mt-7 p-4 flex items-center justify-between max-md:flex-col max-md:gap-4 ' topcolor='#0033cc' bottomcolor='#0033cb' backgroundUrl='images/system/apis.svg'>
      <div className='flex items-center gap-3'>
        <div className='bg-blue-700 p-2 rounded-md'>
          <HiOutlineHeart size={24} />
        </div>
        <div className='flex flex-col gap-1'>
          <div className='font-semibold text-lg'>
            <Trans>Excaligit'e hoş geldiniz</Trans>
          </div>
          <div className='text-sm text-zinc-300'>
            <Trans>Developerların CV paylaşma reposuna hoşgeldin!</Trans>
          </div>
        </div>
      </div>
      <ButtonC a='https://github.com/excaligit/excaligit' className='text-xs py-2 px-3 gap-1'>
        <div className='font-semibold'>Github</div>
        <MdArrowOutward size={13} className='min-w-[13px]' />
      </ButtonC>
    </CardA>
  )
}
