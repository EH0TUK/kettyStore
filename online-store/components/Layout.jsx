import React, { useRef } from "react";
import { useStateContext } from '../context/StateContext';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Layout = ({ children }) => {
    const form = useRef();
    const CollectionsData = children[1].props.CollectionsData;
    let block = CollectionsData?.map((data) => <a onClick={() => SetSearch('')} href={'/catalog/' + data.collectionID}>{data.collectionNameRus}</a>)
    const { search, SetSearch } = useStateContext();
    const [isActive, setIsActive] = useState(false);
    const question = () => {
        setIsActive(current => !current);
    }
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_kct7v9y', 'template_qelfrgl', form.current, 'StTzUa5EPg8HNJgom')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        toast.success(`Ваш вопрос принят. Мы постараемся ответить на него как можно скорее`);
    };
    return (
        <div className="wrapper">
            <div className="container">
                <header className="header">
                    <div className='header__container'>
                        <div className='header__body'>
                            <div role={'navigation'} className='header__menu'>
                                <div className='header__part-1 header__part'>
                                    <div className='header__logo'>
                                        <a href="/">
                                            <img src='/logo.jpg' alt='logo-min' className='header__logo-min' />
                                        </a>
                                    </div>
                                </div>
                                <div className='header__part-2 header__part'>
                                    <input id='header__menu-toggle' type='checkbox' className='header__menu-checkbox' />
                                    <label className='header__menu-btn' htmlFor='header__menu-toggle'>
                                        <span className='header__menu-span'></span>
                                    </label>
                                    <div className='header__menu-items'>
                                        <div className='header__collections'>
                                            <a onClick={() => SetSearch('')} href='/catalog'>коллекции</a>
                                            <div className="header__collections-category">
                                                {block}
                                            </div>
                                        </div>
                                        <div className='header__about'>
                                            <a href='/about'>о бренде</a>
                                        </div>
                                        <div className='header__coop'>
                                            <a href='/coop'>сотрудничество</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='header__part-3 header__part'>
                                    <div className='header__search'>
                                        <div className='search__form'>
                                            <input type='text' placeholder='поиск' className='search__input' id="search__input" />
                                            <a onClick={() => SetSearch(document.getElementById('search__input').value)} href="/catalog" className='search__button'>
                                                <img src='/search.svg' alt='search' className='search__icon icon' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='header__favorite'>
                                        <a href='/favorite' className='favorite'>
                                            <img src='/heart.svg' alt='heart' className='favorite__icon icon' />
                                        </a>
                                    </div>
                                    <div className='header__basket'>
                                        <a href='/basket' className='basket'>
                                            <img src='/basket.svg' alt='basket' className='basket__icon icon' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="main">
                    {children}
                </main>
                <footer className="footer">
                    <div className='footer__container'>
                        <div className='footer__body'>
                            <div className='footer__info'>
                                <div className='info__phone-number'>
                                    <p>+375 29 768 48 40</p>
                                </div>
                                <div className='info__address'>
                                    <p>г.Брест, ул. Суворова, д.21</p>
                                </div>
                                <div className='info__worktime'>
                                    <p>9:00 - 21:00</p>
                                </div>
                            </div>
                            <div className='footer__collection'>
                                <div className='collection__title'>
                                    <p>коллекции</p>
                                </div>
                                <div className='collection__desc'>
                                    {block}
                                </div>
                            </div>
                            <div className='footer__about'>
                                <div className='about__title'>
                                    <p>о нас</p>
                                </div>
                                <div className='about__desc'>
                                    <a href='/about'>О бренде</a>
                                    <a href='/contact'>Контакты</a>
                                    <a href='/coop'>Сотрудничество</a>
                                </div>
                            </div>
                            <div className='about__media'>
                                <div className='media__body'>
                                    <div className='media-instagram'>
                                        <a target="blank" href='https://www.instagram.com/ke_tt_y.by/'>
                                            <img src='/instagram.svg' />
                                        </a>
                                    </div>
                                    <div className='media-telegram'>
                                        <a target="blank" href='https://t.me/+375297684840'>
                                            <img src='/telegram.svg' />
                                        </a>
                                    </div>
                                    <div className='media-whatsapp'>
                                        <a target="blank" href='https://wa.me/375297684840'>
                                            <img src='/whatsapp.svg' />
                                        </a>
                                    </div>
                                </div>
                                <div className='media-question'>
                                    <p>Задайте свой вопрос <button className="media-question__button" onClick={question}>здесь</button></p>
                                    <form className="question__form" ref={form} onSubmit={sendEmail}
                                        style={{
                                            opacity: isActive ? 1 : '',
                                            visibility: isActive ? 'visible' : '',
                                        }}>
                                        <input className="block__display__none" type="text" name="question" value="Вопрос"></input>
                                        <div className="question__name">
                                            <input type="text" name="question__name" required placeholder="Имя"></input>
                                        </div>
                                        <div className="question__email">
                                            <input type="text" name="question__email" required placeholder="Почта или номер телефона"></input>
                                        </div>
                                        <div className="question__text">
                                            <textarea type="text" rows={3} name="question__text" required placeholder="Ваш вопрос"></textarea>
                                        </div>
                                        <div className="question__button">
                                            <input type="submit" onClick={question} className="question__button-send" value="Отправить" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='info__rights'>
                                <p>© 2023 Ketty, All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Layout