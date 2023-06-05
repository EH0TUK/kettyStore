import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Main_about = ( aboutBanner ) => {
    return (
        <div className='main__about'>
            <div className='about__description'>
                <div className='about__text'>
                    <div className='about-text__title text__title'>
                        <p>{aboutBanner.aboutBanner.mainText}</p>
                    </div>
                    <div className='about-text__description text__description'>
                        <p>{aboutBanner.aboutBanner.descText}</p>
                    </div>
                </div>
                <div className='about__read-more'>
                    <div className='about__button simple__button'>
                        <Link href='about'>Читать больше</Link>
                    </div>
                    <div className='about__medium-img'>
                        <img src={urlFor(aboutBanner.aboutBanner.imageSmall_1)} />
                    </div>
                    <div className='about__small-img'>
                        <img src={urlFor(aboutBanner.aboutBanner.imageSmall_2)} />
                    </div>
                </div>
            </div>
            <div className='about__main-imgs'>
                <div className='about__img-big'>
                    <img src={urlFor(aboutBanner.aboutBanner.imageBig)} />
                </div>
                <div className='about__img-small'>
                    <img src={urlFor(aboutBanner.aboutBanner.imageSmall_3)} />
                </div>
            </div>
        </div>
    )
}

export default Main_about