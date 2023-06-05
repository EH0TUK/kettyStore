import React from "react";
import { urlFor } from "../lib/client";

const Main_banner = ( mainBanner ) => {
    return (
        <div className='main__banner'>
            <div className='banner__text'>
                <p>{mainBanner.mainBanner.mainText}</p>
                <p>{mainBanner.mainBanner.descText}</p>
            </div>
            <div className='banner__media'>
                <div className='media-instagram'>
                    <a target="blank" href='https://www.instagram.com/ke_tt_y.by/'>
                        <img src='instagram-b.svg' />
                    </a>
                </div>
                <div className='media-telegram'>
                    <a target="blank" href='https://t.me/+375297684840'>
                        <img src='telegram-b.svg' />
                    </a>
                </div>
                <div className='media-whatsapp'>
                    <a target="blank" href='https://wa.me/375297684840'>
                        <img src='whatsapp-b.svg' />
                    </a>
                </div>
            </div>
            <div className='banner__img'>
                <div className='banner__img-big'>
                    <img src={urlFor(mainBanner.mainBanner.imageBig)} />
                </div>
                <div className='banner__img-small'>
                    <img src={urlFor(mainBanner.mainBanner.imageSmall)} />
                </div>
            </div>
        </div>
    )
}

export default Main_banner