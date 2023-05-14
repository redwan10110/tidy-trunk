import AboutUsCom from '@/components/AboutUs/AboutUsCom';
import Layout from '@/components/layout/Layout';

const aboutUs = () => {
  return (
    <>
      <Layout>
        <div className='mt-[80px] lg:mt-[70px]'>
          <AboutUsCom></AboutUsCom>
        </div>
      </Layout>
    </>
  );
};

export default aboutUs;
