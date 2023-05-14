import Image from 'next/image';
import Link from 'next/link';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const AboutUsCom = () => {
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
                  ABOUT
                </h2>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb section end */}

      {/* about us section start */}
      <div className='bg-white py-20'>
        <div className='container'>
          <div className='grid grid-cols-1 gap-x-5 lg:grid-cols-2'>
            <div className='mb-10 flex flex-wrap items-center lg:mb-0'>
              <Image
                width={559}
                height={315}
                src='/images/drone/drone4.webp'
                alt='images'
              />
            </div>
            <div>
              <div className='mb-10'>
                <h3 className='text-dark mb-5 text-3xl font-bold uppercase md:text-4xl'>
                  WELCOME TO <span className='text-orange'>Sinp</span>
                </h3>
                <p>
                  Parlo provide how all this mistaken idea of denouncing
                  pleasure and sing pain was born an will give you a complete.
                </p>
              </div>
              <div className='mb-10'>
                <h4 className='text-md text-dark mb-4 font-semibold uppercase'>
                  WE START AT 2022
                </h4>
                <p>
                  Parlo provide how all this mistaken idea of denouncing
                  pleasure and sing pain was born nsidae.
                </p>
              </div>
              <div>
                <h4 className='text-md text-dark mb-4 font-semibold uppercase'>
                  WIN BEST ONLINE SHOP AT 2022
                </h4>
                <p>
                  Parlo provide how all this mistaken idea of denouncing
                  pleasure and sing pain was born an will give you a solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about us section end */}

      {/* testimonial section start */}
      <div
        className='testimonial-area bg-gray-light group bg-cover bg-center bg-no-repeat py-24'
        style={{
          backgroundImage: "url('/images/hero/slide5.webp')",
        }}
      >
        <div className='container'>
          <div className='grid grid-cols-12 gap-x-4'>
            <div className='col-span-12'>
              <div className='pb-14 text-center'>
                <h2 className='font-playfair text-orange mb-5 text-3xl font-bold sm:text-4xl xl:text-5xl'>
                  What Client Says
                </h2>
                <p className='font-playfair text-md mb-3 font-medium'>
                  Contrary to popular belief, Lorem Ipsum is not.
                </p>
              </div>
            </div>
            <div className='col-span-12 text-center lg:col-span-8 lg:col-start-3'>
              <div className='testimonial relative overflow-hidden'>
                <Swiper>
                  <SwiperSlide>
                    <div className='mx-auto h-24 w-24 overflow-hidden rounded-full'>
                      <Image
                        width={96}
                        height={117}
                        src='/images/testimonial/testimonial1.webp'
                        alt='image'
                      />
                    </div>
                    <p className='my-8'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat
                      Duis aute irure dolor in reprehenderit.
                    </p>
                    <h5 className='text-dark text-sm font-semibold uppercase'>
                      Hester Perkins
                    </h5>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='mx-auto h-24 w-24 overflow-hidden rounded-full'>
                      <Image
                        width={96}
                        height={117}
                        src='/images/testimonial/testimonial1.webp'
                        alt='image'
                      />
                    </div>
                    <p className='my-8'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat
                      Duis aute irure dolor in reprehenderit.
                    </p>
                    <h5 className='text-dark text-sm font-semibold uppercase'>
                      Hester Perkins
                    </h5>
                  </SwiperSlide>
                </Swiper>

                {/* <!-- Add Pagination --> */}

                {/* <!-- swiper navigation --> */}
                {/* <div className="swiper-buttons">
                  <div className="swiper-button-prev right-auto left-4  w-12 h-12 rounded-full bg-white border border-solid border-gray-400 text-sm text-dark group-hover:opacity-100 transition-all hover:text-orange hover:border-orange opacity-0 invisible group-hover:visible"></div>
                  <div className="swiper-button-next left-auto right-4  w-12 h-12 rounded-full bg-white border border-solid border-gray-400 text-sm text-dark group-hover:opacity-100 transition-all hover:text-orange hover:border-orange opacity-0 invisible group-hover:visible"></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial section end */}

      {/* team carousel start */}
      <div className='py-20'>
        <div className='container'>
          <div className='grid grid-cols-12 gap-x-4'>
            <div className='col-span-12'>
              <div className='pb-14 text-center'>
                <h2 className='font-playfair text-orange mb-5 text-3xl font-bold sm:text-4xl xl:text-5xl'>
                  Team Members
                </h2>
                <p className='font-playfair text-md mb-3 font-medium'>
                  Contrary to popular belief, Lorem Ipsum.
                </p>
              </div>
            </div>
            <div className='col-span-12'>
              <div className='relative -m-4'>
                <div className='team-carousel overflow-hidden p-4'>
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className='mySwiper'
                  >
                    {/* <!-- swiper-slide start --> */}
                    <SwiperSlide>
                      <div className='bg-gray-light group'>
                        <div className='relative'>
                          <Link href='#' className='block'>
                            <Image
                              className=''
                              src='/images/team/team1.webp'
                              alt='team image'
                              loading='lazy'
                              width={262}
                              height={320}
                            />
                          </Link>
                          <div className='invisible absolute left-0 top-1/2 flex w-full translate-y-1/2 transform flex-wrap items-center justify-center bg-white p-3 opacity-0 transition-all duration-500 group-hover:visible group-hover:-translate-y-1/2 group-hover:opacity-100'>
                            <Link
                              href='#'
                              className='hover:border-facebook bg-facebook hover:text-facebook mx-1 flex h-8 w-8 flex-wrap items-center justify-center
                                     rounded-full border border-solid border-transparent text-sm text-white transition-all hover:bg-white'
                            >
                              <i className='icon-social-facebook'></i>
                            </Link>
                            <Link
                              href='#'
                              className='hover:border-twitter bg-twitter hover:text-twitter mx-1 flex h-8 w-8 flex-wrap items-center justify-center
                                     rounded-full border border-solid border-transparent text-sm text-white transition-all hover:bg-white'
                            >
                              <i className='icon-social-twitter'></i>
                            </Link>
                            <Link
                              href='#'
                              className='hover:border-instagram bg-instagram hover:text-instagram mx-1 flex h-8 w-8 flex-wrap items-center justify-center
                                     rounded-full border border-solid border-transparent text-sm text-white transition-all hover:bg-white'
                            >
                              <i className='icon-social-instagram'></i>
                            </Link>
                          </div>
                        </div>
                        <div className='px-3 py-5 text-center'>
                          <h4 className='text-dark text-md mb-1 font-medium capitalize'>
                            Ms. Sophia
                          </h4>
                          <span className='italic'>Designer</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* <!-- swiper-slide end--> */}

                    {/* <!-- swiper-slide start --> */}
                    <SwiperSlide>
                      <div className='bg-gray-light group'>
                        <div className='relative'>
                          <Link href='#' className='block'>
                            <Image
                              className=''
                              src='/images/team/team2.webp'
                              alt='team image'
                              loading='lazy'
                              width={262}
                              height={320}
                            />
                          </Link>
                          <div className='invisible absolute left-0 top-1/2 flex w-full translate-y-1/2 transform flex-wrap items-center justify-center bg-white p-3 opacity-0 transition-all duration-500 group-hover:visible group-hover:-translate-y-1/2 group-hover:opacity-100'>
                            <Link
                              href='#'
                              className='hover:border-facebook bg-facebook hover:text-facebook mx-1 flex h-8 w-8 flex-wrap items-center justify-center
                                     rounded-full border border-solid border-transparent text-sm text-white transition-all hover:bg-white'
                            >
                              <i className='icon-social-facebook'></i>
                            </Link>
                            <Link
                              href='#'
                              className='hover:border-twitter bg-twitter hover:text-twitter mx-1 flex h-8 w-8 flex-wrap items-center justify-center
                                     rounded-full border border-solid border-transparent text-sm text-white transition-all hover:bg-white'
                            >
                              <i className='icon-social-twitter'></i>
                            </Link>
                            <Link
                              href='#'
                              className='hover:border-instagram bg-instagram hover:text-instagram mx-1 flex h-8 w-8 flex-wrap items-center justify-center
                                     rounded-full border border-solid border-transparent text-sm text-white transition-all hover:bg-white'
                            >
                              <i className='icon-social-instagram'></i>
                            </Link>
                          </div>
                        </div>
                        <div className='px-3 py-5 text-center'>
                          <h4 className='text-dark text-md mb-1 font-medium capitalize'>
                            Mr. Peter Pan
                          </h4>
                          <span className='italic'>Developer</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* <!-- swiper-slide end--> */}

                    {/* <!-- swiper-slide start --> */}
                    <SwiperSlide>
                      <div className='bg-gray-light group'>
                        <div className='relative'>
                          <Link href='#' className='block'>
                            <Image
                              className=''
                              src='/images/team/team3.webp'
                              alt='team image'
                              loading='lazy'
                              width={262}
                              height={320}
                            />
                          </Link>
                          <div className='invisible absolute left-0 top-1/2 flex w-full translate-y-1/2 transform flex-wrap items-center justify-center bg-white p-3 opacity-0 transition-all duration-500 group-hover:visible group-hover:-translate-y-1/2 group-hover:opacity-100'>
                            <Link
                              href='#'
                              className='hover:border-facebook bg-facebook hover:text-facebook mx-1 flex h-8 w-8 flex-wrap items-center justify-center
                                     rounded-full border border-solid border-transparent text-sm text-white transition-all hover:bg-white'
                            >
                              <i className='icon-social-facebook'></i>
                            </Link>
                            <Link
                              href='#'
                              className='hover:border-twitter bg-twitter hover:text-twitter mx-1 flex h-8 w-8 flex-wrap items-center justify-center
                                     rounded-full border border-solid border-transparent text-sm text-white transition-all hover:bg-white'
                            >
                              <i className='icon-social-twitter'></i>
                            </Link>
                            <Link
                              href='#'
                              className='hover:border-instagram bg-instagram hover:text-instagram mx-1 flex h-8 w-8 flex-wrap items-center justify-center
                                     rounded-full border border-solid border-transparent text-sm text-white transition-all hover:bg-white'
                            >
                              <i className='icon-social-instagram'></i>
                            </Link>
                          </div>
                        </div>
                        <div className='px-3 py-5 text-center'>
                          <h4 className='text-dark text-md mb-1 font-medium capitalize'>
                            Mr. John Lee
                          </h4>
                          <span className='italic'>Chairmen</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* <!-- swiper-slide end--> */}

                    {/* <!-- swiper-slide start --> */}
                    <SwiperSlide>
                      <div className='bg-gray-light group'>
                        <div className='relative'>
                          <Link href='#' className='block'>
                            <Image
                              className=''
                              src='/images/team/team4.webp'
                              alt='team image'
                              loading='lazy'
                              width={262}
                              height={320}
                            />
                          </Link>
                          <div className='invisible absolute left-0 top-1/2 flex w-full translate-y-1/2 transform flex-wrap items-center justify-center bg-white p-3 opacity-0 transition-all duration-500 group-hover:visible group-hover:-translate-y-1/2 group-hover:opacity-100'>
                            <Link
                              href='#'
                              className='hover:border-facebook bg-facebook hover:text-facebook mx-1 flex h-8 w-8 flex-wrap items-center justify-center
                                     rounded-full border border-solid border-transparent text-sm text-white transition-all hover:bg-white'
                            >
                              <i className='icon-social-facebook'></i>
                            </Link>
                            <Link
                              href='#'
                              className='hover:border-twitter bg-twitter hover:text-twitter mx-1 flex h-8 w-8 flex-wrap items-center justify-center
                                     rounded-full border border-solid border-transparent text-sm text-white transition-all hover:bg-white'
                            >
                              <i className='icon-social-twitter'></i>
                            </Link>
                            <Link
                              href='#'
                              className='hover:border-instagram bg-instagram hover:text-instagram mx-1 flex h-8 w-8 flex-wrap items-center justify-center
                                     rounded-full border border-solid border-transparent text-sm text-white transition-all hover:bg-white'
                            >
                              <i className='icon-social-instagram'></i>
                            </Link>
                          </div>
                        </div>
                        <div className='px-3 py-5 text-center'>
                          <h4 className='text-dark text-md mb-1 font-medium capitalize'>
                            Mr. John Doh
                          </h4>
                          <span className='italic'>SEO Expert</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* <!-- swiper-slide end--> */}

                    {/* <!-- swiper-slide start --> */}
                    <SwiperSlide>
                      <div className='bg-gray-light group'>
                        <div className='relative'>
                          <Link href='#' className='block'>
                            <Image
                              className=''
                              src='/images/team/team2.webp'
                              alt='team image'
                              loading='lazy'
                              width={262}
                              height={320}
                            />
                          </Link>
                          <div className='invisible absolute left-0 top-1/2 flex w-full translate-y-1/2 transform flex-wrap items-center justify-center bg-white p-3 opacity-0 transition-all duration-500 group-hover:visible group-hover:-translate-y-1/2 group-hover:opacity-100'>
                            <Link
                              href='#'
                              className='hover:border-facebook bg-facebook hover:text-facebook mx-1 flex h-8 w-8 flex-wrap items-center justify-center
                                     rounded-full border border-solid border-transparent text-sm text-white transition-all hover:bg-white'
                            >
                              <i className='icon-social-facebook'></i>
                            </Link>
                            <Link
                              href='#'
                              className='hover:border-twitter bg-twitter hover:text-twitter mx-1 flex h-8 w-8 flex-wrap items-center justify-center
                                     rounded-full border border-solid border-transparent text-sm text-white transition-all hover:bg-white'
                            >
                              <i className='icon-social-twitter'></i>
                            </Link>
                            <Link
                              href='#'
                              className='hover:border-instagram bg-instagram hover:text-instagram mx-1 flex h-8 w-8 flex-wrap items-center justify-center
                                     rounded-full border border-solid border-transparent text-sm text-white transition-all hover:bg-white'
                            >
                              <i className='icon-social-instagram'></i>
                            </Link>
                          </div>
                        </div>
                        <div className='px-3 py-5 text-center'>
                          <h4 className='text-dark text-md mb-1 font-medium capitalize'>
                            Mr. Peter Pan
                          </h4>
                          <span className='italic'>Developer</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* <!-- swiper-slide end--> */}
                  </Swiper>
                  {/* <!-- Add Pagination --> */}
                  {/* <!-- <div className="swiper-pagination"></div> --> */}
                  {/* <!-- swiper navigation --> */}
                  {/* <div className="swiper-buttons">
                    <div className="swiper-button-prev right-auto left-4  w-12 h-12 rounded-full bg-white border border-solid border-gray-400 text-sm text-dark opacity-100 transition-all hover:text-orange hover:border-orange"></div>
                    <div className="swiper-button-next left-auto right-4  w-12 h-12 rounded-full bg-white border border-solid border-gray-400 text-sm text-dark opacity-100 transition-all hover:text-orange hover:border-orange"></div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team carousel end */}
    </>
  );
};

export default AboutUsCom;
