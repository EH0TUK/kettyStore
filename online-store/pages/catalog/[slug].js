import React from "react";
import { client } from '../../lib/client';
import { CollectionsNames, Model, CatalogImg } from '../../components';
import { useRouter } from "next/router";

const Catalog = ({ CollectionsData, ProductData }) => {
    const router = useRouter()
    return (
        <div className="main__catalog">
            {CollectionsData?.map((collectionsData) => <CatalogImg key={collectionsData._id} collectionsData={collectionsData} />)}
            <div className="catalog__body">
                {/*
                <div className="catalog__categories">
                    {CollectionsData?.map((collectionsData) => <CollectionsNames key={collectionsData._id} collectionsData={collectionsData} />)}
                </div>
                */}
                <div div className="catalog__models">
                    {ProductData?.map((productData) => productData.collectionID == router.query.slug && <Model key={productData._id} productData={productData} />)}
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