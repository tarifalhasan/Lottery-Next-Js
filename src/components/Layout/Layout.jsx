import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import MobileMenu from '../common/MobileMenu';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <MobileMenu />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
