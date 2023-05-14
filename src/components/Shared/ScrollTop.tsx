import Link from 'next/link';

const ScrollTop = () => {
  return (
    <>
      <Link
        id='scrollUp'
        className='fixed bottom-16 right-5 z-10 flex h-12 w-12 flex-wrap items-center justify-center rounded-full bg-[#435c7f] text-white transition-all duration-300'
        href='#'
        aria-label='scroll up'
      >
        <i className='icon-arrow-up'></i>
      </Link>
    </>
  );
};

export default ScrollTop;
