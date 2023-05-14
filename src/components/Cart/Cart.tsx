import Image from 'next/image';
import Link from 'next/link';

const Cart = () => {
  return (
    <div>
      {/* <!-- Breadcrumb section start --> */}
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
                  SHOPPING CART
                </h2>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Breadcrumb section end --> */}

      <div className='py-24'>
        <div className='container'>
          <div className='grid grid-cols-1 gap-x-5'>
            <div className='overflow-x-auto'>
              <table className='w-full min-w-max'>
                <thead>
                  <tr>
                    <th className='border border-solid border-gray-600 bg-gray-300 p-3 text-center text-sm font-medium capitalize'>
                      Image
                    </th>
                    <th className='border border-solid border-gray-600 bg-gray-300 p-3 text-center text-sm font-medium capitalize'>
                      Product
                    </th>
                    <th className='border border-solid border-gray-600 bg-gray-300 p-3 text-center text-sm font-medium capitalize'>
                      Price
                    </th>
                    <th className='border border-solid border-gray-600 bg-gray-300 p-3 text-center text-sm font-medium capitalize'>
                      Quantity
                    </th>
                    <th className='border border-solid border-gray-600 bg-gray-300 p-3 text-center text-sm font-medium capitalize'>
                      Total
                    </th>
                    <th className='border border-solid border-gray-600 bg-gray-300 p-3 text-center text-sm font-medium capitalize'>
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='w-32 border border-solid border-gray-600 p-3 text-center'>
                      <Link href='#'>
                        {/* <Image
                          width={103}
                          height={115}
                          src="/images/single-product/sm/products10.webp"
                          alt="product image"
                        /> */}
                        <div className='h-[115px] w-[103px]'>
                          Gray Box is img BG
                        </div>
                      </Link>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <Link
                        href='#'
                        className='hover:text-orange transition-all'
                      >
                        Birpod product unsde
                      </Link>
                      <span>m / gold</span>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <span>
                        <span>$80.00</span>
                      </span>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <div className='count flex h-11 border border-solid border-gray-300 p-2'>
                        <button
                          className='decrement w-5 flex-auto leading-none'
                          aria-label='button'
                        >
                          -
                        </button>
                        <input
                          type='number'
                          min='1'
                          max='100'
                          step='1'
                          defaultValue='1'
                          className='quantity__input input-appearance-none w-8 flex-auto text-center focus:outline-none'
                        />
                        <button
                          className='increment w-5 flex-auto leading-none'
                          aria-label='button'
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <span>$80.00</span>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <Link
                        href='#'
                        className='hover:text-orange mx-1 inline-block transition-all'
                      >
                        <i className='icon-pencil'></i>
                      </Link>
                      <Link
                        href='#'
                        className='hover:text-orange mx-1 inline-block transition-all'
                      >
                        <i className='icon-close'></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className='w-32 border border-solid border-gray-600 p-3 text-center'>
                      <Link href='#'>
                        <Image
                          width={103}
                          height={115}
                          src='/images/single-product/sm/product2.webp'
                          alt='product image'
                        />
                      </Link>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <Link
                        href='#'
                        className='hover:text-orange transition-all'
                      >
                        Birpod product unsde
                      </Link>
                      <span>m / gold</span>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <span>
                        <span>$80.00</span>
                      </span>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <div className='count flex h-11 border border-solid border-gray-300 p-2'>
                        <button
                          className='decrement w-5 flex-auto leading-none'
                          aria-label='button'
                        >
                          -
                        </button>
                        <input
                          type='number'
                          min='1'
                          max='100'
                          step='1'
                          defaultValue='1'
                          className='quantity__input input-appearance-none w-8 flex-auto text-center focus:outline-none'
                        />
                        <button
                          className='increment w-5 flex-auto leading-none'
                          aria-label='button'
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <span>$80.00</span>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <Link
                        href='#'
                        className='hover:text-orange mx-1 inline-block transition-all'
                      >
                        <i className='icon-pencil'></i>
                      </Link>
                      <Link
                        href='#'
                        className='hover:text-orange mx-1 inline-block transition-all'
                      >
                        <i className='icon-close'></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className='w-32 border border-solid border-gray-600 p-3 text-center'>
                      <Link href='#'>
                        <Image
                          width={103}
                          height={115}
                          src='/images/single-product/sm/product3.webp'
                          alt='product image'
                        />
                      </Link>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <Link
                        href='#'
                        className='hover:text-orange transition-all'
                      >
                        Birpod product unsde
                      </Link>
                      <span>m / gold</span>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <span>
                        <span>$80.00</span>
                      </span>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <div className='count flex h-11 border border-solid border-gray-300 p-2'>
                        <button
                          className='decrement w-5 flex-auto leading-none'
                          aria-label='button'
                        >
                          -
                        </button>
                        <input
                          type='number'
                          min='1'
                          max='100'
                          step='1'
                          defaultValue='1'
                          className='quantity__input input-appearance-none w-8 flex-auto text-center focus:outline-none'
                        />
                        <button
                          className='increment w-5 flex-auto leading-none'
                          aria-label='button'
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <span>$80.00</span>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <Link
                        href='#'
                        className='hover:text-orange mx-1 inline-block transition-all'
                      >
                        <i className='icon-pencil'></i>
                      </Link>
                      <Link
                        href='#'
                        className='hover:text-orange mx-1 inline-block transition-all'
                      >
                        <i className='icon-close'></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className='w-32 border border-solid border-gray-600 p-3 text-center'>
                      <Link href='#'>
                        <Image
                          width={103}
                          height={115}
                          src='/images/single-product/sm/product4.webp'
                          alt='product image'
                        />
                      </Link>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <Link
                        href='#'
                        className='hover:text-orange transition-all'
                      >
                        Birpod product unsde
                      </Link>
                      <span>m / gold</span>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <span>
                        <span>$80.00</span>
                      </span>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <div className='count flex h-11 border border-solid border-gray-300 p-2'>
                        <button
                          className='decrement w-5 flex-auto leading-none'
                          aria-label='button'
                        >
                          -
                        </button>
                        <input
                          type='number'
                          min='1'
                          max='100'
                          step='1'
                          defaultValue='1'
                          className='quantity__input input-appearance-none w-8 flex-auto text-center focus:outline-none'
                        />
                        <button
                          className='increment w-5 flex-auto leading-none'
                          aria-label='button'
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <span>$80.00</span>
                    </td>
                    <td className='border border-solid border-gray-600 p-3 text-center'>
                      <Link
                        href='#'
                        className='hover:text-orange mx-1 inline-block transition-all'
                      >
                        <i className='icon-pencil'></i>
                      </Link>
                      <Link
                        href='#'
                        className='hover:text-orange mx-1 inline-block transition-all'
                      >
                        <i className='icon-close'></i>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- shipping  start --> */}
      <section className='pb-24'>
        <div className='container'>
          <div className='grid grid-cols-1 gap-x-5 lg:grid-cols-2'>
            <div>
              <div>
                <h3 className='text-md mb-8 font-semibold capitalize'>
                  calculate shipping
                </h3>
                <form action='#'>
                  <div className='grid grid-cols-1 gap-x-5 sm:grid-cols-2'>
                    <div className='col-span-2 sm:col-span-1'>
                      <select className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 bg-transparent px-5 py-1 text-base placeholder-current focus:outline-none'>
                        <option>Select country</option>
                        <option>Azerbaijan</option>
                        <option>Bahamas</option>
                        <option>Bahrain</option>
                        <option>Bangladesh</option>
                        <option>Barbados</option>
                      </select>
                    </div>

                    <div className='col-span-2 sm:col-span-1'>
                      <select className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 bg-transparent px-5 py-1 text-base placeholder-current focus:outline-none'>
                        <option>Select State</option>
                        <option>Azerbaijan</option>
                        <option>Bahamas</option>
                        <option>Bahrain</option>
                        <option>Bangladesh</option>
                        <option>Barbados</option>
                      </select>
                    </div>

                    <div className='col-span-2 sm:col-span-1'>
                      <input
                        className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                        placeholder='Postcode / ZIP'
                        type='text'
                      />
                    </div>

                    <div className='col-span-2 sm:col-span-1'>
                      <Link
                        href='#'
                        className='bg-dark mb-5 inline-block px-5 py-4 text-sm font-semibold uppercase leading-none text-white transition-all hover:bg-[#435c7f] hover:text-white sm:mb-0 md:px-8'
                      >
                        estimate
                      </Link>
                    </div>

                    <div className='col-span-2'>
                      <h3 className='text-md mb-8 font-semibold capitalize'>
                        Discount coupon Code
                      </h3>
                    </div>

                    <div className='col-span-2 sm:col-span-1'>
                      <input
                        className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                        placeholder='coupon Code'
                        type='text'
                      />
                    </div>

                    <div className='col-span-2 sm:col-span-1'>
                      <Link
                        href='#'
                        className='bg-dark mb-8 inline-block px-5 py-4 text-sm font-semibold uppercase leading-none text-white transition-all hover:bg-[#435c7f] hover:text-white sm:mb-0 md:px-8'
                      >
                        apply code
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='mt-4 lg:mt-0'>
              <div className='bg-gray-700 p-10'>
                <ul className='flex flex-wrap items-center justify-between'>
                  <li className='text-base font-semibold'>Product</li>
                  <li className='text-base font-semibold'>Total</li>
                </ul>

                <ul className='flex flex-wrap items-center justify-between'>
                  <li className='text-base font-semibold'>Shipping</li>
                  <li className='text-base font-semibold'>Free shipping</li>
                </ul>
                <div className='mt-5 border-b border-t border-gray-600 py-5'>
                  <ul className='flex flex-wrap items-center justify-between'>
                    <li className='text-base font-semibold'>Total</li>
                    <li className='text-base font-semibold text-black'>$329</li>
                  </ul>
                </div>
              </div>
              <div className='mt-8'>
                <Link
                  href='#'
                  className='bg-dark inline-block px-5 py-4 text-sm font-semibold uppercase leading-none text-white transition-all hover:bg-[#435c7f] hover:text-white md:px-8'
                >
                  Update Cart
                </Link>
                <Link
                  href='#'
                  className='bg-dark ml-4 inline-block px-5 py-4 text-sm font-semibold uppercase leading-none text-white transition-all hover:bg-[#435c7f] hover:text-white md:px-8'
                >
                  checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- shipping  end --> */}
    </div>
  );
};

export default Cart;
