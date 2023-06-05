import React from "react";
import { client } from '../lib/client';

const Contact = () => {
    return (
        <div className="contact__body">
            <div className="contact__name">
                <p>общество с дополнительной ответственностью "панда"</p>
            </div>
            <div className="contact__address">
                <p>224002, Республика Беларусь, г. Брест, ул. Суворова, 21</p>
            </div>
            <div className="contact__requisites">
                <p>Реквизиты</p>
                <p>BY56 AKBB 3012 7915 2260 4100 0000 в Брестском областном управлении №100 ОАО «АСБ Беларусбанк», БИК AKBBBY2X, УНП 200228542</p>
            </div>
            <div className="contact__list">
                <div className="contact__list-title">
                    <p>Контакты</p>
                </div>
                <div className="contact__list-phone">
                    <img src="phone-b.svg" />
                    +375297684840
                </div>
                <div className="contact__list-inst">
                    <a target="blank" href='https://www.instagram.com/ke_tt_y.by/'>
                        <img src='instagram-b.svg' />
                        ke_tt_y.by
                    </a>
                </div>
                <div className="contact__list-telegram">
                    <a target="blank" href='https://t.me/+375297684840'>
                        <img src='telegram-b.svg' />
                        +375297684840
                    </a>
                </div>
                <div className="contact__list-whatsapp">
                    <a target="blank" href='https://wa.me/375297684840'>
                        <img src='whatsapp-b.svg' />
                        +375297684840
                    </a>
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

export default Contact