import DescriptionTab from '@/components/Shop/DescriptionTab';
import ProductsDetails from '@/components/Shop/ProductsDetails';

import Layout from '../../components/layout/Layout';

const ProductId = () => {
  // const router = useRouter();
  // const { productId } = router.query;
  return (
    <>
      <Layout>
        <div className='mt-[80px] lg:mt-[70px]'>
          <ProductsDetails></ProductsDetails>
          <DescriptionTab></DescriptionTab>
        </div>
      </Layout>
    </>
  );
};

export default ProductId;
