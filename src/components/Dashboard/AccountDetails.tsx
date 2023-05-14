import Link from 'next/link';

const AccountDetails = () => {
  return (
    <>
      {/* Breadcrumb section start */}
      <div
        className='bg-gray-light py-5'
        style={{
          backgroundImage: "url('/images/GreyBar.png')",
          backgroundPosition: 'center',
        }}
      >
        <div className='container'>
          <div className='grid grid-cols-12 gap-x-4'>
            <div className='col-span-12'>
              <nav>
                <ul className='flex flex-wrap items-center justify-center'>
                  <li className='mr-5'>
                    <Link
                      href='/'
                      className='text-dark before:h-1px before:empty before:bg-dark before:rotate-115 relative text-base font-medium uppercase transition-all before:absolute before:-right-5 before:top-3 before:w-5 before:transform hover:text-[#435c7f]'
                    >
                      Home
                    </Link>
                  </li>
                  <li className='text-dark mr-5 text-base font-medium uppercase'>
                    account Page
                  </li>
                </ul>
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
                <li>
                  <Link
                    className='hover:bg-orange block border-l border-r border-t border-gray-600 px-5 py-4  text-base font-medium uppercase leading-none transition-all hover:text-white'
                    href='#dashboad'
                  >
                    dashboad
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:bg-orange block border-l border-r border-t border-gray-600 px-5 py-4  text-base font-medium uppercase leading-none transition-all hover:text-white'
                    href='#orders'
                  >
                    orders
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:bg-orange block border-l border-r border-t border-gray-600 px-5 py-4  text-base font-medium uppercase leading-none transition-all hover:text-white'
                    href='#download'
                  >
                    download
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:bg-orange block border-l border-r border-t border-gray-600 px-5 py-4  text-base font-medium uppercase leading-none transition-all hover:text-white'
                    href='#payment-method'
                  >
                    payment method
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:bg-orange block border-l border-r border-t border-gray-600 px-5 py-4  text-base font-medium uppercase leading-none transition-all hover:text-white'
                    href='#address'
                  >
                    address
                  </Link>
                </li>
                <li className='active'>
                  <Link
                    className='block border-l border-r border-t border-gray-600 px-5 py-4 text-base  font-medium uppercase leading-none transition-all hover:bg-[#435c7f] hover:text-white'
                    href='#account'
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
              <div>
                <div id='dashboad' className='shop-tab-content'>
                  <div className='border border-gray-600 p-8'>
                    <h3 className='text-md mb-5 border-b border-gray-600 pb-5 font-semibold capitalize leading-none lg:text-lg'>
                      Dashboard
                    </h3>
                    <p>
                      Hello, <strong>Alex Tuntuni</strong> (If Not
                      <strong>Tuntuni ! </strong>
                      <Link
                        href='login-register.html'
                        className='hover:text-orange transition-all'
                      >
                        Logout
                      </Link>
                      )
                    </p>
                    <p>
                      From your account dashboard. you can easily check &amp;
                      view your recent orders, manage your shipping and billing
                      addresses and edit your password and account details.
                    </p>
                  </div>
                </div>
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
                <div id='download' className='shop-tab-content'>
                  <div className='border border-gray-600 p-8'>
                    <h3 className='text-md mb-5 border-b border-gray-600 pb-5 font-semibold capitalize leading-none lg:text-lg'>
                      Downloads
                    </h3>
                    <div className='overflow-x-auto'>
                      <table className='w-full min-w-max'>
                        <thead>
                          <tr>
                            <th className='bg-gray-light border border-solid border-gray-600 p-3 text-center text-base font-semibold'>
                              Product
                            </th>
                            <th className='bg-gray-light border border-solid border-gray-600 p-3 text-center text-base font-semibold'>
                              Date
                            </th>
                            <th className='bg-gray-light border border-solid border-gray-600 p-3 text-center text-base font-semibold'>
                              Expire
                            </th>
                            <th className='bg-gray-light border border-solid border-gray-600 p-3 text-center text-base font-semibold'>
                              Download
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                              Mostarizing Oil
                            </td>
                            <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                              Aug 22, 2018
                            </td>
                            <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                              Yes
                            </td>
                            <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                              <Link href='#' className='ht-btn black-btn'>
                                Download File
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                              Katopeno Altuni
                            </td>
                            <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                              Sep 12, 2018
                            </td>
                            <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                              Never
                            </td>
                            <td className='border border-solid border-gray-600 px-3 py-5 text-center align-middle'>
                              <Link href='#' className='ht-btn black-btn'>
                                Download File
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
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
                <div id='account' className='shop-tab-content active'>
                  <div className='border border-gray-600 p-8'>
                    <h3 className='text-md mb-5 border-b border-gray-600 pb-5 font-semibold capitalize leading-none lg:text-lg'>
                      Account Details
                    </h3>
                    <form action='#'>
                      <div className='grid grid-cols-12 gap-x-5'>
                        <div className='col-span-12 mb-5 lg:col-span-6'>
                          <input
                            className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                            id='first-name'
                            placeholder='First Name'
                            type='text'
                          />
                        </div>

                        <div className='col-span-12 mb-5 lg:col-span-6'>
                          <input
                            className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                            id='last-name'
                            placeholder='Last Name'
                            type='text'
                          />
                        </div>

                        <div className='col-span-12 mb-5'>
                          <input
                            className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                            id='display-name'
                            placeholder='Display Name'
                            type='text'
                          />
                        </div>

                        <div className='col-span-12 mb-5'>
                          <input
                            className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                            id='email'
                            placeholder='Email Address'
                            type='email'
                          />
                        </div>

                        <div className='col-span-12 mb-5'>
                          <h4 className='text-base font-semibold capitalize'>
                            Password change
                          </h4>
                        </div>

                        <div className='col-span-12 mb-5'>
                          <input
                            className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                            id='current-pwd'
                            placeholder='Current Password'
                            type='password'
                          />
                        </div>

                        <div className='col-span-12 mb-5 lg:col-span-6'>
                          <input
                            className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                            id='new-pwd'
                            placeholder='New Password'
                            type='password'
                          />
                        </div>

                        <div className='col-span-12 mb-5 lg:col-span-6'>
                          <input
                            className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                            id='confirm-pwd'
                            placeholder='Confirm Password'
                            type='password'
                          />
                        </div>

                        <div className='col-span-12'>
                          <button
                            className='inline-block bg-gray-800 px-5 py-5 text-sm uppercase leading-none text-white transition-all hover:bg-[#435c7f]'
                            aria-label='Save Changes'
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
