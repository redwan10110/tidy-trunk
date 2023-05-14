import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import logo from '../../../public/images/logo/Logo_TidyTrunk.png';

const Navigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };
  const closeCart = () => {
    setIsCartOpen(false);
  };
  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // console.log(isSearchOpen);

  return (
    <>
      <header id='sticky-header' className='is-sticky'>
        <div className='bg-light px-4 py-6 md:px-10 lg:py-0 2xl:px-24'>
          <div className='flex items-center lg:relative'>
            <div className='w-6/12 lg:w-2/12'>
              {/* Logo */}
              <div className='logo'>
                <Link href='/#'>
                  <Image
                    src={logo}
                    alt='logo'
                    priority={true}
                    width='125'
                    height='45'
                  />
                </Link>
              </div>
            </div>
            {/* Menu */}
            <div className='hidden flex-1 lg:flex xl:relative'>
              <nav className='main-menu'>
                <ul className='flex flex-wrap'>
                  <li className='main-menu__item group relative'>
                    <Link
                      className='text-md text-dark nav-item block py-10 font-normal capitalize transition-all hover:text-[#435c7f] md:pr-5 xl:pr-6'
                      href='/'
                    >
                      Home
                    </Link>
                  </li>

                  <li className='main-menu__item group'>
                    <Link
                      className='text-md text-dark nav-item block py-10 font-normal capitalize transition-all hover:text-[#435c7f] md:px-5 xl:px-6'
                      href='/shop'
                    >
                      Shop
                    </Link>
                  </li>
                  <li className='main-menu__item group'>
                    <Link
                      className='text-md text-dark nav-item block py-10 font-normal capitalize transition-all hover:text-[#435c7f] md:px-5 xl:px-6'
                      href='/about-us'
                    >
                      About Us
                    </Link>
                  </li>
                  <li className='main-menu__item group'>
                    <Link
                      className='text-md text-dark nav-item block py-10 font-normal capitalize transition-all hover:text-[#435c7f] md:px-5 xl:px-6'
                      href='/contact'
                    >
                      Contact Us
                    </Link>
                  </li>
                  {/* <li className="main-menu__item relative group">
                    <Link
                      className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-dark hover:text-[#435c7f] transition-all nav-item"
                      href="#"
                    >
                      pages
                    </Link>
                    <ul className="submenu bg-white py-3 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10 min-w-max">
                      <li className="my-3">
                        <Link
                          className="text-dark font-normal text-base capitalize transition-all hover:text-[#435c7f]"
                          href="/about-us"
                        >
                          About Page
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          className="text-dark font-normal text-base capitalize transition-all hover:text-[#435c7f]"
                          href="/cart"
                        >
                          Cart Page
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          className="text-dark font-normal text-base capitalize transition-all hover:text-[#435c7f]"
                          href="/checkout"
                        >
                          Checkout Page
                        </Link>
                      </li>

                      <li className="my-3">
                        <Link
                          className="text-dark font-normal text-base capitalize transition-all hover:text-[#435c7f]"
                          href="/login"
                        >
                          Login
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          className="text-dark font-normal text-base capitalize transition-all hover:text-[#435c7f]"
                          href="/register"
                        >
                          Register
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          className="text-dark font-normal text-base capitalize transition-all hover:text-[#435c7f]"
                          href="/dashboard/account"
                        >
                          Account Page
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </nav>
            </div>

            <div className='w-6/12 lg:w-3/12'>
              <ul className='flex items-center justify-end'>
                <li className='ml-6 hidden lg:block'>
                  <button
                    className='search-toggle text-dark text-md text-right transition-all hover:text-[#435c7f]'
                    aria-label='icon-settings'
                    // onClick={openSearch}
                  >
                    <i className='icon-magnifier'></i>
                  </button>
                </li>
                <li className='ml-6' onClick={openCart}>
                  <Link
                    href='#offcanvas-cart'
                    className='text-dark text-md offcanvas-toggle relative transition-all hover:text-[#435c7f]'
                  >
                    <span className='bg-dark absolute -top-3 left-2 flex h-5 w-5 flex-wrap items-center justify-center rounded-full text-sm font-normal leading-none text-white'>
                      4
                    </span>
                    <i className='icon-bag'></i>
                    <span className='text-dark ml-2 text-base leading-none'>
                      $245
                    </span>
                  </Link>
                </li>
                <li id='toggle-menu' className='relative ml-6 hidden lg:block'>
                  <button
                    className='text-dark text-md toggle-menu transition-all hover:text-[#435c7f]'
                    aria-label='icon-settings'
                  >
                    <i className='icon-settings'></i>
                  </button>
                  <div
                    id='settings-card'
                    className='text-dark invisible absolute right-0 z-20 w-80 px-8 py-5 opacity-0 shadow transition-all duration-300 ease-in-out'
                  >
                    <h4 className='text-md text-dark mb-5 border-b border-solid border-gray-600 pb-5 font-normal capitalize tracking-wide'>
                      Currency
                    </h4>
                    <ul>
                      <li className='my-4'>
                        <Link
                          href='#'
                          className='text-dark hover:text-orange text-base font-light capitalize tracking-wide transition-all'
                        >
                          USD - US Dollar
                        </Link>
                      </li>
                      <li className='my-4'>
                        <Link
                          href='#'
                          className='text-dark hover:text-orange text-base font-light capitalize tracking-wide transition-all'
                        >
                          EUR - Euro
                        </Link>
                      </li>
                      <li className='my-4'>
                        <Link
                          href='#'
                          className='text-dark hover:text-orange text-base font-light capitalize tracking-wide transition-all'
                        >
                          GBP - British Pound
                        </Link>
                      </li>
                    </ul>
                    <h4 className='text-md text-dark mb-5 border-b border-solid border-gray-600 pb-5 font-normal capitalize tracking-wide'>
                      Account
                    </h4>
                    <ul>
                      <li className='my-4'>
                        <Link
                          href='login-register.html'
                          className='text-dark hover:text-orange text-base font-light capitalize tracking-wide transition-all'
                        >
                          Login
                        </Link>
                      </li>
                      <li className='mt-4'>
                        <Link
                          href='account.html'
                          className='text-dark hover:text-orange text-base font-light capitalize tracking-wide transition-all'
                        >
                          Create Account
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='ml-6 lg:hidden'>
                  <Link
                    href='#offcanvas-mobile-menu'
                    className='offcanvas-toggle text-primary text-md hover:text-orange transition-all'
                    onClick={openMobileMenu}
                  >
                    <i className='icon-menu'></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* Search Toggle */}
      <div
        className='search-form fixed left-0 top-0 z-50 hidden min-h-screen w-full translate-x-full transform items-center justify-center bg-black  px-10 py-8 opacity-95 transition-transform duration-500 ease-in-out lg:flex'
        style={{
          transform: isSearchOpen ? 'translatex(0px)' : 'translatex(100%)',
        }}
      >
        <button
          className='search-close absolute left-1/2 top-12 translate-y-1/2 text-xl text-white'
          aria-label='close icon'
          onClick={closeSearch}
        >
          <span className='icon-close'></span>
        </button>
        <form className='relative lg:w-1/2 xl:w-1/3'>
          <input
            className='text-md h-14 w-full border-b border-solid border-gray-600 bg-transparent pr-14 font-normal text-white focus:outline-none'
            type='search'
            name='search'
            placeholder='Search our store'
          />
          <button
            className='text-md absolute right-0 top-3 font-normal text-white'
            type='submit'
            aria-label='submit button'
          >
            <i className='icon-magnifier'></i>
          </button>
        </form>
      </div>
      {/* <!-- offcanvas-overlay start --> */}
      <div
        className={`offcanvas-overlay ${
          isCartOpen || isMobileMenuOpen ? 'block' : 'hidden'
        } fixed inset-0 z-50 bg-black opacity-50`}
        onClick={() => {
          closeCart();
          closeMobileMenu();
        }}
      ></div>
      {/* <!-- offcanvas-overlay end --> */}
      {/* <!-- offcanvas-mobile-menu start --> */}
      <div
        id='offcanvas-mobile-menu'
        className={`offcanvas translate-x-translate-x-full-120 fixed  left-auto right-0 top-0 z-50 h-screen w-72 transform bg-white text-sm font-normal transition-all duration-300 ease-in-out sm:w-80 lg:w-96 ${
          isMobileMenuOpen ? 'offcanvas-open' : ''
        } `}
      >
        <div className='h-5/6 overflow-y-auto px-8 py-12'>
          {/* <!-- search form start --> */}

          <form
            className='mb-10 border-b border-solid border-gray-600 pb-10'
            action='#'
            method='get'
          >
            <div className='relative'>
              <input
                className='bg-gray-light text-dark h-12 w-full py-4 pl-4 pr-16 text-sm placeholder-current focus:outline-none'
                type='search'
                name='search'
                placeholder='Search our store'
              />
              <button
                className='text-dark text-md absolute right-0 top-0 flex h-full w-12 items-center justify-center border-l border-solid border-gray-600'
                type='submit'
                aria-label='button'
              >
                <i className='icon-magnifier'></i>
              </button>
            </div>
          </form>

          {/* <!-- search form end --> */}

          {/* <!-- close button start --> */}
          <button
            className='offcanvas-close bg-dark hover:text-orange group absolute -left-10 top-0 flex h-10 w-10 items-center justify-center text-white transition-all'
            aria-label='offcanvas'
            onClick={closeMobileMenu}
          >
            <i className='icon-close transform transition-all group-hover:rotate-90'></i>
          </button>
          {/* <!-- close button end --> */}

          {/* <!-- offcanvas-menu start --> */}

          <nav className='offcanvas-menu mb-10 border-b border-solid border-gray-600 pb-10'>
            <ul>
              <li className='relative block'>
                <Link
                  href='/home'
                  className='font-roboto my-2 block py-1 text-base font-normal capitalize'
                >
                  Home
                </Link>
              </li>
              <li className='relative block'>
                <Link
                  href='#'
                  className='font-roboto my-2 block py-1 text-base font-normal capitalize'
                >
                  Shop
                </Link>
              </li>
              <li className='relative block'>
                <Link
                  href='/about-us'
                  className='font-roboto my-2 block py-1 text-base font-normal capitalize'
                >
                  About Page
                </Link>
              </li>
              <li className='relative block'>
                <Link
                  href='/contact'
                  className='font-roboto my-2 block py-1 text-base font-normal capitalize'
                >
                  Contact Us
                </Link>
              </li>
              {/* <li className="relative block">
                <Link
                  href="/cart"
                  className="block capitalize font-normal text-base my-2 py-1 font-roboto"
                >
                  Cart Page
                </Link>
              </li>
              <li className="relative block">
                <Link
                  href="/checkout"
                  className="block capitalize font-normal text-base my-2 py-1 font-roboto"
                >
                  Checkout Page
                </Link>
              </li>
              <li className="relative block">
                <Link
                  href="/login"
                  className="block capitalize font-normal text-base my-2 py-1 font-roboto"
                >
                  Login
                </Link>
              </li>
              <li className="relative block">
                <Link
                  href="/register"
                  className="block capitalize font-normal text-base my-2 py-1 font-roboto"
                >
                  Register
                </Link>
              </li>
              <li className="relative block">
                <Link
                  href="/dashboard/account"
                  className="block capitalize font-normal text-base my-2 py-1 font-roboto"
                >
                  Account Page
                </Link>
              </li> */}
            </ul>
          </nav>
          {/* <!-- offcanvas-menu end --> */}

          <nav>
            <ul id='settings-menu'>
              <li className='mb-3 block'>
                <Link
                  className='text-dark hover:text-orange mb-3 flex flex-wrap justify-between text-base'
                  href='/#'
                >
                  Currency <i className='icon-arrow-down'></i>
                </Link>
                <ul className='sub-category hidden px-6 py-5 shadow'>
                  <li className='my-2 block'>
                    <Link
                      className='text-dark hover:text-orange block text-sm font-light tracking-wide'
                      href='#'
                    >
                      EUR €
                    </Link>
                  </li>
                  <li className='my-2 block'>
                    <Link
                      className='text-dark hover:text-orange block text-sm font-light tracking-wide'
                      href='#'
                    >
                      USD $
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='mb-3 block'>
                <Link
                  className='text-dark hover:text-orange mb-3 flex flex-wrap justify-between text-base'
                  href='/#'
                >
                  Account <i className='icon-arrow-down'></i>
                </Link>
                <ul className='sub-category hidden px-6 py-5 shadow'>
                  <li className='my-2 block'>
                    <Link
                      className='text-dark hover:text-orange block text-sm font-light tracking-wide'
                      href='#'
                    >
                      English
                    </Link>
                  </li>
                  <li className='my-2 block'>
                    <Link
                      className='text-dark hover:text-orange block text-sm font-light tracking-wide'
                      href='#'
                    >
                      Français
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <!-- offcanvas-mobile-menu end --> */}
      {/* cart start */}
      <div
        id='offcanvas-cart'
        className={`offcanvas translate-x-translate-x-full-120 fixed  left-auto right-0 top-0 z-50 h-screen w-80 transform overflow-y-auto bg-white text-sm font-normal transition-all duration-300 ease-in-out lg:w-96 ${
          isCartOpen ? 'offcanvas-open' : ''
        }`}
      >
        <div className='p-8'>
          <div className='mb-6 flex flex-wrap items-center justify-between border-b border-solid border-gray-600 pb-6'>
            <h4 className='text-md text-dark font-normal capitalize'>
              Shoping Cart
            </h4>
            <button
              className='offcanvas-close hover:text-orange'
              aria-label='close icon'
              onClick={closeCart}
            >
              <i className='icon-close'></i>
            </button>
          </div>
          <ul className='h-96 overflow-y-auto'>
            <li className='group mb-8 flex flex-wrap'>
              <div className='relative mr-5'>
                <Link href='#'>
                  <Image
                    src='/images/cart/product1.webp'
                    alt='product image'
                    loading='lazy'
                    width='90'
                    height='100'
                  />
                </Link>
                <button className='hover:text-orange invisible absolute left-3 top-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100'>
                  <i className='icon-close'></i>
                </button>
              </div>
              <div className='flex-1'>
                <h4>
                  <Link
                    className='text-dark hover:text-orange text-sm font-light tracking-wide transition-all md:text-base'
                    href='#'
                  >
                    Birpod product unsde - m / gold
                  </Link>
                </h4>
                <span className='text-dark text-sm font-light tracking-wide transition-all'>
                  1 x <span>$80.00</span>
                </span>
              </div>
            </li>
            <li className='group mb-8 flex flex-wrap'>
              <div className='relative mr-5'>
                <Link href='/#'>
                  <Image
                    src='/images/cart/product2.webp'
                    alt='product image'
                    loading='lazy'
                    width='90'
                    height='100'
                  />
                </Link>
                <button className='hover:text-orange invisible absolute left-3 top-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100'>
                  <i className='icon-close'></i>
                </button>
              </div>
              <div className='flex-1'>
                <h4>
                  <Link
                    className='text-dark hover:text-orange text-sm font-light tracking-wide transition-all md:text-base'
                    href='/#'
                  >
                    Airpod product kiebd - red
                  </Link>
                </h4>
                <span className='text-dark text-sm font-light tracking-wide transition-all'>
                  1 x <span>$99.00</span>
                </span>
              </div>
            </li>
            <li className='group mb-8 flex flex-wrap'>
              <div className='relative mr-5'>
                <Link href='#'>
                  <Image
                    src='/images/cart/product3.webp'
                    alt='product image'
                    loading='lazy'
                    width='90'
                    height='100'
                  />
                </Link>
                <button className='hover:text-orange invisible absolute left-3 top-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100'>
                  <i className='icon-close'></i>
                </button>
              </div>
              <div className='flex-1'>
                <h4>
                  <Link
                    className='text-dark hover:text-orange text-sm font-light tracking-wide transition-all md:text-base'
                    href='#'
                  >
                    Airpod product ides - navy
                  </Link>
                </h4>
                <span className='text-dark text-sm font-light tracking-wide transition-all'>
                  1 x <span>$39.00</span>
                </span>
              </div>
            </li>
          </ul>
          <div>
            <div className='text-dark my-6 flex flex-wrap items-center justify-between border-b border-t border-solid border-gray-600 py-4 text-base font-normal capitalize'>
              Total:<span>$218.00</span>
            </div>
            <div className='text-center'>
              <Link
                className='block border border-solid border-gray-600 bg-white px-10 py-5 text-base font-semibold uppercase leading-none transition-all hover:border-[#435c7f] hover:bg-[#435c7f] hover:text-white'
                href='/checkout'
              >
                Checkout
              </Link>
              <Link
                className='mt-3 block border border-solid border-gray-600 bg-white px-10 py-5 text-base font-semibold uppercase leading-none transition-all hover:border-[#435c7f] hover:bg-[#435c7f] hover:text-white'
                href='/cart'
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* cart end */}
    </>
  );
};

export default Navigation;
