import React from 'react'
import RoutesAll from '../routes/routes'
import LeftSide from '../components/leftside/LeftSide'
import { useLocation } from 'react-router-dom'
import { Links } from '../components/leftside/components/links'

export default function Layout() {
  const location = useLocation()

  return (
    <>
      <LeftSide />
      <RoutesAll className={`${Links.includes(location.pathname) ? 'md:ml-[260px]' : ''} my-3`} />
    </>
  )
}

/**
 * @typedef {Object} Props
 * @property {Object} children
 * @property {string} className
 * @param {Props} props
 */
export const ContainMain = (props) => {
  return <div className={`w-full flex justify-center ${props.className}`}>{props.children}</div>
}

/**
 * @typedef {Object} Props
 * @property {Object} children
 * @property {string} className
 * @param {Props} props
 */
export const ContainInner = (props) => {
  return <div className={`${Links.includes(location.pathname) ? 'max-w-[1100px]' : 'max-w-[1250px]'} w-full mx-3 ${props.className}`}>{props.children}</div>
}
