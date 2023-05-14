import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const LandingPage = () => {
  return (
    <>
      {/* Hero Start*/}
      <section className='hero-section relative bg-sky-200'>
        <div className='hero-slider overflow-hidden'>
          <div className='mySwiper'>
            <Swiper className='mySwiper'>
              {/* <!-- swiper-slide start --> */}
              <SwiperSlide
                className='swiper-slide 2xl:h-800 lg:h-700px flex flex-wrap items-center bg-sky-100 bg-cover bg-left-bottom bg-no-repeat px-4  py-40 md:px-10 lg:py-20 2xl:px-24'
                style={{
                  backgroundImage:
                    "url('/images/TidyTrunk_landingpage-02.png')",
                  width: '100%',
                  height: '700px',
                }}
              >
                {/* <div className="container">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                      <div className="flex flex-col md:flex-row items-center justify-between w-full">
                        <div className="flex-grow">
                          <div className="slider-content">
                            <span className="text-lg font-normal text-orange block mb-3">
                              Smart Bag Collections
                            </span>
                            <h1 className="font-playfair font-bold text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-2xl mb-5 inline-block md:block">
                              Smart Backpack
                            </h1>
                            <h2 className="font-playfair font-bold text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-2xl mb-7 inline-block md:block">
                              Minimal Store
                            </h2>
                            <p className="font-normal text-primary text-sm lg:text-md">
                              Experience the decibels like your ears deserve to.
                              Safe for the <br className="hidden lg:block" />{" "}
                              ears, very for the heart. A treat to your ears.
                            </p>
                            <div className="inline-block mt-12">
                              <Link
                                className="flex flex-wrap items-center bg-gray-800 transition-all hover:bg-[#435c7f] hover:text-white px-3 md:px-4 xl:px-10 py-3 md:py-4 xl:py-5 rounded-full text-white capitalize font-medium text-sm lg:text-md leading-normal"
                                href="/shop"
                              >
                                Explore More
                                <i className="icon-basket-loaded ml-3 xl:ml-5"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </SwiperSlide>
              {/* <!-- swiper-slide end--> */}

              {/* <!-- swiper-slide start --> */}
              <SwiperSlide
                className='swiper-slide 2xl:h-800 lg:h-700px flex flex-wrap items-center bg-sky-100 bg-cover bg-left-bottom bg-no-repeat px-4  py-20 md:px-10 lg:py-20 2xl:px-24'
                style={{
                  backgroundImage:
                    "url('/images/TidyTrunk_landingpage-03.png')",
                  height: '700px',
                }}
              >
                {/* <div className="container">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                      <div className="flex flex-col md:flex-row items-center justify-between w-full">
                        <div className="flex-grow">
                          <div className="slider-content">
                            <span className="text-lg font-normal text-orange block mb-3">
                              Smart Bag Collections
                            </span>
                            <h1 className="font-playfair font-bold text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-2xl mb-5 inline-block md:block">
                              Smart Backpack
                            </h1>
                            <h2 className="font-playfair font-bold text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-2xl mb-7 inline-block md:block">
                              Minimal Store
                            </h2>
                            <p className="font-normal text-primary text-sm lg:text-md">
                              Experience the decibels like your ears deserve to.
                              Safe for the <br className="hidden lg:block" />{" "}
                              ears, very for the heart. A treat to your ears.
                            </p>
                            <div className="inline-block mt-12">
                              <Link
                                className="flex flex-wrap items-center bg-gray-800 transition-all hover:bg-[#435c7f] hover:text-white px-3 md:px-4 xl:px-10 py-3 md:py-4 xl:py-5 rounded-full text-white capitalize font-medium text-sm lg:text-md leading-normal"
                                href="shop-grid-3-column.html"
                              >
                                Explore More
                                <i className="icon-basket-loaded ml-3 xl:ml-5"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </SwiperSlide>
              {/* <!-- swiper-slide end--> */}

              {/* <!-- swiper-slide start --> */}
              <SwiperSlide
                className='swiper-slide 2xl:h-800 lg:h-700px flex flex-wrap items-center bg-sky-100 bg-cover bg-left-bottom bg-no-repeat px-4  py-20 md:px-10 lg:py-20 2xl:px-24'
                style={{
                  backgroundImage:
                    "url('/images/TidyTrunk_landingpage-04.png')",
                  height: '700px',
                }}
              >
                {/* <div className="container">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                      <div className="flex flex-col md:flex-row items-center justify-between w-full">
                        <div className="flex-grow">
                          <div className="slider-content">
                            <span className="text-lg font-normal text-orange block mb-3">
                              A watch is a portable
                            </span>
                            <h1 className="font-playfair font-bold text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-2xl mb-5 inline-block md:block">
                              Smart Backpack
                            </h1>
                            <h2 className="font-playfair font-bold text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-2xl mb-7 inline-block md:block">
                              Minimal Store
                            </h2>
                            <p className="font-normal text-primary text-sm lg:text-md">
                              Experience the decibels like your ears deserve to.
                              Safe for the <br className="hidden lg:block" />{" "}
                              ears, very for the heart. A treat to your ears.
                            </p>
                            <div className="inline-block mt-12">
                              <Link
                                className="flex flex-wrap items-center bg-gray-800 transition-all hover:bg-[#435c7f] hover:text-white px-3 md:px-4 xl:px-10 py-3 md:py-4 xl:py-5 rounded-full text-white capitalize font-medium text-sm lg:text-md leading-normal"
                                href="shop-grid-3-column.html"
                              >
                                Explore More
                                <i className="icon-basket-loaded ml-3 xl:ml-5"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </SwiperSlide>
              {/* <!-- swiper-slide end--> */}
            </Swiper>
          </div>

          {/* <!-- Add Pagination --> */}
          <div className='swiper-pagination mb-5 md:mb-0'></div>
          {/* <!-- swiper navigation --> */}
        </div>
      </section>
      {/* Hero end*/}

      {/* <!-- Featured section start --> */}
      <section
        className='pb-24 pt-24'
        style={{
          backgroundImage: "url('/images/TidyTrunk_landingpage-06.png')",
          height: '800px',
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        <div className='container'>
          <div className='-mx-4 flex flex-wrap items-center'>
            <div className='w-full px-4 md:w-1/2'>
              {/* <span className="text-md font-medium text-orange block mb-4">
                #FEATURED PRODUCT
              </span>
              <h2 className="font-playfair font-bold text-primary text-[30px] sm:text-[36px] xl:text-[48px] leading-tight mb-5">
                Minimal Travel Bag
                <br /> For Travel Lover
              </h2>

              <hr className="w-16 h-1 bg-orange mb-7 border-0" />
              <p className="font-normal text-primary text-base xl:text-md">
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book. sint occaeca Excepteur sint
                occaecat cupidatat non proident.
              </p>
              <a
                href="single-product.html"
                className="bg-gray-800 transition-all hover:bg-[#435c7f] hover:text-white px-5 md:px-12 py-3 md:py-4 xl:py-4 rounded-full text-white capitalize font-medium text-sm lg:text-md inline-block mt-8 leading-normal"
              >
                Buy Now
              </a> */}
            </div>

            <div className='w-full px-4 md:w-1/2'>
              {/* <Image
                className="mt-8 md:mt-0 w-full h-full"
                src="/images/bags/bag1.webp"
                alt="product image"
                loading="lazy"
                width="570"
                height="602"
              /> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Featured section end --> */}

      {/* <!-- Explore section start --> */}
      <section
        className='product-banner-section bg-gray-200 pb-24 pt-24'
        style={{
          backgroundImage: "url('/images/TidyTrunk_landingpage-08.png')",
          height: '800px',
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        {/* <div className="container">
          <div className="text-center pb-14">
            <span className="text-md font-normal text-orange block mb-4">
              EXPLORE THE AWESOME
            </span>
            <h3 className="font-playfair font-bold text-primary text-3xl sm:text-4xl xl:text-5xl mb-5">
              Product Feature
            </h3>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 -mb-10">
            <div>
              <div className="flex flex-wrap items-center lg:flex-row-reverse mb-10">
                <div className="text-primary text-4xl lg:ml-5 mr-5 lg:mr-0">
                  <i className="icofont-reply"></i>
                </div>
                <div className="flex-1 lg:text-right">
                  <h3 className="text-primary font-medium text-md lg:text-lg capitalize mb-3">
                    Firsted Reply
                  </h3>
                  <p>Respond to texts and messages directly from your wrist</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center lg:flex-row-reverse mb-10">
                <div className="text-primary text-4xl lg:ml-5 mr-5 lg:mr-0">
                  <i className="icofont-battery-full"></i>
                </div>
                <div className="flex-1 lg:text-right">
                  <h3 className="text-primary font-medium text-md lg:text-lg capitalize mb-3">
                    Battery Life
                  </h3>
                  <p>
                    Maximise your battery life on standby, and tilt your wrist.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center lg:flex-row-reverse mb-10">
                <div className="text-primary text-4xl lg:ml-5 mr-5 lg:mr-0">
                  <i className="icofont-mic"></i>
                </div>
                <div className="flex-1 lg:text-right">
                  <h3 className="text-primary font-medium text-md lg:text-lg capitalize mb-3">
                    Personal Assistant
                  </h3>
                  <p>
                    Receive incoming calls or speed dial contacts without phone
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center lg:flex-row-reverse mb-10">
                <div className="text-primary text-4xl lg:ml-5 mr-5 lg:mr-0">
                  <i className="icofont-sun"></i>
                </div>
                <div className="flex-1 lg:text-right">
                  <h3 className="text-primary font-medium text-md lg:text-lg capitalize mb-3">
                    Anti Glare
                  </h3>
                  <p>Incoming calls or speed dial contacts without reaching.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center">
              <Image
                className="max-w-full"
                src="/images/bags/bag2.webp"
                alt="banner image"
                loading="lazy"
                width="370"
                height="478"
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center mb-10">
                <div className="text-primary text-4xl mr-5">
                  <i className="icofont-gym-alt-3"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-primary font-medium text-md lg:text-lg capitalize mb-3">
                    Fitness Tracking
                  </h4>
                  <p>Monitor and track your steps and distance day to day</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center mb-10">
                <div className="text-primary text-4xl mr-5">
                  <i className="icofont-phone"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-primary font-medium text-md lg:text-lg capitalize mb-3">
                    Manage Calls
                  </h4>
                  <p>
                    Receive incoming calls or speed dial reaching your phone
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center mb-10">
                <div className="text-primary text-4xl mr-5">
                  <i className="icofont-brand-android-robot"></i>
                </div>
                <div className="flex-1">
                  <h4>App Launch</h4>
                  <p>
                    Shortcuts to your favorite apps directly on your watchface
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center mb-10">
                <div className="text-primary text-4xl mr-5">
                  <i className="icofont-music-note"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-primary font-medium text-md lg:text-lg capitalize mb-3">
                    Music Control
                  </h4>
                  <p>Easily accessible playback commands for your</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      {/* <!-- Explore section end --> */}

      {/* <!-- SmartBag section start --> */}

      <section
        className='pb-24 pt-24'
        style={{
          backgroundImage: "url('/images/TidyTrunk_landingpage-10.png')",
          height: '800px',
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        {/* <div className="container">
          <div className="lg:grid lg:grid-cols-2 gap-4">
            <div className="lg:px-5 flex items-center mb-8 md:mb-0">
              <Image
                className="aspect-auto"
                src="/images/bags/bag3.webp"
                alt="product image"
                loading="lazy"
                width="774"
                height="884"
              />
            </div>

            <div className="lg:px-5">
              <h2 className="font-playfair font-bold text-primary text-3xl xl:text-xl mb-5 leading-tight">
                Smartbag with the help your happy travel
              </h2>
              <p className="font-normal text-primary text-base">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>

              <div className="mt-10 -mb-10">
                <div className="flex flex-wrap mb-10 items-center">
                  <div className="mr-5 w-20">
                    <Image
                      className="w-20 lg:transform lg:scale-110"
                      src="/images/bags/sm/zipper.webp"
                      alt="image"
                      loading="lazy"
                      width="80"
                      height="80"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-primary font-medium text-md lg:text-lg capitalize mb-3">
                      Strong Zeeper
                    </h3>
                    <p>
                      Receive incoming calls or speed dial contacts without
                      reaching aniesn.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap mb-10 items-center">
                  <div className="mr-5 w-20">
                    <Image
                      className="w-20"
                      src="/images/bags/sm/powerbank.webp"
                      alt="image"
                      loading="lazy"
                      width="80"
                      height="80"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-primary font-medium text-md lg:text-lg capitalize mb-3">
                      Power Bank
                    </h3>
                    <p>
                      Calls & Calendar management personal contacts without
                      reaching edfes.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap mb-10 items-center">
                  <div className="mr-5 w-20">
                    <Image
                      className="w-20"
                      src="/images/bags/sm/shopping-bag.webp"
                      alt="image"
                      loading="lazy"
                      width="80"
                      height="80"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-primary font-medium text-md lg:text-lg capitalize mb-3">
                      Huge Space
                    </h3>
                    <p>
                      Controls management personal contacts without reaching
                      phones wfers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* <!-- SmartBag section end --> */}
    </>
  );
};

export default LandingPage;
