import React from "react";
import { urlFor } from "../lib/client";

const Main_instagram = ( instagramBanner ) => {
    return (
        <div className='main__instagram'>
            <div className='instagram__title text__title'>
                <p>instagram</p>
            </div>
            <div className='instagram__img'>
                <img className='instagram__img-edge' src={urlFor(instagramBanner.instagramBanner.imageSmall_1)} />
                <img className='instagram__img-center' src={urlFor(instagramBanner.instagramBanner.imageMedium_1)} />
                <img className='instagram__img-center' src={urlFor(instagramBanner.instagramBanner.imageMedium_2)} />
                <img className='instagram__img-center-inv' src={urlFor(instagramBanner.instagramBanner.imageMedium_3)} />
                <img className='instagram__img-edge' src={urlFor(instagramBanner.instagramBanner.imageSmall_2)} />
            </div>
            <div className='instagram__subscribe simple__button'>
                <a href='https://www.instagram.com/'>Подписаться</a>
            </div>
        </div>
    )
}

export default Main_instagram