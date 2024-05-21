import React from 'react'

/**
 * @typedef {Object} Props
 * @property {Object} children
 * @property {string} className
 * @param {Props} props
 */
export default function CardB(props) {
  return <div className={`${props.className} bg-set1 rounded-md border border-solid border-set2Border`}>{props.children}</div>
}
