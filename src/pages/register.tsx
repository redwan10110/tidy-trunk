import Layout from '@/components/layout/Layout';
import Register from '@/components/LoginRegister/Register';

const register = () => {
  return (
    <>
      <Layout>
        <div className='mt-[80px] lg:mt-[70px]'>
          <Register></Register>
        </div>
      </Layout>
    </>
  );
};

export default register;
