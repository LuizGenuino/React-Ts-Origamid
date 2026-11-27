import React from 'react'
import { useData } from '../contexts/DataContext'

const Header = () => {
    const {data} = useData()
    console.table(data)
  return (
    <div>Header</div>
  )
}

export default Header