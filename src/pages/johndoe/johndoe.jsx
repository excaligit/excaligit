import React from 'react'
import { ContainInner, ContainMain } from '../../layout/Layout'
import CardA from '../../components/cards/CardA'
import CardB from '../../components/cards/CardB'
import HR_A from '../../components/hr/HRuleA'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BiLike } from 'react-icons/bi'
import { CgWebsite } from 'react-icons/cg'
import ButtonC from '../../components/buttons/ButtonC'
import { Users } from '../../data/users'

export default function JohnDoe() {
  return (
    <ContainMain>
      <ContainInner>
        <CardB className='p-2 py-10 flex flex-col items-center justify-center'>
          <div className='w-40 h-40 rounded-full outline outline-set4Text' style={{ backgroundImage: 'url(/images/john_doe/johndoe.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
          <div className='mt-5 text-2xl font-semibold'>Hi i am John Doe</div>
          <div className='text-sm'>This is my Excaligit page and i am fake profile</div>
          <div className='text-sm flex gap-2 mt-2'>
            <a href='https://www.excaligit.com/' target='_blank'>
              <CgWebsite size={20} />
            </a>
            <a href='https://github.com/excaligit/excaligit' target='_blank'>
              <FaGithub size={20} />
            </a>
            <div className='opacity-20'>
              <FaLinkedin size={20} />
            </div>
            <div className='opacity-20'>
              <FaXTwitter size={20} />
            </div>
          </div>
          <ButtonC className='flex mt-5 items-center justify-center gap-2 p-1 px-2 rounded-md'>
            <BiLike size={20} />
            <div className='w-[1px] h-[20px] bg-[#5d82ff]'></div>
            <div className='font-semibold'>{Users.find((item) => item.username == 'johndoe').like}</div>
          </ButtonC>
        </CardB>
        <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-3 mt-3'>
          <CardB className='p-3'>
            <div className='font-semibold text-xl'>Services</div>
            <HR_A className='my-3' />
            <div className='leading-5'>Industrial design • Graphic design • User Experience Design (UED) • Video Production • Web designing • Personal Software Development • Application Development • Web Development • Cloud Application Development</div>
          </CardB>

          <CardB className='p-3'>
            <div className='font-semibold text-xl'>Experience</div>
            <HR_A className='my-3' />
            <div className='flex gap-2 items-center'>
              <img src='logo.svg' className='w-20 h-20 bg-set2Border p-2 rounded-md' />
              <div className='flex flex-col'>
                <div className='font-semibold text-lg'>Excaligit</div>
                <div className='text-xs'>Jul 2019 - currently</div>
              </div>
            </div>
          </CardB>

          <CardB className='p-3'>
            <div className='font-semibold text-xl'>Education</div>
            <HR_A className='my-3' />
            <div className='flex gap-2 items-center'>
              <img src='logo.svg' className='w-20 h-20 bg-set2Border p-2 rounded-md' />
              <div className='flex flex-col'>
                <div className='font-semibold text-lg'>Excaligit School</div>
                <div className='text-xs'>Jul 2014 - Jul 2018</div>
              </div>
            </div>
          </CardB>

          <CardB className='p-3'>
            <div className='font-semibold text-xl'>Projects</div>
            <HR_A className='my-3' />
            <div className='flex gap-2 items-center'>
              <img src='logo.svg' className='w-20 h-20 bg-set2Border p-2 rounded-md' />
              <div className='flex flex-col'>
                <div className='font-semibold text-lg'>Excaligit Project</div>
              </div>
            </div>
          </CardB>

          <CardB className='p-3'>
            <div className='font-semibold text-xl'>Skills</div>
            <HR_A className='my-3' />
            <div className='flex gap-2 items-center'>
              <div className='flex flex-col'>
                <div className='font-semibold text-lg'>Database - React - Node.js - CSS - Tailwind - React Native</div>
              </div>
            </div>
          </CardB>

          <CardB className='p-3'>
            <div className='font-semibold text-xl'>Language</div>
            <HR_A className='my-3' />
            <div className='flex gap-2 items-center'>
              <div className='flex flex-col'>
                <div className='font-semibold text-lg'>English</div>
              </div>
            </div>
          </CardB>
        </div>
        <div className='flex items-center justify-center mt-4'>
          <ButtonC className='flex w-40 mt-5 items-center justify-center gap-2 p-1 px-2 rounded-md'>Contact Me</ButtonC>
        </div>
      </ContainInner>
    </ContainMain>
  )
}
