import React, { useEffect, useRef, useState } from 'react'
import { ContainInner, ContainMain } from '../../layout/Layout'
import { usePressKey } from '../../hooks/usePressKey'
import { IoSearchSharp } from 'react-icons/io5'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BiLike } from 'react-icons/bi'
import { CgWebsite } from 'react-icons/cg'
import { Trans } from 'react-i18next'
import CardB from '../../components/cards/CardB'
import { Users } from '../../data/users'
import HR_A from '../../components/hr/HRuleA'
import { useSearch } from '../../../zustand/settings'
import { Link } from 'react-router-dom'
import { WindowVirtualizer } from 'virtua'
import ButtonC from '../../components/buttons/ButtonC'

export default function Find() {
  const { search, setSearch } = useSearch()
  const [filteredUsers, setFilteredUsers] = useState([])
  const inputRef = useRef(null)

  // prettier-ignore
  useEffect(() => {
    if (search && search.length > 1) {
      const filteredUsers = Users.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        (item.email.toLowerCase().split('@')[0].includes(search.toLowerCase())) ||
        item.id.toString().includes(search)
      )
      setFilteredUsers(filteredUsers)
    } else {
      setFilteredUsers([])
    }
  }, [search])

  usePressKey('Escape', () => {
    history.back()
  })

  useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <ContainMain>
      <ContainInner className='my-5 mx-5'>
        <div className='flex items-center gap-2 text-2xl font-semibold opacity-80'>
          <IoSearchSharp size={30} />
          <Trans>Ara</Trans>
        </div>
        <CardB className='mt-7'>
          <div className=''>
            <input ref={inputRef} placeholder='Ex: John Doe' type='text' onChange={(e) => setSearch(e.target.value)} defaultValue={search} className='p-4 w-full bg-inherit placeholder:text-white/10 rounded-md outline-none flex flex-col gap-1 leading-5 text-set4Text' spellCheck={false} />
          </div>

          {filteredUsers.length != 0 && (
            <>
              <HR_A />
              <div className='flex flex-col gap-2 p-2'>
                <WindowVirtualizer>
                  {filteredUsers
                    .sort((a, b) => b.like - a.like)
                    .map((user) => (
                      <div key={user.id} className='flex cursor-pointer justify-between my-1 items-center gap-2 p-2 bg-set3 hover:bg-set5 duration-75 rounded-md border border-solid border-set2Border'>
                        <Link to={`/${user.username}`} className='flex items-center gap-2 w-full h-[90px] border-r border-solid border-set2Border'>
                          <div className='w-14 h-14 rounded-full outline outline-set1' style={{ backgroundImage: `url(${user.profilePhoto})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                          <div className='flex flex-col gap-2'>
                            <div className='font-semibold'>
                              {user.name}
                              <span className='font-normal'>{` (${user.username})`}</span>
                            </div>
                            <div className='text-sm'>{user.email}</div>
                          </div>
                        </Link>
                        <div className='flex flex-col justify-center items-center gap-2 '>
                          <ButtonC className='flex items-center justify-center gap-2 p-1 px-2 rounded-md'>
                            <BiLike size={20} />
                            <div className='w-[1px] h-[20px] bg-[#5d82ff]'></div>
                            <div className='font-semibold'>{user.like}</div>
                          </ButtonC>
                          <div className='grid grid-cols-2 items-center justify-center gap-2 h-[50px]'>
                            {user.website ? (
                              <a href={user.website} target='_blank'>
                                <CgWebsite size={20} />
                              </a>
                            ) : (
                              <div className='opacity-20'>
                                <CgWebsite size={20} />
                              </div>
                            )}
                            {user.githubProfile ? (
                              <a href={user.githubProfile} target='_blank'>
                                <FaGithub size={20} />
                              </a>
                            ) : (
                              <div className='opacity-20'>
                                <FaGithub size={20} />
                              </div>
                            )}
                            {user.linkedInProfile ? (
                              <a href={user.linkedInProfile} target='_blank'>
                                <FaLinkedin size={20} />
                              </a>
                            ) : (
                              <div className='opacity-20'>
                                <FaLinkedin size={20} />
                              </div>
                            )}
                            {user.twitterProfile ? (
                              <a href={user.twitterProfile} target='_blank'>
                                <FaXTwitter size={20} />
                              </a>
                            ) : (
                              <div className='opacity-20'>
                                <FaXTwitter size={20} />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </WindowVirtualizer>
              </div>
            </>
          )}
        </CardB>
      </ContainInner>
    </ContainMain>
  )
}
