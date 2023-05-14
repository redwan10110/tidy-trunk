import Footer from '../Shared/Footer';
import Navigation from '../Shared/Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation></Navigation>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
