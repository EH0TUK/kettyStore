import React from "react";
import { useStateContext } from "../context/StateContext";

const ModelColor = ({ productData }) => {
    const {SetColor} = useStateContext();
    if (productData != undefined) {
        return (
            <div class="info-color__element">
                <input onClick={() => SetColor(productData)} type="radio" id={productData} name="color" value="color-1" />
                <label for={productData}>
                    <span style={{backgroundColor: productData}}>
                    </span>
                </label>
            </div>
        )
    }
    else return null
}

export default ModelColor