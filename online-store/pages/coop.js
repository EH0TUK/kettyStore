import React, { useRef } from "react";
import { client } from '../lib/client';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Coop = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_kct7v9y', 'template_qelfrgl', form.current, 'StTzUa5EPg8HNJgom')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        toast.success(`Ваш запрос принят. Мы постараемся ответить на него как можно скорее`);
    };
    return (
        <div className="coop__body">
            <div className="coop__title">
                Условия сотрудничества
            </div>
            <div className="coop__text">
                <p>Успех нашей деятельности зависит от успеха наших партнеров, поэтому мы предлагаем Вам максимально выгодные и интересные условия сотрудничества.</p>
                <p>Преимущества работы с нами:</p>
                <ul>
                    <li>Гибкая ценовая политика;</li>
                    <li>Регулярное обновление коллекций;</li>
                    <li>Отсутствие привязки к размерному ряду и расцветке;</li>
                    <li>Полное документальное сопровождение (договор поставки, спецификации, счета-фактуры, накладные, сертификаты соответствия образца таможенного союза);</li>
                    <li>Быстрое и профессиональное обслуживание.</li>
                </ul>
                <p>С Вами работает менеджер, ответственный за Ваш регион, который всегда уделит Вам внимание и проконсультирует по ассортименту и наличию выбранных позиций в заказе либо их планируемой дате выпуска.</p>
            </div>
            <form className="coop__form" ref={form} onSubmit={sendEmail}>
                <div className="coop__form-title">
                    Запрсить оптовые цены
                </div>
                <input className="block__display__none" type="text" name="coop" value="Сотрудничество"></input>
                <div className="coop__form-name">
                    <input type="text" name="coop__form-name" required placeholder="Имя"></input>
                </div>
                <div className="coop__form-email">
                    <input type="text" name="coop__form-email" required placeholder="Почта или номер телефона"></input>
                </div>
                <div className="coop__form-text">
                    <textarea type="text" rows={3} name="coop__form-text" required placeholder="Артикулы интересующих вас моделей"></textarea>
                </div>
                <div className="coop__form-button">
                    <input type="submit" className="coop__form-button-send" value="Отправить" />
                </div>
            </form>
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

export default Coop