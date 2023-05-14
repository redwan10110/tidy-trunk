import AdminLayout from '@/components/Dashboard/AdminLayout';

const account = () => {
  return (
    <>
      <AdminLayout>
        <div id='account' className='shop-tab-content '>
          <div className='border border-gray-600 p-8'>
            <h3 className='text-md mb-5 border-b border-gray-600 pb-5 font-semibold capitalize leading-none lg:text-lg'>
              Account Details
            </h3>
            <form action='#'>
              <div className='grid grid-cols-12 gap-x-5'>
                <div className='col-span-12 mb-5 lg:col-span-6'>
                  <input
                    className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                    id='first-name'
                    placeholder='First Name'
                    type='text'
                  />
                </div>

                <div className='col-span-12 mb-5 lg:col-span-6'>
                  <input
                    className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                    id='last-name'
                    placeholder='Last Name'
                    type='text'
                  />
                </div>

                <div className='col-span-12 mb-5'>
                  <input
                    className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                    id='display-name'
                    placeholder='Display Name'
                    type='text'
                  />
                </div>

                <div className='col-span-12 mb-5'>
                  <input
                    className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                    id='email'
                    placeholder='Email Address'
                    type='email'
                  />
                </div>

                <div className='col-span-12 mb-5'>
                  <h4 className='text-base font-semibold capitalize'>
                    Password change
                  </h4>
                </div>

                <div className='col-span-12 mb-5'>
                  <input
                    className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                    id='current-pwd'
                    placeholder='Current Password'
                    type='password'
                  />
                </div>

                <div className='col-span-12 mb-5 lg:col-span-6'>
                  <input
                    className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                    id='new-pwd'
                    placeholder='New Password'
                    type='password'
                  />
                </div>

                <div className='col-span-12 mb-5 lg:col-span-6'>
                  <input
                    className='text-dark mb-5 h-12 w-full border border-solid border-gray-300 px-5 py-1 text-base placeholder-current focus:outline-none'
                    id='confirm-pwd'
                    placeholder='Confirm Password'
                    type='password'
                  />
                </div>

                <div className='col-span-12'>
                  <button
                    className='inline-block bg-gray-800 px-5 py-5 text-sm uppercase leading-none text-white transition-all hover:bg-[#435c7f]'
                    aria-label='Save Changes'
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default account;
