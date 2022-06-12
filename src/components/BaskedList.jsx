import { BaskedItem } from './BaskedItem';

function BaskedList(props) {
    const { order = [],
        handleBasked = Function.prototype,
        removeBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype } = props

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.finalPrice * el.quantity
    }, 0)

    return (
        <ul className="collection basked-list">
            <li className="collection-item active">Корзина</li>
            <span className="secondary-content right basked-close" onClick={handleBasked}>
                <i className="material-icons">close</i>
            </span>
            {order.length ? (
                order.map((item) => (
                    <BaskedItem
                        key={item.mainId}
                        {...item}
                        handleBasked={handleBasked}
                        removeBasket={removeBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                    />
                ))
            ) : (
                <li className='collection-item'>Корзина пуста</li>
            )}
            <li className="collection-item active">
                общая стоимость: {totalPrice} UAH
                <button className='secondary-content btn-small'>Купить</button>
            </li>

        </ul>
    )

}

export { BaskedList }