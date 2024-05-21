import React from 'react'

/**
 * @typedef {Object} Props
 * @property {Object} children
 * @property {string} className
 * @property {string} topcolor
 * @property {string} bottomcolor
 * @property {string} backgroundUrl
 * @property {Object} style
 * @param {Props} props
 */
export default function CardA(props) {
  return (
    <div className={`${props.className} p-2 rounded-md border border-solid border-[#1e51e7]`} style={{ background: `linear-gradient(0deg, ${props.bottomcolor} 0%, ${props.topcolor} 100%)`, backgroundImage: props.backgroundUrl ? `url(${props.backgroundUrl}), linear-gradient(0deg, ${props.bottomcolor} 0%, ${props.topcolor} 100%)` : `linear-gradient(0deg, ${props.bottomcolor} 0%, ${props.topcolor} 100%)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      {props.children}
    </div>
  )
}
