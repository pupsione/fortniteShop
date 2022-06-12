function BaskedItem(props) {
    const {
        mainId,
        displayName,
        finalPrice,
        quantity,
        removeBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype
    } = props;

    return (
        <li className="collection-item" key={mainId}>
            {displayName} x <span className="current" onClick={() => incQuantity(mainId)}>+</span> {quantity} <span className="current" onClick={() => decQuantity(mainId)}>-</span> = {finalPrice * quantity} UAH
            <span className="secondary-content" onClick={() => removeBasket(mainId)}>
                <i className="material-icons">close</i>
            </span>
        </li>
    )
}

export { BaskedItem }