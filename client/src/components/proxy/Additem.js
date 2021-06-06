import React, {Component, useState} from "react";
import axios from "axios";
import classes from '../../container/PutItem/Puitem.module.css'
import {Link} from "react-router-dom";

const Additem = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [img, setImg] = useState('')
    const [showLink, setShowLink] = useState(false)

    const onClick = () => {
        const data = {
            "name": name,
            "price": price,
            "img": img,
        }
        axios.post('/items' ,data)
            .then(res => console.log(res.data))
    }

    let error = null
    if (name === '' || price === '' || img === ''){
        error = "All Fields are required"
    }

    return (
        <div>
            <div className={classes.Data}>
                <h2>Add Items</h2>
                <input onChange={(e) => setName(e.target.value)} name={'name'} placeholder={'name'}/>
                <input onChange={(e) => setPrice(e.target.value)} name={'price'} placeholder={'price'}/>
                <input onChange={(e) => setImg(e.target.value)} name={'img'} placeholder={'image'}/>
                <p>{error}</p>
                <button onClick={() => {
                    setShowLink(true)
                    onClick()
                }}>Add Item</button>
                {showLink ? <div className={classes.LinkDiv}><Link to={'/viewitem'}>View Item</Link></div> : null}
            </div>
        </div>
    )
}
export default Additem
