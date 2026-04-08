import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('🎉 Đặt hàng thành công! Mã đơn hàng của bạn là #LF' + Math.floor(Math.random() * 10000) + '. Cảm ơn bạn đã sử dụng Linhfood!');
      navigate('/');
    }, 1500);
  };

  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen flex flex-col">
      <Header />

      <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto w-full flex-grow">
        
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-8">
            <Link to="/cart" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[18px] mr-1" style={{fontVariationSettings: "'wght' 600"}}>arrow_back</span>
                Trở lại Giỏ hàng
            </Link>
        </div>

        <h1 className="text-4xl font-extrabold mb-10 tracking-tight font-headline">Thanh toán</h1>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form Info */}
          <div className="lg:col-span-7 space-y-10 animate-fade-in-up">
            
            {/* Section 1: Thông tin giao hàng */}
            <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-gray-50/50">
              <h2 className="text-xl font-bold font-headline mb-6 flex items-center gap-2">
                 <span className="material-symbols-outlined text-primary">location_on</span> 
                 Thông tin nhận hàng
              </h2>
              
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Họ và tên</label>
                    <input required type="text" className="w-full bg-surface-container-low border-2 border-transparent px-4 py-3 rounded-xl focus:bg-white focus:border-primary focus:outline-none transition-colors" placeholder="Trần Văn A" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Số điện thoại</label>
                    <input required type="tel" className="w-full bg-surface-container-low border-2 border-transparent px-4 py-3 rounded-xl focus:bg-white focus:border-primary focus:outline-none transition-colors" placeholder="090 123 4567" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Địa chỉ cụ thể</label>
                  <input required type="text" className="w-full bg-surface-container-low border-2 border-transparent px-4 py-3 rounded-xl focus:bg-white focus:border-primary focus:outline-none transition-colors" placeholder="Số nhà, Tên đường, Phường/Xã, Quận/Huyện..." />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Ghi chú cho tài xế (Tùy chọn)</label>
                  <textarea rows="2" className="w-full resize-none bg-surface-container-low border-2 border-transparent px-4 py-3 rounded-xl focus:bg-white focus:border-primary focus:outline-none transition-colors" placeholder="Gọi trước khi đến, hoặc để ở quầy lễ tân..."></textarea>
                </div>
              </div>
            </section>

            {/* Section 2: Giao hàng */}
            <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-gray-50/50">
               <h2 className="text-xl font-bold font-headline mb-6 flex items-center gap-2">
                 <span className="material-symbols-outlined text-primary">local_shipping</span> 
                 Phương thức giao hàng
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <label className={`relative cursor-pointer rounded-xl border-2 p-5 flex flex-col gap-2 transition-all ${shippingMethod === 'standard' ? 'border-primary bg-orange-50' : 'border-gray-100 hover:border-gray-200 bg-white'}`}>
                    <input type="radio" name="shipping" value="standard" className="sr-only" checked={shippingMethod === 'standard'} onChange={() => setShippingMethod('standard')} />
                    <div className="flex justify-between items-start">
                       <span className="font-bold text-gray-900">Giao tiêu chuẩn</span>
                       <span className="material-symbols-outlined text-primary" style={{ opacity: shippingMethod === 'standard' ? 1 : 0}}>check_circle</span>
                    </div>
                    <span className="text-sm text-gray-500">Dự kiến 30 - 45 phút</span>
                    <span className="font-bold text-gray-900 mt-2">15.000₫</span>
                 </label>

                 <label className={`relative cursor-pointer rounded-xl border-2 p-5 flex flex-col gap-2 transition-all ${shippingMethod === 'express' ? 'border-primary bg-orange-50' : 'border-gray-100 hover:border-gray-200 bg-white'}`}>
                    <input type="radio" name="shipping" value="express" className="sr-only" checked={shippingMethod === 'express'} onChange={() => setShippingMethod('express')} />
                    <div className="flex justify-between items-start">
                       <span className="font-bold text-gray-900">Giao hoả tốc</span>
                       <span className="material-symbols-outlined text-primary" style={{ opacity: shippingMethod === 'express' ? 1 : 0}}>check_circle</span>
                    </div>
                    <span className="text-sm text-gray-500">Dự kiến 15 - 20 phút</span>
                    <span className="font-bold text-gray-900 mt-2">35.000₫</span>
                 </label>
              </div>
            </section>

            {/* Section 3: Thanh toán */}
            <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-gray-50/50">
               <h2 className="text-xl font-bold font-headline mb-6 flex items-center gap-2">
                 <span className="material-symbols-outlined text-primary">payments</span> 
                 Phương thức thanh toán
              </h2>

              <div className="space-y-4">
                  {/* Cash */}
                 <label className={`cursor-pointer rounded-xl border-2 p-4 flex items-center justify-between transition-all ${paymentMethod === 'cash' ? 'border-primary bg-orange-50' : 'border-gray-100 hover:border-gray-200 bg-white'}`}>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                          <span className="material-symbols-outlined">payments</span>
                       </div>
                       <span className="font-bold">Tiền mặt khi nhận hàng (COD)</span>
                    </div>
                    <input type="radio" name="payment" value="cash" className="w-5 h-5 accent-primary cursor-pointer" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')} />
                 </label>

                 {/* E-Wallet */}
                 <label className={`cursor-pointer rounded-xl border-2 p-4 flex items-center justify-between transition-all ${paymentMethod === 'wallet' ? 'border-primary bg-orange-50' : 'border-gray-100 hover:border-gray-200 bg-white'}`}>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                          <span className="material-symbols-outlined">wallet</span>
                       </div>
                       <span className="font-bold">Ví điện tử (Momo/ZaloPay)</span>
                    </div>
                    <input type="radio" name="payment" value="wallet" className="w-5 h-5 accent-primary cursor-pointer" checked={paymentMethod === 'wallet'} onChange={() => setPaymentMethod('wallet')} />
                 </label>

                 {/* Credit Card */}
                 <label className={`cursor-pointer rounded-xl border-2 p-4 flex items-center justify-between transition-all ${paymentMethod === 'card' ? 'border-primary bg-orange-50' : 'border-gray-100 hover:border-gray-200 bg-white'}`}>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                          <span className="material-symbols-outlined">credit_card</span>
                       </div>
                       <span className="font-bold">Thẻ Tín dụng / Ghi nợ</span>
                    </div>
                    <input type="radio" name="payment" value="card" className="w-5 h-5 accent-primary cursor-pointer" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                 </label>
              </div>
            </section>

          </div>

           {/* Right Column: Order Summary */}
           <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-gray-50/50">
                <h2 className="text-2xl font-extrabold font-headline mb-6 tracking-tight">Đơn hàng</h2>
                
                {/* Mini Item List */}
                <div className="space-y-4 mb-8">
                   <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg bg-surface-container overflow-hidden shrink-0">
                         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA8gY2pC6j4GTepCRhIS19V91aNUPJz1VEsjQjiwG6muJ-XX9F67SxdbVHNaxMe3P6FCoWtoq8bS470UNqCcGL7Y9nrh7IADbj0bKya4wtO7VE5US0pe6sGjvMCudLKjudBMZFB-Bb8n62ZtvDFrfhsPEbZCg7jthDV7Sz_BbN9IxPaUzTxMlWOiNVUGekO0gx9cK9QbbfR13MW0SVg-W5x6VVk4gN0nc_-Ta_n5n7KPV2u0AtEgazNDdgDVcy4yf9b0yBWu4y518" alt="Burger" className="w-full h-full object-cover"/>
                      </div>
                      <div className="flex-grow">
                         <h4 className="font-bold text-sm">Burger Bò Phô Mai Đặc Biệt</h4>
                         <span className="text-xs text-gray-500">SL: 1</span>
                      </div>
                      <span className="font-bold">145.000₫</span>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg bg-surface-container overflow-hidden shrink-0">
                         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW4HRQ7O-jMEZM_Y2XfJ4ycdzYrsNQINvakgVBupDGLuoavv2JWMJTeIWQCWslIOeCdREmj-YX0qBmWrb5o3_W_mKAgGHHkvFuQA5vSkDDV0Lbs9hnafxZx2tUy-ULXpfqak932UB2_5A8_zs6QwH-EcDU2p9UWUSTzd08B0hL7ZrP_s560ORALiADY_2SZyoun3zmS_1067E91EJWLpT_R0MalB9nk6ReoA4FI204FEz5Q5rrJSTJGds5a_sqQH8l9pp7c9phKvA" alt="Pizza" className="w-full h-full object-cover"/>
                      </div>
                      <div className="flex-grow">
                         <h4 className="font-bold text-sm">Pizza Hải Sản Sốt Pesto</h4>
                         <span className="text-xs text-gray-500">SL: 1</span>
                      </div>
                      <span className="font-bold">220.000₫</span>
                   </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-gray-600">
                    <span className="font-medium">Tạm tính (2 món)</span>
                    <span className="font-bold">365.000₫</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600">
                    <span className="font-medium">Phí giao hàng</span>
                    <span className="font-bold">{shippingMethod === 'standard' ? '15.000₫' : '35.000₫'}</span>
                  </div>
                  <div className="pt-4 border-t border-dashed border-gray-300 flex justify-between items-end">
                    <span className="text-lg font-bold font-headline">Tổng cộng</span>
                    <div className="text-right">
                      <div className="text-4xl font-black font-headline text-primary leading-none">
                          {shippingMethod === 'standard' ? '380.000₫' : '400.000₫'}
                      </div>
                      <p className="text-[10px] text-gray-500 mt-1">Đã bao gồm VAT</p>
                    </div>
                  </div>
                </div>
                
                {/* CTA */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-br from-primary to-primary-fixed text-white py-5 rounded-xl font-extrabold font-headline text-xl tracking-tight shadow-xl shadow-orange-600/20 flex justify-center items-center gap-2 ${isSubmitting ? 'opacity-80 cursor-wait' : 'hover:scale-[1.02] active:scale-[0.98] transition-all'}`}
                >
                  {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin hidden">progress_activity</span>
                        Đang xử lý...
                      </>
                  ) : (
                     <>
                        <span className="material-symbols-outlined">rocket_launch</span>
                        Đặt Hàng Ngay
                     </>
                  )}
                </button>

                <p className="text-xs text-center text-gray-500 mt-4 leading-relaxed">
                   Bằng việc đặt đơn hàng, bạn đồng ý với các  
                   <a href="#" className="font-bold text-primary ml-1 hover:underline">Điều Khoản Dịch Vụ</a> của chúng tôi.
                </p>
              </div>
            </div>
           </div>
        </form>

      </main>

      <Footer />
    </div>
  );
}
