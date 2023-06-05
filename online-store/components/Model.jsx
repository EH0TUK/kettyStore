import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";

const Model = ({ productData: { image, name, price, model, collectionID, priceRub } }) => {
    const { auth, country } = useStateContext();
    let priceBlock = ''
    if (auth == true) {
        if (country == 'Беларусь') {
            priceBlock = `${price} бел. руб.`
        } else {
            priceBlock = `${priceRub} руб.`
        }
    }
    if (auth == true)
        return (
            <Link href={`/model/${model.current}`}>
                <a className="model__body">
                    <div className="model__favorite">

                    </div>
                    <div className="model__img">
                        <img src={urlFor(image[0])}></img>
                    </div>
                    <div className="model__name">
                        <p>{name}</p>
                    </div>

                    <div className="model__price">
                        <p>{priceBlock}</p>
                    </div>
                </a>
            </Link>
        )
    else return (
        <Link href={`/model/${model.current}`}>
            <a className="model__body">
                <div className="model__favorite">

                </div>
                <div className="model__img">
                    <img src={urlFor(image[0])}></img>
                </div>
                <div className="model__name">
                    <p>{name}</p>
                </div>
            </a>
        </Link>
    )
}

export default Model