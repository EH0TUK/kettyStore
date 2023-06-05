import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { urlFor } from "../lib/client";

const CatalogImg = ({ collectionsData }) => {
    const router = useRouter()
    if (router.query.slug == collectionsData.collectionID)
        return (
            <div className="catalog__collection-banner">
                <div className="collection__banner-image">
                    <img src={urlFor(collectionsData.image)} />
                </div>
                <div className="collection__banner-title">
                    <p>{collectionsData.collectionNameRus}</p>
                </div>
                <div className="collection__banner-desc">
                    <p>{collectionsData.collectionDesc}</p>
                </div>
            </div>
        )
    else return null
}

export default CatalogImg