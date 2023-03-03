import Navigation from './Navigation';
import SidebarDash from './SidebarDash';
const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-200 mt-4">
      <SidebarDash />
      <main className="w-full">
        <Navigation />
        {children}
      </main>
    </div>
  );
};

export default Layout;
