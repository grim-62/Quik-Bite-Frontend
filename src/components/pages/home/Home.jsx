import NavBar from '../../layouts/NavBar';
import Homefoodscroll from './partials/Homefoodscroll';

const Home = () => {
  document.title = 'Order Food Unline';

  const navlinkinfo = [
    // { label: 'Home', href: '/home', icon: 'ri-home-line' },
    { label: 'Cart', href: '/cart', icon: 'ri-shopping-cart-line' },
    { label: 'Contact', href: '/contact', icon: 'ri-mail-line' },
  ];

  return (
    <>
      <div className="w-full h-full bg-zinc-200">
        <NavBar navdata={navlinkinfo} />
        <Homefoodscroll />
      </div>
    </>
  );
};

export default Home;
