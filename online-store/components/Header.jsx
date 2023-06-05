import React from "react";
import Link from "next/link";
import { useStateContext } from '../context/StateContext';

const Header = () => {
    const { search, SetSearch } = useStateContext();

    return (
        <div className='header__container'>
            <div className='header__body'>
                <div role={'navigation'} className='header__menu'>
                    <div className='header__part-1 header__part'>
                        <input id='header__menu-toggle' type='checkbox' className='header__menu-checkbox' />
                        <label className='header__menu-btn' htmlFor='header__menu-toggle'>
                            <span className='header__menu-span'></span>
                        </label>
                        <div className='header__menu-items'>
                            <div className='header__collections'>
                                <a onClick={() => SetSearch('')} href='/catalog'>коллекции</a>
                                <div className="header__collections-category">
                                    <a onClick={() => SetSearch('')} href='/catalog/1'>осень 2023</a>
                                    <a onClick={() => SetSearch('')} href='/catalog/2'>лето 2023</a>
                                </div>
                            </div>
                            <div className='header__about'>
                                <a href='/about'>о бренде</a>
                            </div>
                        </div>
                    </div>
                    <div className='header__part-2 header__part'>
                        <div className='header__logo'>
                            <a href="/">
                                <p className='header__logo-max'>KETTY</p>
                                <img src='https://www.svgrepo.com/show/482584/dress-4.svg' alt='logo-min' className='header__logo-min' />
                            </a>
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
    )
}

export default Header