export function reducer(state, { type, payload }) {
    switch (type) {
        case 'SET_GOODS':
            return{
                ...state,
                goods: payload || [],
                loading: false
            }
        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.mainId === payload.mainId
            );
            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem]
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.displayName
            }
        }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter(el => el.mainId !== payload.mainId)
            }
        case 'INC_QUANTITY':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.mainId === payload.mainId) {
                        const newQuantity = el.quantity + 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    } else {
                        return el;
                    }
                }),
            }
        case 'DEC_QUANTITY':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.mainId === payload.mainId) {
                        const newQuantity = el.quantity - 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    } else {
                        return el;
                    }
                }),
            }
        case 'TOGGLE_BASKET':
            return{
                ...state,
                isBaskedShow: !state.isBaskedShow
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }
        default:
            return state;
    }
}