import React, { createElement } from "react";
import { client, urlFor } from '../../lib/client';
import { ModelColor, ModelSize, ModelLike } from '../../components';
import { useStateContext } from "../../context/StateContext";
import { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { toast } from "react-hot-toast";

const Models = ({ CollectionsData, ProductData, ProductsData }) => {
    const { size, color, onAdd, onAddFavorite, auth, favoriteItems, country, SetColor } = useStateContext();
    const [index, setIndex] = useState(0);
    const [isActive, setIsActive] = useState(false);
    let img = ``
    let priceBlock = ''
    if (!favoriteItems?.find(item => item.model?.current === ProductData.model?.current))
        img = `/heart.svg`;
    else
        img = `/heartRed.svg`;
    const close = () => {
        setIsActive(current => !current);
    }
    if (auth == true) {
        if (country == 'Беларусь') {
            priceBlock = `${ProductData.price} бел. руб.`
        } else {
            priceBlock = `${ProductData.priceRub} руб.`
        }
    }
    else {
        priceBlock = `Чтобы увидеть цены войдите в аккаунт`
    }
    const basketAdd = () => {
        if (auth == 0) {
            toast.error(`Чтобы добавить товары в корзину войдите в аккаунт`)
            return
        }
        onAdd(ProductData, color, size, 1)
    }
    let order = new Map();
    order.set(1, 'first')
    order.set(2, 'second')
    order.set(3, 'third')
    order.set(4, 'fourth')
    order.set(5, 'fifth')
    const handleClick = event => {
        let order_now = event.currentTarget.className.split('__')[0];
        document?.getElementsByClassName(order.get(1))[0]?.style.display = 'none'
        document?.getElementsByClassName(order.get(2))[0]?.style.display = 'none'
        document?.getElementsByClassName(order.get(3))[0]?.style.display = 'none'
        document?.getElementsByClassName(order.get(4))[0]?.style.display = 'none'
        document?.getElementsByClassName(order.get(5))[0]?.style.display = 'none'
        document?.getElementsByClassName(order_now)[0]?.style.display = 'flex'
        SetColor(event.currentTarget.className.split('__')[1])
    };
    return (
        <div className="main__model__body">
            <div className="main__model">
                <div className="model__images first">
                    <div className="model__images-small">
                        {ProductData.image.slice(0, 4)?.map((item, i) => (
                            <img
                                key={i}
                                src={urlFor(item)}
                                className={i === index ? 'small-image selected-image' : 'small-image'}
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                    <div className="model__images-big">
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: urlFor(ProductData?.image && ProductData?.image[index]),
                            },
                            largeImage: {
                                src: urlFor(ProductData?.image && ProductData?.image[index]),
                                width: 840,
                                height: 1160,
                            },
                            enlargedImagePosition: 'over'
                        }} />
                    </div>
                </div>
                <div className="model__images second">
                    <div className="model__images-small">
                        {ProductData.image.slice(4, 8)?.map((item, i) => (
                            <img
                                key={i}
                                src={urlFor(item)}
                                className={i === index ? 'small-image selected-image' : 'small-image'}
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                    <div className="model__images-big">
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: ProductData.image.length > 7 ? urlFor(ProductData?.image && ProductData?.image[index + 4]) : '',
                            },
                            largeImage: {
                                src: ProductData.image.length > 7 ? urlFor(ProductData?.image && ProductData?.image[index + 4]) : '',
                                width: 840,
                                height: 1160,
                            },
                            enlargedImagePosition: 'over'
                        }} />
                    </div>
                </div>
                <div className="model__images third">
                    <div className="model__images-small">
                        {ProductData.image.slice(8, 12)?.map((item, i) => (
                            <img
                                key={i}
                                src={urlFor(item)}
                                className={i === index ? 'small-image selected-image' : 'small-image'}
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                    <div className="model__images-big">
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: ProductData.image.length > 11 ? urlFor(ProductData?.image && ProductData?.image[index + 8]) : '',
                            },
                            largeImage: {
                                src: ProductData.image.length > 11 ? urlFor(ProductData?.image && ProductData?.image[index + 8]) : '',
                                width: 840,
                                height: 1160,
                            },
                            enlargedImagePosition: 'over'
                        }} />
                    </div>
                </div>
                <div className="model__images fourth">
                    <div className="model__images-small">
                        {ProductData.image.slice(12, 16)?.map((item, i) => (
                            <img
                                key={i}
                                src={urlFor(item)}
                                className={i === index ? 'small-image selected-image' : 'small-image'}
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                    <div className="model__images-big">
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: ProductData.image.length > 15 ? urlFor(ProductData?.image && ProductData?.image[index + 12]) : '',
                            },
                            largeImage: {
                                src: ProductData.image.length > 15 ? urlFor(ProductData?.image && ProductData?.image[index + 12]) : '',
                                width: 840,
                                height: 1160,
                            },
                            enlargedImagePosition: 'over'
                        }} />
                    </div>
                </div>
                <div className="model__images fifth">
                    <div className="model__images-small">
                        {ProductData.image.slice(16, 20)?.map((item, i) => (
                            <img
                                key={i}
                                src={urlFor(item)}
                                className={i === index ? 'small-image selected-image' : 'small-image'}
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                    <div className="model__images-big">
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: ProductData.image.length > 19 ? urlFor(ProductData?.image && ProductData?.image[index + 16]) : '',
                            },
                            largeImage: {
                                src: ProductData.image.length > 19 ? urlFor(ProductData?.image && ProductData?.image[index + 16]) : '',
                                width: 840,
                                height: 1160,
                            },
                            enlargedImagePosition: 'over'
                        }} />
                    </div>
                </div>
                <div className="model__info">
                    <div className="model__info-article">
                        {ProductData.model.current}
                    </div>
                    <div className="model__info-name">
                        {ProductData.name}
                    </div>
                    <div className="model__info-price">
                        <a href="/authorization">{priceBlock}</a>
                    </div>
                    <div className="model__info-color">
                        {ProductData.colors?.map((productData, index) =>
                            <div class="info-color__element">
                                <input key={ProductData.model.current + '__' + productData} className={order.get(index + 1) + '__' + productData} onClick={handleClick} type="radio" id={productData} name="color" value="color-1" />
                                <label for={productData}>
                                    <span style={{ backgroundColor: productData }}>
                                    </span>
                                </label>
                            </div>)}
                    </div>

                    <div className="model__info-size">
                        {ProductData.sizes?.map((productData) => <ModelSize key={ProductData.model.current + '__' + productData} productData={productData} />)}
                    </div>
                    <div className="model__table-size">
                        <button className="model__button" onClick={close}>таблица размеров</button>
                        <div className="model__popup"
                            style={{
                                opacity: isActive ? 1 : '',
                                visibility: isActive ? 'visible' : '',
                            }}>
                            <div className="popup__body">
                                <div className="popup__content">
                                    <img className="table__image" src="/size.png" />
                                    <button onClick={close} className="table__close"><img src="/close.svg" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="model__info-add">
                        <div className="model__info-add-basket">
                            <button type="button" className="add-basket__button" onClick={basketAdd}>
                                Добавить в корзину
                            </button>
                        </div>
                        <div className="model__info-add-favorite">
                            <button type="button" className="add-favorite__button" onClick={() => onAddFavorite(ProductData)}>
                                <img className="add-favorite__button-img" src={img} />
                            </button>
                        </div>
                    </div>
                    <div className="model__info-desc">
                        <div className="model__info-desc-title">
                            описание
                        </div>
                        <div className="model__info-desc-text">
                            {ProductData.description}
                        </div>
                    </div>
                    <div className="model__info-materials">
                        <div className="model__info-materials-title">
                            состав и уход
                        </div>
                        <div className="model__info-materials-text">
                            {ProductData.materials}
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__like">
                <div className="like__title">
                    вам может понравиться:
                </div>
                <div className="like__model">
                    {ProductsData?.map((productData) => ProductData.like.includes(Number(productData.model.current)) && <ModelLike key={productData._id} productData={productData} />)}
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        model {
            current
        }
    }`;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            model: product.model.current.toString()
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { model } }) => {
    const ProductQuery = `*[_type == "product" && model.current == '${model}'][0]`;
    const ProductData = await client.fetch(ProductQuery);

    const ProductsQuery = '*[_type == "product"]';
    const ProductsData = await client.fetch(ProductsQuery);

    const CollectionsQuery = '*[_type == "collections"]';
    const CollectionsData = await client.fetch(CollectionsQuery);

    return {
        props: { CollectionsData, ProductData, ProductsData }
    }
}

export default Models