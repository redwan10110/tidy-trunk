import Link from 'next/link';

const CheckOutCom = () => {
  return (
    <>
      {/* Breadcrumb section start */}
      <div
        className='py-0'
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
                  CHECKOUT
                </h2>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb section end */}

      <div className='py-24'>
        <div className='container'>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-12 lg:col-span-7'>
              <div>
                <h3 className='mb-5 text-lg font-semibold'>Billing Details</h3>
                <form
                  className='personal-information'
                  action='assets/php/contact.php'
                >
                  <div className='grid grid-cols-1 gap-x-5 lg:grid-cols-2'>
                    <div>
                      <div>
                        <label className='mb-3 inline-block'>First Name</label>
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          type='text'
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className='mb-3 inline-block'>Last Name</label>
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          type='text'
                        />
                      </div>
                    </div>
                    <div className='lg:col-span-2'>
                      <div>
                        <label className='mb-3 inline-block'>
                          Company Name
                        </label>
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          type='text'
                        />
                      </div>
                    </div>
                    <div className='lg:col-span-2'>
                      <div>
                        <label className='mb-3 inline-block'>Country</label>
                        <select className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 bg-transparent px-5 py-1 text-base placeholder-current focus:outline-none'>
                          <option>Select a country</option>
                          <option>Azerbaijan</option>
                          <option>Bahamas</option>
                          <option>Bahrain</option>
                          <option>Bangladesh</option>
                          <option>Barbados</option>
                        </select>
                      </div>
                    </div>
                    <div className='lg:col-span-2'>
                      <div>
                        <label className='mb-3 inline-block'>
                          Street Address
                        </label>
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          placeholder='House number and street name'
                          type='text'
                        />
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          placeholder='Apartment, suite, unit etc.'
                          type='text'
                        />
                      </div>
                    </div>
                    <div className='lg:col-span-2'>
                      <div>
                        <label className='mb-3 inline-block'>Town / City</label>
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          type='text'
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className='mb-3 inline-block'>
                          State / County
                        </label>
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          type='text'
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className='mb-3 inline-block'>
                          Postcode / ZIP
                        </label>
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          type='text'
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className='mb-3 inline-block'>Phone</label>
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          type='text'
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className='mb-3 inline-block'>
                          Email Address
                        </label>
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          type='text'
                        />
                      </div>
                    </div>
                  </div>
                </form>

                <div className='checkout-account mb-5'>
                  <input
                    id='id2'
                    className='checkout-toggle2'
                    type='checkbox'
                  />
                  <label htmlFor='id2'>Create an account?</label>
                </div>
                <div className='checkout-account-toggle open-toggle2 mb-30 hidden'>
                  <input
                    className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                    placeholder='Email address'
                    type='email'
                  />
                  <input
                    className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                    placeholder='Password'
                    type='password'
                  />
                  <button
                    className='bg-dark mb-5 px-6 py-4 text-center text-sm font-semibold uppercase leading-none text-white transition-all hover:bg-[#435c7f]'
                    type='submit'
                    aria-label='button'
                  >
                    register
                  </button>
                </div>
                <div className='additional-info-wrap'>
                  <h4 className='text-base font-semibold'>
                    Additional information
                  </h4>
                  <div className='additional-info'>
                    <label className='mb-3 inline-block'>Order notes</label>
                    <textarea
                      className='text-dark mb-5 h-36 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                      placeholder='Notes about your order, e.g. special notes for delivery.'
                      name='message'
                    ></textarea>
                  </div>
                </div>
                <div className='checkout-account mt-25'>
                  <input
                    id='ship'
                    className='checkout-toggle'
                    type='checkbox'
                  />
                  <label htmlFor='ship'>Ship to a different address?</label>
                </div>
                <div className='different-address open-toggle mt-5 hidden'>
                  <div className='grid grid-cols-1 gap-x-5 lg:grid-cols-2'>
                    <div>
                      <div>
                        <label className='mb-3 inline-block'>First Name</label>
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          type='text'
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className='mb-3 inline-block'>Last Name</label>
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          type='text'
                        />
                      </div>
                    </div>
                    <div className='lg:col-span-2'>
                      <div>
                        <label className='mb-3 inline-block'>
                          Company Name
                        </label>
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          type='text'
                        />
                      </div>
                    </div>
                    <div className='lg:col-span-2'>
                      <div>
                        <label className='mb-3 inline-block'>Country</label>
                        <select className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 bg-transparent px-5 py-1 text-base placeholder-current focus:outline-none'>
                          <option>Select a country</option>
                          <option>Azerbaijan</option>
                          <option>Bahamas</option>
                          <option>Bahrain</option>
                          <option>Bangladesh</option>
                          <option>Barbados</option>
                        </select>
                      </div>
                    </div>
                    <div className='lg:col-span-2'>
                      <div>
                        <label className='mb-3 inline-block'>
                          Street Address
                        </label>
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          placeholder='House number and street name'
                          type='text'
                        />
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          placeholder='Apartment, suite, unit etc.'
                          type='text'
                        />
                      </div>
                    </div>
                    <div className='lg:col-span-2'>
                      <div>
                        <label className='mb-3 inline-block'>Town / City</label>
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          type='text'
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className='mb-3 inline-block'>
                          State / County
                        </label>
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          type='text'
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className='mb-3 inline-block'>
                          Postcode / ZIP
                        </label>
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          type='text'
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className='mb-3 inline-block'>Phone</label>
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          type='text'
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className='mb-3 inline-block'>
                          Email Address
                        </label>
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          type='text'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-lg-0 col-span-12 mt-4 lg:col-span-5'>
              <div>
                <h3 className='mb-5 text-lg font-semibold'>Your order</h3>
                <div className='bg-gray-700 p-10'>
                  <div className='your-order-product-info'>
                    <ul className='flex flex-wrap items-center justify-between'>
                      <li className='text-base font-semibold'>Product</li>
                      <li className='text-base font-semibold'>Total</li>
                    </ul>
                    <ul className='my-5 border-b border-t border-gray-600 py-5'>
                      <li className='flex flex-wrap items-center justify-between'>
                        <span>Product Name X 1</span>
                        <span>$329 </span>
                      </li>
                      <li className='flex flex-wrap items-center justify-between'>
                        <span>Product Name X 1</span>
                        <span>$329 </span>
                      </li>
                    </ul>
                    <ul className='flex flex-wrap items-center justify-between'>
                      <li className='text-base font-semibold'>Shipping</li>
                      <li className='text-base font-semibold'>Free shipping</li>
                    </ul>
                    <ul className='my-5 flex flex-wrap items-center justify-between border-b border-t border-gray-600 py-5'>
                      <li className='text-base font-semibold'>Total</li>
                      <li className='text-base font-semibold'>$329</li>
                    </ul>
                  </div>
                  <div className='accordion'>
                    <div className='set mb-4'>
                      <button
                        className='active text-base font-semibold'
                        aria-label='button'
                      >
                        Direct bank transfer
                      </button>
                      <div className='content mt-3 overflow-hidden bg-white p-4'>
                        <p>
                          Please send a check to Store Name, Store Street, Store
                          Town, Store State / County, Store Postcode.
                        </p>
                      </div>
                    </div>
                    <div className='set mb-4'>
                      <button
                        className='text-base font-semibold'
                        aria-label='button'
                      >
                        Check payments
                      </button>
                      <div className='content mt-3 hidden overflow-hidden bg-white p-4'>
                        <p>
                          Please send a check to Store Name, Store Street, Store
                          Town, Store State / County, Store Postcode.
                        </p>
                      </div>
                    </div>
                    <div className='set mb-4'>
                      <button
                        className='text-base font-semibold'
                        aria-label='button'
                      >
                        Cash on delivery
                      </button>
                      <div className='content mt-3 hidden overflow-hidden bg-white p-4'>
                        <p>
                          Please send a check to Store Name, Store Street, Store
                          Town, Store State / County, Store Postcode.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <Link
                    className='block w-full bg-gray-800 px-5 py-5 text-center text-sm font-semibold uppercase leading-none text-white transition-all hover:bg-[#435c7f]'
                    href='#'
                  >
                    Place Order
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutCom;
