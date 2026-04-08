import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm dark:shadow-none">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-black italic tracking-tighter text-orange-600 font-headline">
          Linhfood
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-['Plus_Jakarta_Sans'] font-bold text-sm tracking-tight">
          <Link className="text-orange-600 font-extrabold border-b-2 border-orange-600 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer" to="/">Trang chủ</Link>
          <Link className="text-gray-700 hover:text-orange-500 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer" to="/menu">Menu</Link>
          <Link className="text-gray-700 hover:text-orange-500 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer" to="/combo">Combo</Link>
          <Link className="text-gray-700 hover:text-orange-500 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer" to="/promotions">Khuyến mãi</Link>
        </div>
        {/* Action Cluster */}
        <div className="flex items-center gap-4">
          <Link to="/orders" className="flex items-center justify-center bg-surface-container-low text-on-surface w-10 h-10 rounded-full hover:bg-surface-container-high transition-colors shadow-sm" title="Lịch sử đơn hàng">
             <span className="material-symbols-outlined">receipt_long</span>
          </Link>
          <Link to="/cart" className="flex items-center gap-2 bg-primary-container text-on-primary-container px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-sm">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span>Giỏ hàng</span>
          </Link>
          <Link to="/profile" className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container hover:border-primary transition-colors cursor-pointer shadow-sm hover:scale-105 active:scale-95 ml-2">
             <img src="https://i.pravatar.cc/150?img=33" alt="Avatar" className="w-full h-full object-cover" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
