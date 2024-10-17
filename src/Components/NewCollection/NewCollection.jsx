import React, {useEffect, useState} from 'react'
import './NewCollection.css'
import { Item } from '../Item/Item'
export const NewCollection = () => {
    const [new_collection,setNew_Collection] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/newcollection').then((response)=>response.json()).then((data)=>setNew_Collection(data))
    }, []);
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
