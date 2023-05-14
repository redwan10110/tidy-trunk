const ContactUs = () => {
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
                  Contact
                </h2>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb section end */}

      {/* <!-- contact us section start --> */}

      <div className='bg-white py-24'>
        <div className='container'>
          <div className='grid grid-cols-1 gap-x-4 lg:grid-cols-2'>
            <div className='contact-info-area'>
              <h2 className='text-dark mb-14 text-4xl font-semibold capitalize'>
                Contact Us
              </h2>
              <div className='mb-8 flex flex-wrap items-center'>
                <span className='text-dark mr-5 text-4xl'>
                  <i className='icon-location-pin'></i>
                </span>
                <p className='flex-1'>
                  Address goes here, street, Crossroad 123.
                </p>
              </div>
              <div className='mb-8 flex flex-wrap items-center'>
                <span className='text-dark mr-5 text-4xl'>
                  <i className='icon-envelope'></i>
                </span>
                <a href='mailto:info@example.com' className='flex-1'>
                  info@example.com / info@example.com
                </a>
              </div>
              <div className='flex flex-wrap items-center'>
                <span className='text-dark mr-5 text-4xl'>
                  <i className='icon-screen-smartphone'></i>
                </span>
                <a href='tel:01234567890' className='flex-1'>
                  +1 35 776 859 011 / +1 35 776 859 011
                </a>
              </div>
            </div>

            <div className='mt-14 p-10 shadow lg:mt-0 lg:p-14'>
              <form id='contact-form'>
                <input
                  className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                  type='text'
                  name='name'
                  placeholder='Name'
                />
                <input
                  className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                  type='email'
                  placeholder='Email'
                  name='email'
                />
                <input
                  className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                  type='text'
                  placeholder='subject'
                  name='subject'
                />
                <textarea
                  className='text-dark mb-5 h-32 w-full resize-none border border-solid border-gray-300 px-5 py-1 text-base focus:outline-none'
                  name='massage'
                ></textarea>
                <button
                  className='bg-dark w-full px-5 py-5 text-sm uppercase leading-none text-white transition-all hover:bg-[#435c7f]'
                  type='submit'
                  aria-label='button'
                >
                  Send Message
                </button>
              </form>
              <p className='form-messege'></p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- contact us section end --> */}
    </>
  );
};

export default ContactUs;
