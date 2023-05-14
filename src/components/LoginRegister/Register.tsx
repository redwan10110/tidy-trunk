import Link from 'next/link';

const Register = () => {
  return (
    <>
      {/* Breadcrumb section start */}
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
                  REGISTER
                </h2>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb section end  */}

      <div className='mt-16 pb-24'>
        <div className='container'>
          <div className='grid grid-cols-12 gap-x-5'>
            <div className='col-span-12'>
              <div id='maintab'>
                <ul className='custom-tab-nav mb-10 flex flex-wrap items-center justify-center'>
                  <li className='mx-2'>
                    <Link
                      className='md:text-md px-5 py-3 text-base font-semibold uppercase leading-none  transition-all hover:text-[#435c7f]'
                      href='/login'
                    >
                      login
                    </Link>{' '}
                    <span className='ml-2 inline-block'>|</span>
                  </li>
                  <li className='mx-2'>
                    <Link
                      className='md:text-md px-5 py-3 text-base font-semibold uppercase leading-none  text-[#435c7f] transition-all'
                      href='/register'
                    >
                      register
                    </Link>
                  </li>
                </ul>

                <div>
                  <div id='register' className='custom-tab-content'>
                    <div className='mx-auto max-w-4xl p-8 shadow md:p-20'>
                      <form action='#' method='post'>
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          type='text'
                          name='user-name'
                          placeholder='Username'
                        />
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          type='password'
                          name='user-password'
                          placeholder='Password'
                        />
                        <input
                          className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                          name='user-email'
                          placeholder='Email'
                          type='email'
                        />
                        <div className='button-box'>
                          <Link
                            href='#'
                            className='inline-block bg-gray-800 px-5 py-4 text-sm uppercase leading-none text-white transition-all hover:bg-[#435c7f]'
                          >
                            <span>Register</span>
                          </Link>
                        </div>
                      </form>
                    </div>
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

export default Register;
