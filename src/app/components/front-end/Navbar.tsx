import { useAppSelector } from '@/redux/hooks';
import { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

interface PropsType {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setShowCart }: PropsType) => {
  const cartCount = useAppSelector((state) => state.cartReducer.length)

  return (
    <div className="py-4 bg-white top-0 sticky shadow-sm z-50">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-bold">
            <span className="text-purple-600">ars</span>
            <span className="text-black">.store</span>
          </div>

          {/* Search Bar */}
          <div className="lg:flex hidden w-full max-w-[500px] mx-8">
            <div className="relative flex w-full">
              <input 
                className="border-2 border-purple-200 px-6 py-3 w-full rounded-l-lg focus:outline-none focus:border-purple-400 transition-colors" 
                type="text" 
                placeholder="Search for product..." 
              />
              <button className="bg-purple-500 hover:bg-purple-600 text-white text-[22px] grid place-items-center px-6 rounded-r-lg transition-colors">
                <BsSearch />
              </button>
            </div>
          </div>

          {/* User & Cart */}
          <div className="flex gap-4 md:gap-8 items-center">
            {/* User Account */}
            <div className="md:flex hidden gap-3 items-center group cursor-pointer">
              <div className="rounded-full border-2 border-purple-200 text-purple-500 text-[28px] w-[45px] h-[45px] grid place-items-center group-hover:border-purple-400 group-hover:text-purple-600 transition-colors">
                <AiOutlineUser />
              </div>
              <div className="group-hover:text-purple-600 transition-colors">
                <p className="text-gray-500 text-sm">Hello, Sign in</p>
                <p className="font-medium text-gray-700">Your Account</p>
              </div>
            </div>

            {/* Shopping Cart */}
            <div
              className="text-gray-600 hover:text-purple-600 text-[28px] relative cursor-pointer transition-colors"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShoppingCart />
              {cartCount > 0 && (
                <div className="absolute -top-3 -right-2 bg-purple-500 w-6 h-6 rounded-full text-white text-[14px] grid place-items-center font-medium animate-pulse">
                  {cartCount}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-b border-gray-100 mt-4" />
      </div>
    </div>
  );
};

export default Navbar;