import { useContext } from "react";
import { ShopContext } from "../context";
import { GoodsItem } from './GoodItem';

function GoodsList() {
    const { goods = []} = useContext(ShopContext);

    if (goods.lenght) {
        return <h3>Ничего не найдено. Повторите позже</h3>
    }
    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.mainId} {...item} />
            ))}
        </div>
    )
}

export { GoodsList }