import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initState = {
    goods: [],
    loading: true,
    order: [],
    isBaskedShow: false,
    alertName: ''
}

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initState)

    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' })
    }

    value.addToBasket = (item) => {
        dispatch({ type: 'ADD_TO_BASKET', payload: item })
    }

    value.removeFromBasket = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_BASKET', payload: { mainId: itemId } })
    }

    value.incQuantity = (itemId) => {
        dispatch({ type: 'INC_QUANTITY', payload: { mainId: itemId } })
    }

    value.decQuantity = (itemId) => {
        dispatch({ type: 'DEC_QUANTITY', payload: { mainId: itemId } })
    }

    value.handleBasked = () => {
        dispatch({ type: 'TOGGLE_BASKET' })
    }   

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data })
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}