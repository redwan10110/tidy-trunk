import Link from 'next/link';
import { useRouter } from 'next/router';

import Layout from '../layout/Layout';

const AdminLayout = ({ children }) => {
  const { asPath } = useRouter();
  const isActiveRoute = (pathname) => {
    return asPath === pathname;
  };
  return (
    <>
      <Layout>
        <div className='mt-[80px] lg:mt-[70px]'>
          {/* Breadcrumb section start */}
          <div
            className='bg-gray-light py-0'
            style={{
              backgroundImage: "url('/images/GreyBar.png')",
              backgroundPosition: 'center',
            }}
          >
            <div className='container'>
              <div className='grid grid-cols-12 gap-x-4'>
                <div className='col-span-12'>
                  <nav>
                    <h2 className='mb-[-10px] ml-0 text-[25px] lg:ml-[160px] lg:text-[30px]'>
                      MY ACCOUNT
                    </h2>
                    {/* <ul className="flex flex-wrap items-center justify-center">
                      <li className="mr-5">
                        <Link
                          href="/"
                          className="text-dark font-medium text-base uppercase transition-all hover:text-[#435c7f] relative before:w-5 before:h-1px before:empty before:absolute before:top-3 before:bg-dark before:transform before:rotate-115 before:-right-5"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="text-dark font-medium text-base uppercase mr-5">
                        account Page
                      </li>
                    </ul> */}
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Breadcrumb section end  */}

          <div className='mt-16 pb-24'>
            <div className='container'>
              <div
                id='shoptab'
                className='grid grid-cols-12 gap-x-5 gap-y-5 lg:gap-y-0'
              >
                <div className='col-span-12 lg:col-span-4'>
                  <ul className='shop-tab-nav account-nav flex flex-col flex-wrap'>
                    <li className={isActiveRoute('/dashboard') ? 'active' : ''}>
                      <Link
                        className='block border-l border-r border-t border-gray-600 px-5 py-4 text-base font-medium uppercase leading-none transition-all hover:bg-[#435c7f] hover:text-white'
                        href='/dashboard'
                      >
                        dashboad
                      </Link>
                    </li>
                    <li
                      className={
                        isActiveRoute('/dashboard/orders') ? 'active' : ''
                      }
                    >
                      <Link
                        className='block border-l border-r border-t border-gray-600 px-5 py-4 text-base  font-medium uppercase leading-none transition-all hover:bg-[#435c7f] hover:text-white'
                        href='/dashboard/orders'
                      >
                        orders
                      </Link>
                    </li>
                    <li
                      className={
                        isActiveRoute('/dashboard/payment') ? 'active' : ''
                      }
                    >
                      <Link
                        className='block border-l border-r border-t border-gray-600 px-5 py-4 text-base  font-medium uppercase leading-none transition-all hover:bg-[#435c7f] hover:text-white'
                        href='/dashboard/payment'
                      >
                        payment method
                      </Link>
                    </li>
                    <li
                      className={
                        isActiveRoute('/dashboard/address') ? 'active' : ''
                      }
                    >
                      <Link
                        className='block border-l border-r border-t border-gray-600 px-5 py-4 text-base  font-medium uppercase leading-none transition-all hover:bg-[#435c7f] hover:text-white'
                        href='/dashboard/address'
                      >
                        address
                      </Link>
                    </li>
                    <li
                      className={
                        isActiveRoute('/dashboard/account') ? 'active' : ''
                      }
                    >
                      <Link
                        className='block border-l border-r border-t border-gray-600 px-5 py-4 text-base  font-medium uppercase leading-none transition-all hover:bg-[#435c7f] hover:text-white'
                        href='/dashboard/account'
                      >
                        {' '}
                        Account Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        className='block border-b border-l border-r border-t border-gray-600 px-5 py-4  text-base font-medium uppercase leading-none transition-all hover:bg-[#435c7f] hover:text-white'
                        href='/login'
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='col-span-12 lg:col-span-8'>
                  <div>{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdminLayout;
