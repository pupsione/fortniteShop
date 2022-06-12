import { GoodsItem } from './GoodItem';
function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (goods.lenght) {
        return <h3>Ничего не найдено. Повторите позже</h3>
    }
    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.mainId} {...item} addToBasket={addToBasket} />
            ))}
        </div>
    )
}

export { GoodsList }