function GoodsItem(props) {
    const {
        mainId,
        displayName,
        price,
        displayType,
        displayAssets,
        addToBasket = Function.prototype,
    } = props;
    const finalPrice = price.finalPrice
    return (
        <div className="card" id={mainId}>
            <div className="card-image">
                <img src={displayAssets[0].full_background} alt={displayName} />
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayType}</p>
            </div>
            <div className="card-action">
                <button className="btn"
                    onClick={() => {
                        addToBasket({
                            mainId,
                            displayName,
                            finalPrice 
                        })
                    }}>Купить</button>
                <span className="right" style={{ fontSize: '1.8rem' }}>{finalPrice} UAH</span>
            </div>
        </div>
    )



}
export { GoodsItem }