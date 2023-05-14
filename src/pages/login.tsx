import Layout from '@/components/layout/Layout';
import Login from '@/components/LoginRegister/Login';

const login = () => {
  return (
    <>
      <Layout>
        <div className='mt-[80px] lg:mt-[70px]'>
          <Login></Login>
        </div>
      </Layout>
    </>
  );
};

export default login;
