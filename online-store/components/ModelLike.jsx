import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";

const ModelLike = ({ productData: { image, name, price, model, priceRub } }) => {
    const { auth, country } = useStateContext();
    let priceBlock = ''
    if (auth == true) {
        if (country == 'Беларусь') {
            priceBlock = `${price} бел. руб.`
        } else {
            priceBlock = `${priceRub} руб.`
        }
    }
    return (
        <Link href={`/model/${model?.current}`}>
            <a className="model__body__like">
                <div className="model__favorite_like">

                </div>
                <div className="model__img__like">
                    <img src={urlFor(image[0])}></img>
                </div>
                <div className="model__name__like">
                    <p>{name}</p>
                </div>
                <div className="model__price__like">
                    <p>{priceBlock}</p>
                </div>
            </a>
        </Link>
    )
}

export default ModelLike