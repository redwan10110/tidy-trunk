import Image from 'next/image';
import { useState } from 'react';
import { Navigation, Thumbs } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import img1 from '/public/images/single-product/sm/product1.webp';
import img2 from '/public/images/single-product/sm/product2.webp';
import img3 from '/public/images/single-product/sm/product3.webp';
import img4 from '/public/images/single-product/sm/product4.webp';
import img5 from '/public/images/single-product/sm/product5.webp';

const ProductCarousel = () => {
  const productImages = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleThumbClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        // navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: undefined }}
        className='mySwiper mb-[30px]'
      >
        {productImages.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              width={559}
              height={621}
              src={item.url}
              alt='product image'
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='gallery-nav relative'>
        <Swiper
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          modules={[Navigation, Thumbs]}
          className='product-images-slider-thumbs'
        >
          {productImages.map((item, index) => (
            <SwiperSlide key={index} onClick={() => handleThumbClick(index)}>
              <Image
                width={132}
                height={147}
                src={item.url}
                alt='product image'
                className={
                  index === activeSlide ? 'swiper-slide-thumb-active' : ''
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductCarousel;
