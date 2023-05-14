import Image from 'next/image';
import Link from 'next/link';
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';

import ProductCarousel from './ProductCarousel';

const ProductsDetails = () => {
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
                  PRODUCT DETAILS
                </h2>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb section end */}

      <div className='py-24'>
        <div className='container'>
          <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
            <div>
              <div className='relative overflow-hidden'>
                <span className='absolute right-3 top-3 z-10 inline-block px-2 py-1 text-sm font-semibold uppercase  leading-none text-red-500 '>
                  Sale
                </span>
                {/* Here Product Slider */}
                <ProductCarousel></ProductCarousel>
                {/* <Swiper className="mySwiper mb-[30px]">
                  <SwiperSlide>
                    <Image
                      width={559}
                      height={621}
                      src="/images/single-product/lg/product1.webp"
                      alt="product image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={559}
                      height={621}
                      src="/images/single-product/lg/product2.webp"
                      alt="product image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={559}
                      height={621}
                      src="/images/single-product/lg/product3.webp"
                      alt="product image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={559}
                      height={621}
                      src="/images/single-product/lg/product4.webp"
                      alt="product image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={559}
                      height={621}
                      src="/images/single-product/lg/product5.webp"
                      alt="product image"
                    />
                  </SwiperSlide>
                </Swiper> */}

                {/* <div className="gallery-nav relative"> */}
                {/* <div className="">
                    <Swiper className="mySwiper" slidesPerView={4}>
                      <SwiperSlide className="">
                        <Link href="#">
                          <Image
                            width={132}
                            height={147}
                            src="/images/single-product/sm/product1.webp"
                            alt="product image"
                            className="swiper-slide-thumb-active"
                          />
                        </Link>
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <Link href="#">
                          <Image
                            width={132}
                            height={147}
                            src="/images/single-product/sm/product1.webp"
                            alt="product image"
                          />
                        </Link>
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <Link href="#">
                          <Image
                            width={132}
                            height={147}
                            src="/images/single-product/sm/product3.webp"
                            alt="product image"
                          />
                        </Link>
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <Link href="#">
                          <Image
                            width={132}
                            height={147}
                            src="/images/single-product/sm/product4.webp"
                            alt="product image"
                          />
                        </Link>
                      </SwiperSlide>
                      <SwiperSlide className="">
                        <Link href="#">
                          <Image
                            width={132}
                            height={147}
                            src="/images/single-product/sm/product5.webp"
                            alt="product image"
                          />
                        </Link>
                      </SwiperSlide>
                    </Swiper>
                  </div>  */}
                {/* <!-- If we need pagination --> */}
                {/* <!-- <div className="swiper-pagination"></div> --> */}
                {/* <div className="swiper-buttons">
                    <div className="swiper-button-prev right-auto left-4  w-8 h-8 rounded-full  border border-solid border-gray-500 text-sm text-dark opacity-100 transition-all hover:text-orange hover:border-orange">
                      <i className="ion-chevron-left"></i>
                    </div>
                    <div className="swiper-button-next left-auto right-4  w-8 h-8 rounded-full  border border-solid border-gray-500 text-sm text-dark opacity-100 transition-all hover:text-orange hover:border-orange">
                      <i className="ion-chevron-right"></i>
                    </div>
                  </div> */}
                {/* </div> */}
              </div>
            </div>

            <div>
              <h3 className='text-lg font-medium capitalize'>
                Airp Variable product
              </h3>
              <h5 className='text-md my-3 font-bold leading-none text-[#435c7f]'>
                <del className='mr-1 inline-block text-sm font-normal'>
                  $110.00
                </del>
                $130.00
              </h5>
              <div className='mb-3'>
                <span>Availability:</span>{' '}
                <span className='font-semibold'>9 left in stock</span>
              </div>
              <p className='mb-8'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>

              <div>
                <div className='mb-8'>
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

                <div className='mb-8 flex flex-wrap items-center justify-start'>
                  <Link
                    href='#'
                    className='text-md text-facebook hover:text-dark before:empty before:h-1px relative mr-10 leading-none transition  before:absolute before:left-7 before:top-1/2 before:w-4 before:-translate-y-1/2 before:bg-gray-900'
                  >
                    <i className='icon-social-facebook'></i>
                  </Link>
                  <Link
                    href='#'
                    className='text-md text-twitter hover:text-dark before:empty before:h-1px relative mr-10 leading-none transition  before:absolute before:left-7 before:top-1/2 before:w-4 before:-translate-y-1/2 before:bg-gray-900'
                  >
                    <i className='icon-social-twitter'></i>
                  </Link>
                  <Link
                    href='#'
                    className='text-md text-dribbble hover:text-dark before:empty before:h-1px relative mr-10 leading-none transition  before:absolute before:left-7 before:top-1/2 before:w-4 before:-translate-y-1/2 before:bg-gray-900'
                  >
                    <i className='icon-social-instagram'></i>
                  </Link>
                  <Link
                    href='#'
                    className='text-md text-pinterest hover:text-dark leading-none transition'
                  >
                    <i className='icon-social-youtube'></i>
                  </Link>
                  <div></div>
                </div>

                <div className='flex flex-wrap'>
                  <Link href='#' className='mr-2'>
                    <Image
                      width={38}
                      height={24}
                      src='/images/payment/amazon.svg'
                      alt='payment icon'
                    />
                  </Link>
                  <Link href='#' className='mr-2'>
                    <Image
                      width={38}
                      height={24}
                      src='/images/payment/apple-pay.svg'
                      alt='payment icon'
                    />
                  </Link>
                  <Link href='#' className='mr-2'>
                    <Image
                      width={38}
                      height={24}
                      src='/images/payment/bitcoin.svg'
                      alt='payment icon'
                    />
                  </Link>
                  <Link href='#' className='mr-2'>
                    <Image
                      width={38}
                      height={24}
                      src='/images/payment/google-pay.svg'
                      alt='payment icon'
                    />
                  </Link>
                  <Link href='#' className='mr-2'>
                    <Image
                      width={38}
                      height={24}
                      src='/images/payment/paypal.svg'
                      alt='payment icon'
                    />
                  </Link>
                  <Link href='#' className='mr-2'>
                    <Image
                      width={38}
                      height={24}
                      src='/images/payment/visa.svg'
                      alt='payment icon'
                    />
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

export default ProductsDetails;
