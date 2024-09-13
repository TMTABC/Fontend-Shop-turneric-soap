import React from 'react'
import './NewCollection.css'
import new_collection from '../Assets/new_collections'
import { Item } from '../Item/Item'
export const NewCollection = () => {
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONs</h1>
            <div className="collections">
                {new_collection.map((item, i) => {
                    return <Item key={i} {...item} />
                })}
            </div>
        </div>
    )
}
