import React, { useEffect, useContext } from "react";
import { API_KEY, API_URL } from '../config';

import { ShopContext } from "../context";

import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BaskedList } from "./BaskedList";
import { Alert } from "./Alert";

const Shop = () => {

    const { loading, order, isBaskedShow, alertName, setGoods } = useContext(ShopContext)


    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                "Authorization": API_KEY,
            }
        }).then(response => response.json())
            .then((data) => {
                setGoods(data.shop);
            })
    }, [])

    return (

        <main className="container content">
            <Cart quantity={order.length} />
            {isBaskedShow && <BaskedList />}
            {loading ? <Preloader /> : <GoodsList/>}
            {alertName && <Alert/>}
        </main>
    )
}

export { Shop };