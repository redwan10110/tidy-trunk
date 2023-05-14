import Link from 'next/link';
import React from 'react';

import AdminLayout from '@/components/Dashboard/AdminLayout';

const address = () => {
  return (
    <>
      <AdminLayout>
        <div id='address' className='shop-tab-content'>
          <div className='border border-gray-600 p-8'>
            <h3 className='text-md mb-5 border-b border-gray-600 pb-5 font-semibold capitalize leading-none lg:text-lg'>
              Billing Address
            </h3>

            <address className='not-italic'>
              <p>
                <strong>Alex Tuntuni</strong>
              </p>
              <p>
                1355 Market St, Suite 900 <br />
                San Francisco, CA 94103
              </p>
              <p>Mobile: (123) 456-7890</p>
            </address>

            <Link href='#' className='hover:text-orange transition-all'>
              Edit Address
            </Link>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default address;
