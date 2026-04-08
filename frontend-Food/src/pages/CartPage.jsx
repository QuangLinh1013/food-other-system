import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CartPage() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen flex flex-col">
      <Header />

      <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Cart Items */}
          <div className="lg:col-span-8">
            <h1 className="text-4xl font-extrabold mb-8 tracking-tight font-headline">Giỏ hàng của bạn</h1>
            <div className="space-y-6">
              {/* Cart Item 1 */}
              <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col sm:flex-row gap-6 items-center sm:items-start group hover:shadow-[0_40px_40px_-20px_rgba(45,47,47,0.06)] transition-all duration-300">
                <div className="relative w-32 h-32 flex-shrink-0 bg-surface-container rounded-lg overflow-hidden">
                  <img alt="Burger Bo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA8gY2pC6j4GTepCRhIS19V91aNUPJz1VEsjQjiwG6muJ-XX9F67SxdbVHNaxMe3P6FCoWtoq8bS470UNqCcGL7Y9nrh7IADbj0bKya4wtO7VE5US0pe6sGjvMCudLKjudBMZFB-Bb8n62ZtvDFrfhsPEbZCg7jthDV7Sz_BbN9IxPaUzTxMlWOiNVUGekO0gx9cK9QbbfR13MW0SVg-W5x6VVk4gN0nc_-Ta_n5n7KPV2u0AtEgazNDdgDVcy4yf9b0yBWu4y518"/>
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-xl font-bold font-headline mb-1">Burger Bò Phô Mai Đặc Biệt</h3>
                  <p className="text-on-surface-variant text-sm mb-4">Size L lớn, thêm thịt xông khói áp chảo giòn tan</p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6">
                    <div className="flex items-center bg-surface-container-low rounded-full px-3 py-1">
                      <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors font-bold text-lg">-</button>
                      <span className="w-10 text-center font-semibold">1</span>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors font-bold text-lg">+</button>
                    </div>
                    <button className="text-error-dim font-medium text-sm hover:underline">Xóa</button>
                  </div>
                </div>
                <div className="text-right sm:self-center">
                  <span className="text-2xl font-black text-on-surface font-headline">145.000₫</span>
                </div>
              </div>
              
              {/* Cart Item 2 */}
              <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col sm:flex-row gap-6 items-center sm:items-start group hover:shadow-[0_40px_40px_-20px_rgba(45,47,47,0.06)] transition-all duration-300">
                <div className="relative w-32 h-32 flex-shrink-0 bg-surface-container rounded-lg overflow-hidden">
                  <img alt="Pizza Hai San" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW4HRQ7O-jMEZM_Y2XfJ4ycdzYrsNQINvakgVBupDGLuoavv2JWMJTeIWQCWslIOeCdREmj-YX0qBmWrb5o3_W_mKAgGHHkvFuQA5vSkDDV0Lbs9hnafxZx2tUy-ULXpfqak932UB2_5A8_zs6QwH-EcDU2p9UWUSTzd08B0hL7ZrP_s560ORALiADY_2SZyoun3zmS_1067E91EJWLpT_R0MalB9nk6ReoA4FI204FEz5Q5rrJSTJGds5a_sqQH8l9pp7c9phKvA"/>
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-xl font-bold font-headline mb-1">Pizza Hải Sản Sốt Pesto</h3>
                  <p className="text-on-surface-variant text-sm mb-4">Đế mỏng giòn, hải sản tươi trong ngày</p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6">
                    <div className="flex items-center bg-surface-container-low rounded-full px-3 py-1">
                      <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors font-bold text-lg">-</button>
                      <span className="w-10 text-center font-semibold">1</span>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors font-bold text-lg">+</button>
                    </div>
                    <button className="text-error-dim font-medium text-sm hover:underline">Xóa</button>
                  </div>
                </div>
                <div className="text-right sm:self-center">
                  <span className="text-2xl font-black text-on-surface font-headline">220.000₫</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-extrabold font-headline mb-6 tracking-tight">Tóm tắt đơn hàng</h2>
                {/* Promo Code */}
                <div className="mb-8">
                  <div className="flex gap-2">
                    <input className="flex-grow bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary text-sm font-medium" placeholder="Mã giảm giá" type="text"/>
                    <button className="bg-secondary text-on-secondary px-6 py-3 rounded-lg font-bold text-sm hover:bg-secondary-dim transition-colors">Áp dụng</button>
                  </div>
                </div>
                {/* Price Breakdown */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-on-surface-variant">
                    <span className="font-medium">Tạm tính</span>
                    <span className="font-bold">365.000₫</span>
                  </div>
                  <div className="flex justify-between items-center text-on-surface-variant">
                    <span className="font-medium">Phí vận chuyển</span>
                    <span className="font-bold">15.000₫</span>
                  </div>
                  <div className="pt-4 border-t border-dashed border-outline-variant/30 flex justify-between items-end">
                    <span className="text-lg font-bold font-headline">Tổng cộng</span>
                    <div className="text-right">
                      <div className="text-4xl font-black font-headline text-primary leading-none">380.000₫</div>
                      <p className="text-[10px] text-on-surface-variant mt-1">Đã bao gồm VAT</p>
                    </div>
                  </div>
                </div>
                {/* CTA */}
                <Link to="/checkout" className="w-full bg-gradient-to-br from-primary to-primary-fixed text-white py-5 rounded-lg font-extrabold font-headline text-xl tracking-tight hover:opacity-90 active:scale-[0.98] transition-all shadow-xl shadow-orange-600/20 text-center block">
                    Thanh toán giao hàng
                </Link>
                {/* Trust Badges */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center text-center p-3 rounded-lg bg-surface-container-low">
                    <span className="material-symbols-outlined text-primary mb-1" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface">Bảo mật thanh toán</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 rounded-lg bg-surface-container-low">
                    <span className="material-symbols-outlined text-primary mb-1" style={{fontVariationSettings: "'FILL' 1"}}>currency_exchange</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface">Hoàn tiền nhanh chóng</span>
                  </div>
                </div>
              </div>
              
              {/* Additional Context/Promotion */}
              <div className="bg-tertiary-container/30 p-6 rounded-xl border border-tertiary-container text-amber-900">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>stars</span>
                  <div>
                    <p className="text-sm font-bold text-on-tertiary-container">Bạn tích lũy được 38 điểm!</p>
                    <p className="text-xs text-on-tertiary-container/80 mt-1">Dùng điểm này để đổi các món quà bất ngờ cho lần đặt sau.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
