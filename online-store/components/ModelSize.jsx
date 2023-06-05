import React from "react";
import { useStateContext } from "../context/StateContext";

const ModelSize = ( {productData} ) => {
    const {SetSize} = useStateContext();
    return (
        <div class="info-size__element">
            <input onClick={() => SetSize(productData)} type="radio" id={productData} name="size" />
            <label for={productData}>
                <span>
                    <p>
                        {productData}
                    </p>
                </span>
            </label>
        </div>
    )
}

export default ModelSize