import React from "react";
import Link from "next/link";
import CollectionsData from "../pages/index"

const Footer = ( {CollectionsData} ) => {
    return (
        <div className='footer__container'>
            <div className='footer__body'>
                <div className='footer__info'>
                    <div className='info__phone-number'>
                        <p>8 921 456 78 92</p>
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
                        <a href='catalog/1'>Осень 2023</a>
                        <a href='catalog/2'>Зима 2023</a>
                    </div>
                </div>
                <div className='footer__about'>
                    <div className='about__title'>
                        <p>о нас</p>
                    </div>
                    <div className='about__desc'>
                        <a href='/about'>О бренде</a>
                        <a href='contacts'>Контакты</a>
                    </div>
                </div>
                <div className='about__media'>
                    <div className='media__body'>
                        <div className='media-instagram'>
                            <a href='https://www.instagram.com/'>
                                <img src='/instagram.svg' />
                            </a>
                        </div>
                        <div className='media-twitter'>
                            <a href='https://twitter.com/'>
                                <img src='/twitter.svg' />
                            </a>
                        </div>
                        <div className='media-facebook'>
                            <a href='https://www.facebook.com/'>
                                <img src='/facebook.svg' />
                            </a>
                        </div>
                    </div>
                    <div className='media-question'>
                        <p>Задайте свой вопрос <a href='mailto:name@gmail.com'>здесь</a></p>
                    </div>
                </div>
                <div className='info__rights'>
                    <p>© 2023, All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer