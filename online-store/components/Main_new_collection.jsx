import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Main_new_collection = ( newBanner ) => {
    return (
        <div className='main__new-collection'>
            <div className='new-collection__main-img'>
                <img src={urlFor(newBanner.newBanner.imageBig)} />
            </div>
            <div className='new-collection__description'>
                <div className='new-collection__text'>
                    <div className='new-collection-text__title text__title'>
                        <p>{newBanner.newBanner.mainText}</p>
                    </div>
                    <div className='new-collection__img-main'>
                        <img src={urlFor(newBanner.newBanner.imageBig)} />
                    </div>
                    <div className='new-collection-text__description text__description'>
                        <p>{newBanner.newBanner.descText}</p>
                    </div>
                </div>
                <div className='img__medium'>
                    <img src={urlFor(newBanner.newBanner.imageMedium)} />
                </div>
                <div className='img__small'>
                    <img src={urlFor(newBanner.newBanner.imageSmall)} />
                </div>
                <div className='new-collection__button simple__button'>
                    <Link href='catalog'>Перейти в каталог</Link>
                </div>
            </div>
        </div>
    )
}

export default Main_new_collection