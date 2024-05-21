import React from 'react'
import { Link, useLocation } from 'react-router-dom'

/**
 * @typedef {Object} Props
 * @property {Object} children
 * @property {Object} onClick
 * @property {string} className
 * @property {string} link
 * @property {string} a
 * @param {Props} props
 */
export default function ButtonB(props) {
  const location = useLocation()

  if (props.link) {
    return (
      <Link to={props.link} onClick={props.onClick} className={`${props.className} flex items-center p-2 ${location.pathname == props.link ? 'bg-[#10243e] text-[#4288cf]' : 'bg-set1 hover:bg-set5'}  cursor-pointer duration-150 rounded-md`}>
        {props.children}
      </Link>
    )
  }
  if (props.a) {
    return (
      <a href={props.a} target='_blank' onClick={props.onClick} className={`${props.className} flex items-center p-2 ${location.pathname == props.link ? 'bg-[#10243e] text-[#4288cf]' : 'bg-set1 hover:bg-set5'}  cursor-pointer duration-150 rounded-md`}>
        {props.children}
      </a>
    )
  }
  return (
    <div onClick={props.onClick} className={`${props.className} flex items-center p-2 bg-set1 hover:bg-set5 cursor-pointer duration-150 rounded-md`}>
      {props.children}
    </div>
  )
}
