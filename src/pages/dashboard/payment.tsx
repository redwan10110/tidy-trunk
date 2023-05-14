import AdminLayout from '@/components/Dashboard/AdminLayout';

const payment = () => {
  return (
    <>
      <AdminLayout>
        <div id='payment-method' className='shop-tab-content'>
          <div className='border border-gray-600 p-8'>
            <h3 className='text-md mb-5 border-b border-gray-600 pb-5 font-semibold capitalize leading-none lg:text-lg'>
              Payment Method
            </h3>
            <p className='p-4 font-medium'>
              You Can't Saved Your Payment Method yet.{' '}
            </p>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default payment;
