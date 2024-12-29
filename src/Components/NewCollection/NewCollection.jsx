import React, { useEffect, useState } from "react";
import "./NewCollection.css";
import { Item } from "../Item/Item";

export const NewCollection = () => {
    const [newCollection, setNewCollection] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/newcollection")
            .then((response) => response.json())
            .then((data) => setNewCollection(data));
    }, []);

    return (
        <div className="new-collections">
            <h1>New Collections</h1>
            <div className="collections">
                {newCollection.map((item, i) => (
                    <Item key={i} {...item} />
                ))}
            </div>
        </div>
    );
};
