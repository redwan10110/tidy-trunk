import CheckOutCom from '@/components/Cart/CheckOut/CheckOutCom';
import Layout from '@/components/layout/Layout';

const checkout = () => {
  return (
    <>
      <Layout>
        <div className='mt-[80px] lg:mt-[70px]'>
          <CheckOutCom></CheckOutCom>
        </div>
      </Layout>
    </>
  );
};

export default checkout;
