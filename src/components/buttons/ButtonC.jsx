import React from 'react'

/**
 * @typedef {Object} Props
 * @property {Object} children
 * @property {string} className
 * @property {string} a
 * @param {Props} props
 */
export default function ButtonC(props) {
  if (props.a) {
    return (
      <a href={props.a} target='_blank' className={`${props.className} flex items-center p-3 bg-[#1e51e7] hover:bg-[#2b5ef3] select-none drop-shadow-md border border-solid cursor-pointer duration-150 border-[#5d82ff] rounded-md`}>
        {props.children}
      </a>
    )
  }
  return <div className={`${props.className} flex items-center p-3 bg-[#1e51e7] hover:bg-[#2b5ef3] select-none drop-shadow-md border border-solid cursor-pointer duration-150 border-[#5d82ff] rounded-md`}>{props.children}</div>
}
