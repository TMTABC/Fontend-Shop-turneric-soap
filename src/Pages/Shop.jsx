import React from 'react'
import { Header } from '../Components/Header/Header'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollection } from '../Components/NewCollection/NewCollection'
import { NewLetter } from '../Components/NewLetter/NewLetter'

export const Shop = () => {
  return (
    <div>
      <Header />
      <Popular />
      <Offers />
      <NewCollection />
      <NewLetter />
    </div>
  )
}
