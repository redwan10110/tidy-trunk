import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ShopGrid = () => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isAddToCartOpen, setIsAddToCartOpen] = useState(false);
  const openQuickView = () => {
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
  };

  const openAddToCart = () => {
    setIsAddToCartOpen(true);
  };
  const closeAddToCart = () => {
    setIsAddToCartOpen(false);
  };
  return (
    <>
      {/* Breadcrumb section start */}
      <div
        className='py-0 '
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
                  SHOP
                </h2>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb section end */}
      <div>
        <div className='py-24'>
          <div className='container'>
            <div className='-mx-4 flex flex-col flex-wrap lg:flex-row'>
              <div id='shoptab' className='flex-1 px-4'>
                <div className='flex flex-wrap items-center justify-between'>
                  <div className='flex flex-wrap'>
                    <div className='shop-select mr-12 flex'>
                      <label htmlFor='SortBy'>Sort by :</label>
                      <select id='SortBy' className='bg-transparent px-2'>
                        <option defaultValue='manual'>Featured</option>
                        <option defaultValue='best-selling'>
                          Best Selling
                        </option>
                        <option defaultValue='title-ascending'>
                          Alphabetically, A-Z
                        </option>
                        <option defaultValue='title-descending'>
                          Alphabetically, Z-A
                        </option>
                        <option defaultValue='price-ascending'>
                          Price, low to high
                        </option>
                        <option defaultValue='price-descending'>
                          Price, high to low
                        </option>
                        <option defaultValue='created-descending'>
                          Date, new to old
                        </option>
                        <option defaultValue='created-ascending'>
                          Date, old to new
                        </option>
                      </select>
                    </div>
                    <p className='my-2 sm:my-0'>Showing 1 - 9 of 9 result</p>
                  </div>
                  <div>
                    <span>Show :</span>
                    <select className='bg-transparent'>
                      <option defaultValue='1'>1</option>
                      <option defaultValue='2'>2</option>
                      <option defaultValue='3'>3</option>
                      <option defaultValue='4'>4</option>
                    </select>
                  </div>
                  <div>
                    <ul className='shop-tab-nav flex flex-wrap'>
                      {/* <li>
                        <Link
                          href="#grid"
                          className="text-base hover:text-[#435c7f] inline-block py-2 px-2"
                        >
                          <i className="icon-grid"></i>
                        </Link>
                      </li>
                      <li className="text-[#435c7f]">
                        <Link
                          href="#list"
                          className="text-base hover:text-[#435c7f] inline-block py-2 px-2 ml-5"
                        >
                          <i className="icon-menu"></i>
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>

                <div className='mt-10'>
                  <div id='list' className='shop-tab-content active'>
                    <div className='-px-4 -mb-7 flex flex-wrap'>
                      <div className='mb-7 w-full px-4'>
                        <div className='hover:shadow-product group relative flex flex-col flex-wrap border border-solid border-gray-300 transition-all md:flex-row'>
                          <div className='relative overflow-hidden md:w-1/3'>
                            <span className='absolute right-3 top-3 inline-block px-2 py-1 text-sm font-medium uppercase leading-none text-black'>
                              Sale
                            </span>
                            <span className='absolute right-3 top-10 inline-block px-2 py-1 text-sm font-medium uppercase leading-none text-black'>
                              -11%
                            </span>
                            <Image
                              className='w-full md:absolute md:h-full md:object-cover'
                              src='/images/products/drone/product1.webp'
                              alt='product image'
                              loading='lazy'
                              width='432'
                              height='480'
                            />
                            {/* <!-- actions start --> */}

                            <div
                              className='absolute left-2/4 top-2/4 z-10 -translate-x-2/4 -translate-y-2/4 transform'
                              onClick={openQuickView}
                            >
                              <ul className='invisible flex translate-y-4 transform items-center justify-center bg-white opacity-0 shadow transition-all ease-linear group-hover:visible group-hover:-translate-y-0 group-hover:opacity-100'>
                                <li>
                                  <Link
                                    href='#modal-cart'
                                    className='text-dark text-md hover:text-orange modal-toggle flex items-center justify-center px-4 py-4'
                                    aria-label='quick veiw'
                                    data-tippy-content='Quick View'
                                  >
                                    <i className='icon-magnifier-add'></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            {/* <!-- actions end --> */}

                            {/* <!-- variants start --> */}

                            {/* <div className="p-2 bg-gray-200 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear">
                              <ul className="flex flex-wrap items-center justify-center mb-3">
                                <li className="mx-1 leading-none">
                                  <button className="text-sm">sm</button>
                                </li>
                                <li className="mx-1 leading-none">
                                  <button className="text-sm">l</button>
                                </li>
                                <li className="mx-1 leading-none">
                                  <button className="text-sm">m</button>
                                </li>
                                <li className="mx-1 leading-none">
                                  <button className="text-sm">xl</button>
                                </li>
                                <li className="mx-1 leading-none">
                                  <button className="text-sm">xxl</button>
                                </li>
                              </ul>
                              <ul className="flex flex-wrap items-center justify-center">
                                <li className="mx-1 leading-none">
                                  <button
                                    className="w-4 h-4 rounded-full bg-orange"
                                    aria-label="colors"
                                  ></button>
                                </li>
                                <li className="mx-1 leading-none">
                                  <button
                                    className="w-4 h-4 rounded-full bg-primary"
                                    aria-label="variants"
                                  ></button>
                                </li>
                                <li className="mx-1 leading-none">
                                  <button
                                    className="w-4 h-4 rounded-full bg-indigo-600"
                                    aria-label="variants"
                                  ></button>
                                </li>
                                <li className="mx-1 leading-none">
                                  <button
                                    className="w-4 h-4 rounded-full bg-dark"
                                    aria-label="variants"
                                  ></button>
                                </li>
                              </ul>
                            </div> */}

                            {/* <!-- variants end --> */}
                          </div>

                          <div className='flex-1 px-4 py-5'>
                            <h4>
                              <Link
                                className='text-md mb-2 block transition-all hover:text-[#435c7f]'
                                href='shop/123'
                              >
                                Batin crofessor pampden
                              </Link>
                            </h4>
                            <p className='text-sm'>
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or
                              randomised words which don't look even slightly
                              believable. If you are going to use a passage of
                              Lorem Ipsum, you need to be sure there isn't
                              anything embarrassing hidden in the middle of
                              text.
                            </p>

                            <h5 className='text-md mb-4 mt-4 font-bold leading-none text-[#435c7f]'>
                              <del className='mr-1 inline-block text-sm font-normal'>
                                $110.00
                              </del>
                              $130.00
                            </h5>

                            <ul className='flex items-center'>
                              {/* <li className="mr-2">
                                <Link
                                  href="whishlist.html"
                                  className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-[#435c7f] transition-all px-4 md:px-5 py-3 leading-none hover:border-orange"
                                  aria-label="Add to wishlist"
                                  data-tippy-content="Add to wishlist"
                                >
                                  <i className="icon-heart"></i>
                                </Link>
                              </li> */}
                              <li className='mr-2'>
                                <Link
                                  href='#modal-addto-cart'
                                  className='text-dark text-md border-dark hover:border-orange modal-toggle flex items-center justify-center border border-solid px-4 py-3 leading-none transition-all hover:bg-[#435c7f] hover:text-white md:px-5'
                                  aria-label='Add to cart'
                                  data-tippy-content='Add to cart'
                                  onClick={openAddToCart}
                                >
                                  <i className='icon-basket-loaded'></i>
                                  <span className='ml-2 text-sm'>
                                    Add to cart
                                  </span>
                                </Link>
                              </li>
                              {/* <li className="mr-2">
                                <Link
                                  href="compare.html"
                                  className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-[#435c7f] transition-all px-4 md:px-5 py-3 leading-none hover:border-orange"
                                  aria-label="Compare"
                                  data-tippy-content="Compare"
                                >
                                  <i className="icon-refresh"></i>
                                </Link>
                              </li> */}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-12'>
                  <ul className='pagination flex flex-wrap items-center justify-center'>
                    <li className='mx-2'>
                      <Link
                        className='flex h-11 w-11 flex-wrap  items-center justify-center bg-white leading-none text-[#435c7f] shadow transition-all hover:bg-[#435c7f] hover:text-white'
                        href='#'
                      >
                        <i className='icon-arrow-left'></i>
                      </Link>
                    </li>

                    <li className='mx-2'>
                      <Link
                        className='flex h-11 w-11 flex-wrap  items-center justify-center  bg-[#435c7f]  leading-none text-white shadow transition-all hover:bg-[#435c7f] hover:text-white'
                        href='#'
                      >
                        1
                      </Link>
                    </li>
                    <li className='mx-2'>
                      <Link
                        className='flex h-11 w-11 flex-wrap  items-center justify-center bg-white leading-none text-[#435c7f] shadow transition-all hover:bg-[#435c7f] hover:text-white'
                        href='#'
                      >
                        2
                      </Link>
                    </li>
                    <li className='mx-2'>
                      <Link
                        className='flex h-11 w-11 flex-wrap  items-center justify-center bg-white leading-none text-[#435c7f] shadow transition-all hover:bg-[#435c7f] hover:text-white'
                        href='#'
                      >
                        3
                      </Link>
                    </li>
                    <li className='mx-2'>
                      <Link
                        className='flex h-11 w-11 flex-wrap  items-center justify-center bg-white leading-none text-[#435c7f] shadow transition-all hover:bg-[#435c7f] hover:text-white'
                        href='#'
                      >
                        <i className='icon-arrow-right'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Quick View */}
      {/* <!-- modal-overlay start --> */}
      <div
        className={`modal-overlay ${
          isQuickViewOpen || isAddToCartOpen ? 'block' : 'hidden'
        } fixed inset-0 z-10 bg-black opacity-50`}
        onClick={() => {
          closeAddToCart();
          closeQuickView();
        }}
      ></div>
      {/* <!-- modal-overlay end --> */}
      {/* <!-- modal-mobile-menu start --> */}
      <div
        id='modal-cart'
        className={`modal md:max-w-1000 fixed left-8 right-8 top-1/2 z-40 hidden -translate-y-1/2 transform bg-white p-7 opacity-0 transition-opacity duration-300 ease-linear md:left-1/2 md:w-11/12 md:-translate-x-1/2 ${
          isQuickViewOpen ? 'modal-open' : ''
        }`}
      >
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='w-full'>
            <Image
              className='h-full w-full'
              src='/images/products/lg/product1.webp'
              alt='product image'
              loading='lazy'
              width='432'
              height='480'
            />
          </div>
          <div>
            <button
              className='modal-close absolute right-7 top-7 text-lg text-black'
              onClick={closeQuickView}
            >
              <i className='icon-close'></i>
            </button>

            <h3 className='text-dark text-md mb-4 font-medium leading-none lg:text-lg'>
              Airpod product kiebd
            </h3>
            <h5 className='text-md text-orange mb-8 font-bold leading-none'>
              $130.00
              <del className='mr-1 inline-block text-base font-normal'>
                $110.00
              </del>
            </h5>

            <p className='mb-5 text-sm'>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. All the Lorem Ipsum generators on the
              Internet tend to repeat predefined chunks as necessary,
            </p>

            {/* <select
              className="w-full h-12 border border-solid border-gray-300  px-5 py-2 appearance-none"
              style={{
                background:
                  'rgba(0,0,0,0) url("/images/icon/qcv-arrow-down.webp") no-repeat scroll right 20px center',
              }}
            >
              <option defaultValue="red">red</option>
              <option defaultValue="green">green</option>
              <option defaultValue="blue">blue</option>
            </select> */}

            <div className='mt-8 flex flex-wrap items-center'>
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
              <div className='ml-2 sm:ml-8'>
                <button className='h-11 bg-black px-5 py-4 text-sm font-normal leading-none text-white transition-all hover:bg-[#435c7f] md:px-8'>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- modal-mobile-menu end --> */}

      {/* Modal Add to cart */}
      {/* <!-- modal-overlay start --> */}

      {/* <!-- modal-overlay end --> */}
      {/* <!-- modal-mobile-menu start --> */}
      <div
        id='modal-addto-cart'
        className={`modal md:max-w-1000 fixed left-8 right-8 top-1/2 z-50 mx-auto hidden -translate-y-1/2 transform bg-white p-7 opacity-0 transition-opacity duration-300 ease-linear md:left-1/2 md:w-11/12 md:-translate-x-1/2 ${
          isAddToCartOpen ? 'modal-open' : ''
        }`}
      >
        <div className='md:flex md:flex-wrap'>
          <div className='md:flex-30 mb-5 md:mb-0 md:mr-5'>
            <Image
              className='w-full'
              src='/images/products/lg/product1.webp'
              alt='product image'
              loading='lazy'
              width='432'
              height='480'
            />
          </div>
          <div className='md:flex-auto'>
            <button className='modal-close absolute right-7 top-7 text-lg text-black'>
              <i className='icon-close' onClick={closeAddToCart}></i>
            </button>
            <h3 className='text-dark text-md mb-4 font-medium sm:text-lg'>
              Airpod product kiebd
            </h3>
            <p className='text-dark flex flex-wrap items-center text-sm'>
              <i className='icon-check mr-5 text-lg'></i> Added to cart
              successfully!
            </p>
            <div className='mt-8'>
              <a
                href='#'
                className='mr-5 bg-black px-5 py-2 text-sm font-normal leading-none text-white transition-all hover:bg-[#435c7f]'
              >
                View Cart
              </a>
              <a
                href='#'
                className='bg-black px-5 py-2 text-sm font-normal leading-none text-white transition-all hover:bg-[#435c7f]'
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- modal-mobile-menu end --> */}
    </>
  );
};

export default ShopGrid;
