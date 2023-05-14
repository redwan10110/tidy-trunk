import Head from 'next/head';

import ShopGrid from '@/components/Shop/ShopGrid';

import Layout from '../../components/layout/Layout';

const Shop = () => {
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <Layout>
        <div className='mt-[80px] lg:mt-[70px]'>
          <ShopGrid></ShopGrid>
        </div>
      </Layout>
      <a
        id='scrollUp'
        className='bg-orange fixed bottom-16 right-5 z-10 flex h-12 w-12 flex-wrap items-center justify-center rounded-full text-white transition-all duration-300'
        href='#'
        aria-label='scroll up'
      >
        <i className='icon-arrow-up'></i>
      </a>
    </>
  );
};

export default Shop;
