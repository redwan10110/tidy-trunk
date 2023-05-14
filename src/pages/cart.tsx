import CartComp from '@/components/Cart/Cart';
import Layout from '@/components/layout/Layout';

const Cart = () => {
  return (
    <>
      <Layout>
        <div className='mt-[80px] lg:mt-[70px]'>
          <CartComp></CartComp>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
