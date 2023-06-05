import React from "react";
import { client, urlFor } from '../lib/client';

const About = (AboutData) => {
    return (
        <div className="about__body">
            <div className="about__body__first-block">
                <div className="first-block__title">
                    Кто мы такие.
                </div>
                <div className="first-block__subtitle">
                    Мы верим в мир, где у вас есть полная свобода быть самим собой, без осуждения. Чтобы поэкспериментировать. Чтобы выразить себя. Быть храбрым и воспринимать жизнь как необыкновенное приключение, каким она и является. Поэтому мы заботимся о том, чтобы у каждого был равный шанс открыть для себя все удивительные вещи, на которые он способен, – независимо от того, кто он, откуда родом и как выглядит в глазах начальства. Мы существуем для того, чтобы дать вам уверенность быть тем, кем вы хотите быть.
                </div>
                <div className="first-block__img">
                    <img src={urlFor(AboutData.AboutData[0].imageFirst)} />
                </div>
            </div>
            <div className="about__body__second-block">
                <div className="second-block__title">
                    Выбор для всех
                </div>
                <div className="second-block__subtitle">
                    Наша аудитория (вы) удивительно уникальна, и мы делаем все, что в наших силах, чтобы помочь вам найти то, что вам подходит. Мы предлагаем наши бренды более чем в 30 размерах – и мы стремимся предоставлять все размеры по одинаковой цене, – так что вы можете быть уверены, что у нас найдется для вас идеальная вещь.
                </div>
                <div className="second-block__img">
                    <img src={urlFor(AboutData.AboutData[0].imageSecond)} />
                </div>
            </div>
            <div className="about__body__third-block">
                <div className="third-block__title">
                    Body positivity
                </div>
                <div className="third-block__subtitle">
                    Для нас важно продвигать образ здорового тела – мы не стремимся соответствовать каким–либо стереотипам, - поэтому мы работаем с более чем 200 моделями, чтобы представлять нашу аудиторию. И мы также не занимаемся цифровым изменением их внешнего вида… здесь нет необходимости изменять форму или удалять растяжки. Наши модели являются частью семьи, и мы поддерживаем их, следуя образцовой политике социального обеспечения.
                </div>
                <div className="third-block__img">
                    <img src={urlFor(AboutData.AboutData[0].imageThird)} />
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const CollectionsQuery = '*[_type == "collections"]';
    const CollectionsData = await client.fetch(CollectionsQuery);

    const aboutQuery = '*[_type == "about"]';
    const AboutData = await client.fetch(aboutQuery);
    return {
        props: { CollectionsData, AboutData }
    }
}

export default About