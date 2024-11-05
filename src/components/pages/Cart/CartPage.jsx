import NavBar from '../../layouts/NavBar';
import CartDetails from './partials/CartDetails';
import EmptyCart from './partials/EmptyCart';

const CartPage = () => {
  const navlinkinfo = [
    { label: 'Home', href: '/home', icon: 'ri-home-line' },
    // { label: 'Cart', href: '/cart', icon: 'ri-shopping-cart-line' },
    { label: 'Contact', href: '/contact', icon: 'ri-mail-line' },
  ];

  let arr = ['items', 'details'];
  // let arr = []
  let pageRander = <EmptyCart />;

  if (arr.length > 0) {
    pageRander = <CartDetails itemdata={arr} />;
  }
  return (
    <div>
      <NavBar navdata={navlinkinfo} />
      <div className="h-[15vh] "></div>{' '}
      {/* do not remove  this container it is use to make space on top only*/}
      <div className="h-[80vh] w-screen overflow-x-hidden overflow-y-auto">
        {pageRander}
      </div>
    </div>
  );
};

export default CartPage;
