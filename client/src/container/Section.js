import React, { Component } from 'react'
import Items from '../components/items/Items'
import Putitem from "./PutItem/Putitem";
import Details from '../components/details/Details'
import {Link, Route} from "react-router-dom"
import Cart from '../components/cart/Cart'
import Checkout from '../components/checkout/Checkout'
import Additem from "../components/proxy/Additem";
import ViewItem from "../components/proxy/ViewItem";


export class Section extends Component {
    render() {
        return (
            <section>
                <Route path={'/'} component={() => (<div>
                    <li className={'postitem'}><Link to="/postitem">Post Items</Link></li>
                    <li className={'viewitem'}><Link to="/viewitem">View Items</Link></li>
                </div>)} exact />
                <Route path={'/postitem'} component={Additem} exact />
                <Route path={'/viewitem'} component={ViewItem} exact />
                <Route path="/additem" component={Putitem} exact  />
                <Route path="/item" component={Items} exact  />
                <Route path="/item/:id" component={Details} exact />
                <Route path="/cart" component={Cart}  exact/>
                <Route path="/checkout" component={Checkout} exact />
            </section>
        )
    }
}

export default Section
