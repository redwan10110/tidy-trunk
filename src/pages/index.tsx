import * as React from 'react';

import LandingPage from '@/components/Home/LandingPage';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <div className='mt-[80px] lg:mt-[70px]'>
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
                  <h2 className='mb-[-10px] ml-0 text-[25px] lg:ml-[160px] lg:text-transparent'>
                    Home
                  </h2>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* Breadcrumb section end  */}
      </div>

      <LandingPage></LandingPage>
    </Layout>
  );
}
