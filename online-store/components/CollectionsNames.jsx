import React from "react";
import Link from "next/link";

const ColletionsNames = ({collectionsData}) => {
    return (
        <Link href={'/catalog/' + collectionsData.collectionID}>{collectionsData.collectionNameRus}</Link>
    )
}

export default ColletionsNames