import React from "react";
import { urlFor } from '../lib/client';
import { useStateContext } from "../context/StateContext";

const BasketItem = (cartItem) => {
    const { toggleCartItemQuantity, onRemove, country, auth } = useStateContext();
    let priceBlock = ''
    if (auth == true) {
        if (country == 'Беларусь') {
            priceBlock = `${cartItem.cartItem.price} бел. руб.`
        } else {
            priceBlock = `${cartItem.cartItem.priceRub} руб.`
        }
    }
    return (
        <div className="item__body">
            <div className="item__img">
                <img src={urlFor(cartItem.cartItem.image[0])} />
            </div>
            <div className="item__info">
                <div className="item__name">
                    {cartItem.cartItem.name}
                    <div className="item-list__price">
                        {priceBlock}
                    </div>
                </div>
                <div className="item__article">
                    {cartItem.cartItem.model.current}
                </div>
                <div className="item__color">
                    <div className="item__color-title">
                        Цвет:
                    </div>
                    <div className="item__color-color" style={{ backgroundColor: cartItem.cartItem.color }}></div>
                </div>
                <div className="item__param">
                    <div className="item__size">
                        <div className="item__size-title">
                            Размер
                        </div>
                        <div className="item__size-param">
                            {cartItem.cartItem.size}
                        </div>
                    </div>
                    <div className="item__quantity">
                        <div className="item__quantity-title">
                            Количество
                        </div>
                        <div className="item__quantity-param">
                            <button onClick={() => toggleCartItemQuantity(cartItem.cartItem._id, cartItem.cartItem.color, cartItem.cartItem.size, 'dec')} className="quantity-param__minus">
                                -
                            </button>
                            <div className="quantity-param">
                                {cartItem.cartItem.quantity}
                            </div>
                            <button onClick={() => toggleCartItemQuantity(cartItem.cartItem._id, cartItem.cartItem.color, cartItem.cartItem.size, 'inc')} className="quantity-param__plus">
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="item__options">
                    <button onClick={() => onRemove(cartItem)} className="item__delete">
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BasketItem