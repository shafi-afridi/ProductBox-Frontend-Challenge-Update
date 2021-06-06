import React, {Component, useState, useEffect} from 'react'
import axios from 'axios'

const ViewItem = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('/items')
            .then(res => {
                return res.data
            }).then(jsonResponse => setItems(jsonResponse.items))
    }, [])

    return (
        <div style={{marginTop: "100px"}} id="item">

            {
                items.map(item =>(
                    <div className="card" key={item.id}>
                        <img src={item.img} alt=""/>
                        <div className="content">
                            <h3>
                                {item.name}
                            </h3>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ViewItem
