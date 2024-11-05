import { NavLink } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="flex justify-center items-center  rounded-md">
      <div className="container bg-white shadow-2xl shadow-gray-500 rounded-md p-8 w-96 flex flex-col items-center">
        <img
          src="https://evyapari.com/static/media/empty_cart.45e2dadaaca71284eb3a.jpg"
          alt=""
        />

        <div className="flex flex-col justify-center items-center ">
          <p className="text-xl font-semibold mb-2">Your cart is empty</p>
          <p className="text-gray-600 text-center">
            You can go to the home page to view more restaurants.
          </p>
          <button className="bg-yellow-300 m-5 p-2 rounded-md">
            <NavLink to={'/'}> Browse more </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
