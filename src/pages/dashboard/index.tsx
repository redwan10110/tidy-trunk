import Link from 'next/link';

import AdminLayout from '@/components/Dashboard/AdminLayout';

const index = () => {
  return (
    <>
      <AdminLayout>
        <div id='dashboad' className='shop-tab-content'>
          <div className='border border-gray-600 p-8'>
            <h3 className='text-md mb-5 border-b border-gray-600 pb-5 font-semibold capitalize leading-none lg:text-lg'>
              Dashboard
            </h3>
            <p>
              Hello, <strong>Alex Tuntuni</strong> (If Not
              <strong>Tuntuni ! </strong>
              <Link href='/login' className='hover:text-orange transition-all'>
                Logout
              </Link>
              )
            </p>
            <p>
              From your account dashboard. you can easily check &amp; view your
              recent orders, manage your shipping and billing addresses and edit
              your password and account details.
            </p>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default index;
