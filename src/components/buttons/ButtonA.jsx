import React from 'react'
import { Link } from 'react-router-dom'

/**
 * @typedef {Object} Props
 * @property {Object} children
 * @property {Object} onClick
 * @property {string} className
 * @property {string} link
 * @property {string} a
 * @param {Props} props
 */
export default function ButtonA(props) {
  if (props.link) {
    return (
      <Link to={props.link} onClick={props.onClick} className={`${props.className} flex items-center p-3 bg-set1 hover:bg-set3 drop-shadow-md border border-solid cursor-pointer duration-150 border-set2Border rounded-md`}>
        {props.children}
      </Link>
    )
  }
  if (props.a) {
    return (
      <a href={props.a} target='_blank' onClick={props.onClick} className={`${props.className} flex items-center p-3 bg-set1 hover:bg-set3 drop-shadow-md border border-solid cursor-pointer duration-150 border-set2Border rounded-md`}>
        {props.children}
      </a>
    )
  }
  return (
    <div onClick={props.onClick} className={`${props.className} flex items-center p-3 bg-set1 hover:bg-set3 drop-shadow-md border border-solid cursor-pointer duration-150 border-set2Border rounded-md`}>
      {props.children}
    </div>
  )
}
