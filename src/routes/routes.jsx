import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Settings from '../pages/settings/Settings'
import Find from '../pages/find/Find'
import JohnDoe from '../pages/johndoe/johndoe'

/**
 * @typedef {Object} Props
 * @property {string} className
 * @param {Props} props
 */
export default function RoutesAll(props) {
  return (
    <div className={`${props.className}`}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/find' element={<Find />} />
        <Route path='/johndoe' element={<JohnDoe />} />
      </Routes>
    </div>
  )
}
