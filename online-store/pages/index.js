import React from 'react';
import { client } from '../lib/client';
import { Main_about, Main_banner, Main_instagram, Main_new_collection, CollectionsNames, Header, Footer } from '../components';
import Link from 'next/link';

const Home = ({ products, MainBannerData, NewBannerData, AboutBannerData, InstagramBannerData, CollectionsData }) => {
  
  return (
    <div className='main__container'>
      <div className='main__body'>
        <Main_banner mainBanner={MainBannerData.length && MainBannerData[0]} />
        <Main_new_collection newBanner={NewBannerData.length && NewBannerData[0]} />
        <Main_about aboutBanner={AboutBannerData.length && AboutBannerData[0]} />
        <Main_instagram instagramBanner={InstagramBannerData.length && InstagramBannerData[0]} />
      </div>
    </div>
  )
}

//{CollectionsData?.map((collectionsData) => <CollectionsNames key={collectionsData._id} collectionsData={collectionsData}/>)}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const mainBannerQuery = '*[_type == "main_banner"]';
  const MainBannerData = await client.fetch(mainBannerQuery);

  const newBannerQuery = '*[_type == "main_new_collection_banner"]';
  const NewBannerData = await client.fetch(newBannerQuery);

  const aboutBannerQuery = '*[_type == "main_about_banner"]';
  const AboutBannerData = await client.fetch(aboutBannerQuery);

  const instagramBannerQuery = '*[_type == "main_instagram_banner"]';
  const InstagramBannerData = await client.fetch(instagramBannerQuery);

  const CollectionsQuery = '*[_type == "collections"]';
  const CollectionsData = await client.fetch(CollectionsQuery);
  return {
    props: { products, MainBannerData, NewBannerData, AboutBannerData, InstagramBannerData, CollectionsData }
  }
}

export default Home