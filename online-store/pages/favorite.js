import React from "react";
import { client } from '../lib/client';
import { useStateContext } from "../context/StateContext";
import { ModelLike } from '../components';

const Favorite = () => {
    const { favoriteItems } = useStateContext();
    return (
        <div className="main__favorite">
            {console.log(favoriteItems)}
            {favoriteItems?.map((favoriteItem) => <ModelLike key={favoriteItem._id} productData={favoriteItem} />)}
        </div>
    )
}

export const getServerSideProps = async () => {
    const CollectionsQuery = '*[_type == "collections"]';
    const CollectionsData = await client.fetch(CollectionsQuery);
    return {
        props: { CollectionsData }
    }
}

export default Favorite