import React from 'react'

/**
 * @typedef {Object} Props
 * @property {string} className
 * @param {Props} props
 */
export default function HR_A(props) {
  return <div className={`${props.className} h-[1px] w-full bg-[#313538]`}></div>
}
