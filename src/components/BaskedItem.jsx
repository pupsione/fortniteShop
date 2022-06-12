import { useContext } from "react";
import { ShopContext } from "../context";

function BaskedItem(props) {
    const {
        mainId,
        displayName,
        finalPrice,
        quantity,
    } = props;


    const {removeFromBasket, incQuantity, decQuantity} = useContext(ShopContext);

    return (
        <li className="collection-item" key={mainId}>
            {displayName} x <span className="current" onClick={() => incQuantity(mainId)}>+</span> {quantity} <span className="current" onClick={() => decQuantity(mainId)}>-</span> = {finalPrice * quantity} UAH
            <span className="secondary-content" onClick={() => removeFromBasket(mainId)}>
                <i className="material-icons">close</i>
            </span>
        </li>
    )
}

export { BaskedItem }