import Link from 'next/link';

import AdminLayout from '@/components/Dashboard/AdminLayout';

const orders = () => {
  return (
    <>
      <AdminLayout>
        <div id='orders' className='shop-tab-content'>
          <div className='border border-gray-600 p-8'>
            <h3 className='text-md mb-5 border-b border-gray-600 pb-5 font-semibold capitalize leading-none lg:text-lg'>
              Orders
            </h3>

            <div className='overflow-x-auto'>
              <table className='w-full min-w-max'>
                <thead>
                  <tr>
                    <th className='bg-gray-light border border-solid border-gray-600 p-3 text-center text-base font-semibold'>
                      No
                    </th>
                    <th className='bg-gray-light border border-solid border-gray-600 p-3 text-center text-base font-semibold'>
                      Name
                    </th>
                    <th className='bg-gray-light border border-solid border-gray-600 p-3 text-center text-base font-semibold'>
                      Date
                    </th>
                    <th className='bg-gray-light border border-solid border-gray-600 p-3 text-center text-base font-semibold'>
                      Status
                    </th>
                    <th className='bg-gray-light border border-solid border-gray-600 p-3 text-center text-base font-semibold'>
                      Total
                    </th>
                    <th className='bg-gray-light border border-solid border-gray-600 p-3 text-center text-base font-semibold'>
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                      1
                    </td>
                    <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                      Mostarizing Oil
                    </td>
                    <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                      Aug 22, 2018
                    </td>
                    <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                      Pending
                    </td>
                    <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                      $45
                    </td>
                    <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                      <Link
                        href='shopping-cart.html'
                        className='ht-btn black-btn'
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                      2
                    </td>
                    <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                      Katopeno Altuni
                    </td>
                    <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                      July 22, 2018
                    </td>
                    <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                      Approved
                    </td>
                    <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                      $100
                    </td>
                    <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                      <Link
                        href='shopping-cart.html'
                        className='ht-btn black-btn'
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                      3
                    </td>
                    <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                      Murikhete Paris
                    </td>
                    <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                      June 12, 2017
                    </td>
                    <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                      On Hold
                    </td>
                    <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                      $99
                    </td>
                    <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                      <Link
                        href='shopping-cart.html'
                        className='ht-btn black-btn'
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default orders;
