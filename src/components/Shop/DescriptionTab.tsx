import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const DescriptionTab = () => {
  const [activeTab, setActiveTab] = useState('description');

  const handleDescriptionClick = () => {
    setActiveTab('description');
  };

  const handleProductDetailsClick = () => {
    setActiveTab('productDetails');
  };
  const handleReviewsClick = () => {
    setActiveTab('reviews');
  };

  return (
    <>
      <div id='maintab' className='pb-24'>
        <div className='container'>
          <div className='grid grid-cols-1 gap-x-5'>
            <div className='border border-solid border-gray-300 p-8'>
              <ul className='custom-tab-nav -mx-5 -my-1 mb-10 flex flex-wrap items-center'>
                <li
                  className={`mx-5 my-1 ${
                    activeTab === 'description' ? 'active' : ''
                  }`}
                >
                  <Link
                    className='sm:text-md before:h-2px before:empty relative pb-3 text-base capitalize leading-none transition-all ease-out before:absolute before:bottom-0 before:left-auto before:right-0 before:w-0 before:bg-[#435c7f] before:transition-all hover:text-[#435c7f]'
                    href='#description'
                    onClick={handleDescriptionClick}
                  >
                    Description
                  </Link>
                </li>
                <li
                  className={`mx-5 my-1 ${
                    activeTab === 'productDetails' ? 'active' : ''
                  }`}
                >
                  <Link
                    className='sm:text-md before:h-2px before:empty relative pb-3 text-base capitalize leading-none transition-all ease-out before:absolute before:bottom-0 before:left-auto before:right-0 before:w-0 before:bg-[#435c7f] before:transition-all hover:text-[#435c7f]'
                    href='#product-details'
                    onClick={handleProductDetailsClick}
                  >
                    Product Details
                  </Link>
                </li>
                <li
                  className={`mx-5 my-1 ${
                    activeTab === 'reviews' ? 'active' : ''
                  }`}
                >
                  <Link
                    className='sm:text-md before:h-2px before:empty relative pb-3 text-base capitalize leading-none transition-all ease-out before:absolute before:bottom-0 before:left-auto before:right-0 before:w-0 before:bg-[#435c7f] before:transition-all hover:text-[#435c7f]'
                    href='#review'
                    onClick={handleReviewsClick}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
              {activeTab === 'description' && (
                <div className='custom-tab-content'>
                  <div>
                    <p className='mb-5'>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable. The generated Lorem Ipsum is therefore always
                      free from repetition, injected humour, or
                      non-characteristic words etc.
                    </p>
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                      bound to ensue; and equal blame belongs to those who fail
                      in their duty through weakness of will, which is the same
                      as saying through shrinking from toil and pain. These
                      cases are perfectly simple and easy to distinguish. In a
                      free hour, when our power of choice is untrammelled and
                      when nothing prevents our being able to do what we like
                      best, every pleasure is to be welcomed and every pain
                      avoided.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'productDetails' && (
                <div id='' className='custom-tab-content'>
                  <div className='review-bottom'>
                    <div className='single-product-desc'>
                      <div className='product-anotherinfo-wrapper'>
                        <ul>
                          <li className='mb-4'>
                            <span className='inline-block w-28 font-semibold'>
                              Weight
                            </span>{' '}
                            400 g
                          </li>
                          <li className='mb-4'>
                            <span className='inline-block w-28 font-semibold'>
                              Dimensions
                            </span>
                            10 x 10 x 15 cm
                          </li>
                          <li className='mb-4'>
                            <span className='inline-block w-28 font-semibold'>
                              Materials
                            </span>{' '}
                            60% cotton, 40% polyester
                          </li>
                          <li className='mb-4'>
                            <span className='inline-block w-28 font-semibold'>
                              Other Info
                            </span>{' '}
                            American heirloom jean shorts pug seitan letterpress
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'reviews' && (
                <div id='' className='custom-tab-content'>
                  <div>
                    <div className='grid grid-cols-1 gap-x-5 lg:grid-cols-2 xl:gap-x-10'>
                      <div>
                        <div className='relative mb-12 flex flex-col flex-wrap items-start sm:flex-row'>
                          <Image
                            className='mb-5 mr-7 sm:mb-0'
                            src='/images/testimonial/1.png'
                            alt='testImg'
                            width={120}
                            height={120}
                          />
                          <div className='flex-1'>
                            <div className='flex flex-wrap'>
                              <h4 className='text-dark text-base font-semibold'>
                                White Lewis
                              </h4>
                              <div className='text-orange ml-8'>
                                <i className='icofont-star'></i>
                                <i className='icofont-star'></i>
                                <i className='icofont-star'></i>
                                <i className='icofont-star'></i>
                                <i className='icofont-star'></i>
                              </div>
                            </div>
                            <div className='text-right'>
                              <Link
                                className='hover:text-orange transition-all'
                                href='#'
                              >
                                Reply
                              </Link>
                            </div>
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>
                        <div className='relative mb-12 flex flex-col flex-wrap items-start sm:flex-row'>
                          <Image
                            className='mb-5 mr-7 sm:mb-0'
                            src='/images/testimonial/2.png'
                            alt=''
                            width={120}
                            height={120}
                          />
                          <div className='flex-1'>
                            <div className='flex flex-wrap'>
                              <h4 className='text-dark text-base font-semibold'>
                                White Lewis
                              </h4>
                              <div className='text-orange ml-8'>
                                <i className='icofont-star'></i>
                                <i className='icofont-star'></i>
                                <i className='icofont-star'></i>
                                <i className='icofont-star'></i>
                                <i className='icofont-star'></i>
                              </div>
                            </div>
                            <div className='text-right'>
                              <Link
                                className='hover:text-orange transition-all'
                                href='#'
                              >
                                Reply
                              </Link>
                            </div>
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className='text-dark text-base font-semibold'>
                          Add a Review
                        </h4>
                        <form action='#'>
                          <div className='mb-5 flex flex-wrap'>
                            <span className='mr-4'>Your rating:</span>
                            <div className='text-orange'>
                              <i className='icofont-star'></i>
                              <i className='icofont-star'></i>
                              <i className='icofont-star'></i>
                              <i className='icofont-star'></i>
                              <i className='icofont-star'></i>
                            </div>
                          </div>
                          <div className='grid grid-cols-2 gap-x-4'>
                            <div className='leave-form col-span-2 sm:col-span-1'>
                              <input
                                className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                                placeholder='Name'
                                type='text'
                              />
                            </div>
                            <div className='leave-form col-span-2 sm:col-span-1'>
                              <input
                                className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                                placeholder='Email'
                                type='email'
                              />
                            </div>
                            <div className='text-leave col-span-2'>
                              <textarea
                                className='text-dark mb-8 h-60 w-full resize-none border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                                name='Your Review'
                                placeholder='Message'
                              ></textarea>
                              <button
                                type='submit'
                                className='bg-dark px-5 py-5 text-sm uppercase leading-none text-white transition-all hover:bg-[#435c7f]'
                              >
                                Post comment
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionTab;
