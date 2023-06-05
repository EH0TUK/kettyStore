import React from "react";
import { client } from '../lib/client';
import { CollectionsNames, Model, CatalogImg } from '../components';
import { useStateContext } from "../context/StateContext";

const Catalog = ({ CollectionsData, ProductData }) => {
    const { search, auth } = useStateContext();
    let check = ``
    if (ProductData?.map((productData) => productData.name.includes(search)).includes(true))
        check = ``
    else check = `Ничего не найдено...`
    return (
        <div className="main__catalog">
            {CollectionsData?.map((collectionsData) => <CatalogImg key={collectionsData._id} collectionsData={collectionsData} />)}
            <div className="catalog__body">
                <div div className="catalog__models">
                    {ProductData?.map((productData) => productData.name.includes(search) && <Model key={productData._id} productData={productData} />)}
                    <div className="catalog__nothing" >
                        {check}
                    </div>
                </div>
            </div>
        </div >
    )
}

export const getServerSideProps = async () => {
    const CollectionsQuery = '*[_type == "collections"]';
    const CollectionsData = await client.fetch(CollectionsQuery);

    const ProductQuery = '*[_type == "product"]';
    const ProductData = await client.fetch(ProductQuery);
    return {
        props: { CollectionsData, ProductData }
    }
}

export default Catalog