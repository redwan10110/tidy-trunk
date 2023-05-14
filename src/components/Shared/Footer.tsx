import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/images/logo/Logo_TidyTrunk.png';
import paymentLogo from '../../../public/images/logo/payment.webp';

const Footer = () => {
  return (
    <>
      {/* NewsLater */}
      <div className='news-letter-section bg-gray-100 pb-24 pt-24'>
        <div className='container'>
          <div className='mx-auto max-w-[600px]'>
            <div className='text-center'>
              <Link href='#' className='mb-11 inline-block'>
                <Image
                  src={logo}
                  alt='brand logo'
                  loading='lazy'
                  width='125'
                  height='45'
                />
              </Link>

              <p className='mb-10'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.aliqua.
                Ut enim ad minim. Lorem ipsum dolor sit amet.
              </p>

              <form
                id='mc-form'
                className='relative mx-auto mb-10 text-center md:max-w-xl'
              >
                <input
                  id='mc-email'
                  type='email'
                  name='email'
                  placeholder='email@example.com'
                  className='border-primary placeholder-primary h-14 w-full rounded-full border border-solid bg-transparent py-1 pl-8 pr-14 text-sm placeholder-opacity-50 focus:outline-none sm:h-16 sm:pr-36 sm:text-base'
                />
                <button
                  id='mc-submit'
                  type='submit'
                  className='lg:text-md mt-3 w-full rounded-l-full rounded-r-full bg-black px-10 py-5 text-sm font-medium capitalize leading-none text-white transition-all hover:bg-[#435c7f] hover:text-white sm:absolute sm:right-0 sm:top-0 sm:mt-0 sm:h-full sm:w-auto sm:rounded-l-none sm:px-3 sm:py-1'
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className='flex flex-wrap items-center justify-center'>
              <Link
                href='#'
                aria-label='social links'
                className='text-dark mx-3 text-lg leading-none transition hover:text-[#435c7f]'
              >
                <i className='icon-social-facebook'></i>
              </Link>
              <Link
                href='#'
                aria-label='social links'
                className='text-dark mx-3 text-lg leading-none transition hover:text-[#435c7f]'
              >
                <i className='icon-social-twitter'></i>
              </Link>
              <Link
                href='#'
                aria-label='social links'
                className='text-dark mx-3 text-lg leading-none transition hover:text-[#435c7f]'
              >
                <i className='icon-social-instagram'></i>
              </Link>
              <Link
                href='#'
                aria-label='social links'
                className='text-dark mx-3 text-lg leading-none transition hover:text-[#435c7f]'
              >
                <i className='icon-social-youtube'></i>
              </Link>
              <Link
                href='#'
                aria-label='social links'
                className='text-dark mx-3 text-lg leading-none transition hover:text-[#435c7f]'
              >
                <i className='icon-social-dribbble'></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className='footer-bottom-section bg-gray-500 py-8'>
        <div className='container'>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='order-last flex flex-wrap items-center justify-center md:order-first md:justify-start'>
              <p className='flex flex-wrap items-center text-sm text-white lg:text-base'>
                &copy; 2022 Ecom <i className='icon-heart text-orange mx-2'></i>{' '}
                by
                <Link href='#' className='hover:text-orange ml-1 transition'>
                  Developer
                </Link>
                .
              </p>
            </div>

            <div className='flex flex-wrap items-center justify-center md:justify-end'>
              <Link href='#'>
                <Image
                  className='h-full w-full'
                  src={paymentLogo}
                  alt='payment logo'
                  loading='lazy'
                  width='286'
                  height='23'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
