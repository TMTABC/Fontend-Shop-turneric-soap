import React from 'react'
import { Header } from '../Components/Header/Header'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollection } from '../Components/NewCollection/NewCollection'

export const Shop = () => {
  return (
    <div>
      <Header />
      <Popular />
      <Offers />
      <NewCollection />
    </div>
  )
}
