import React, { useRef } from "react";
import { client } from '../lib/client';
import { useStateContext } from "../context/StateContext";
import { BasketItem } from '../components';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Basket = () => {
    const cartRef = useRef();
    const form = useRef();
    const { totalPrice, totalQuantities, cartItems, ClearBusket, auth, country, totalPriceRub } = useStateContext();
    const sendEmail = (e) => {
        e.preventDefault();
        const message = getCartItems()
        const mes = document.querySelector(".message")
        mes.value = message
        emailjs.sendForm('service_kct7v9y', 'template_a75u78v', form.current, 'StTzUa5EPg8HNJgom')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        ClearBusket()
        toast.success(`Заказ сделан, скоро с вами свяжутся`);
    };
    const getCartItems = () => {
        let str = ""
        cartItems?.forEach(element => {
            str += "артикул: " + element.model.current + ", размер: " + element.size + ", цвет: " + element.color + ", кол-во: " + element.quantity + "\n"
            console.log(element.model.current)
        });
        return str
    }
    let total_price = ``
    if (country == 'Беларусь') {
        total_price = `${totalPrice}`
    } else {
        total_price = `${totalPriceRub}`
    }
    if (auth)
        return (
            <div className="main__basket" ref={cartRef}>
                <div className="basket__items-list">
                    <div className="items-list__title">
                        корзина
                    </div>
                    <div className="items-list__item">
                        {cartItems?.map((cartItem) => <BasketItem key={cartItem._id} cartItem={cartItem} />)}
                    </div>
                    <div className="item-list__clear">
                        <button onClick={ClearBusket}>Очистить корзину</button>
                    </div>
                </div>
                <div className="basket__order-info">
                    <div className="order-info__title">
                        информация о заказе
                    </div>
                    <div className="order-info__total">
                        <div className="total__price">
                            <div className="total__price-title">
                                Товары на сумму:
                            </div>
                            <div className="total__price-price">
                                {total_price} руб.
                            </div>
                        </div>
                        <div className="total__quantity">
                            <div className="total__quantity-title">
                                Количество товаров:
                            </div>
                            <div className="total__quantity-quantity">
                                {totalQuantities}
                            </div>
                        </div>
                        <form action="" ref={form} onSubmit={sendEmail}>
                            <div className="total__promo">
                                <input type="text" name="total__name" required placeholder="Имя"></input>
                                <input type="text" name="total__back" required placeholder="Почта или номер телефона"></input>
                                <input type="text" name="message" value="" className="message"></input>
                            </div>
                            <div className="total__line"></div>
                            <div className="total__sum">
                                <div className="total__sum-title">
                                    итого:
                                </div>
                                <div className="total__sum-sum">
                                    {total_price} руб.
                                </div>
                            </div>
                            <input type="submit" className="total__make-order" value="Оформить заказ" />
                        </form>
                    </div>
                </div>
            </div>
        )
    else return (
        <div className="main__basket" ref={cartRef}>
            <div className="basket__items-list">
                <div className="items-list__title">
                    корзина
                </div>
                <div className="items-list__item">
                    <a href="/registration">Зайдите в аккаунт, чтобы увидеть товары в корзине</a>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const CollectionsQuery = '*[_type == "collections"]';
    const CollectionsData = await client.fetch(CollectionsQuery);
    return {
        props: { CollectionsData }
    }
}

export default Basket