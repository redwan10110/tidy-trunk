import ContactUs from '@/components/Contact/ContactUs';
import Layout from '@/components/layout/Layout';

const contact = () => {
  return (
    <>
      <Layout>
        <div className='mt-[80px] lg:mt-[70px]'>
          <ContactUs></ContactUs>
        </div>
      </Layout>
    </>
  );
};

export default contact;
