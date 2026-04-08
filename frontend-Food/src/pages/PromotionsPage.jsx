import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PromotionsPage() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen flex flex-col">
      <Header />

      <main className="pt-24 pb-20 flex-grow">
        {/* Promo Banner Hero */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-container p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="z-10 text-center md:text-left">
              <span className="inline-block px-4 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-xs font-extrabold uppercase rounded-full mb-6">Ưu đãi độc quyền</span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-primary-fixed leading-none mb-6 tracking-tight">Mã giảm giá hot nhất</h1>
              <p className="text-on-primary text-xl max-w-xl mb-8 font-medium">Thưởng thức bữa tiệc gourmet với ưu đãi lên đến 50%. Tốc độ giao hàng nhanh như chớp cho người sành ăn.</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button className="bg-on-primary-fixed text-white px-8 py-4 rounded-lg font-headline font-bold text-lg hover:scale-105 transition-transform active:opacity-80">Săn mã ngay</button>
                <button className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-headline font-bold text-lg hover:bg-white/30 transition-all">Xem chi tiết</button>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 aspect-square max-w-md z-10">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-125"></div>
              <img alt="Delicious Pizza" className="w-full h-full object-contain relative drop-shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtZVuIbW-7SC5iS70ZwFE-0iBYFK3GXBetobjDX_Ryu143jpNjHy11XrrdmorNDQJWLJN5ZsyBejQJMaSgvG1xPRX4URcIvTGV_u3-i-hukcthRa_KtvdkMXimBe4mnGtO0xwS6_qNv5yPcrbI1XQ7Ss229xTmVOLW9VTy_fs0DJG9vkUtRK_Ak9Cphs7o_5_mUKWLuDfOrICgNsoqYySeZeSGyY_oU9i9ivp6fndfY8mF6Ao9VZHKKfAZ6tUH1OmumjgpXs0nCqg"/>
            </div>
          </div>
        </section>

        {/* Voucher Center Grid */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight">Voucher của bạn</h2>
            <div className="flex gap-4">
              <span className="text-sm font-bold text-orange-600 flex items-center gap-1 cursor-pointer hover:underline">
                Xem tất cả <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Voucher 1 */}
            <div className="group relative bg-surface-container-lowest rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] border-l-8 border-orange-500 overflow-hidden shadow-sm" style={{maskImage: 'radial-gradient(circle at 0 50%, transparent 12px, black 13px), radial-gradient(circle at 100% 50%, transparent 12px, black 13px)', maskComposite: 'intersect', WebkitMaskComposite: 'destination-in'}}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>local_mall</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-extrabold text-lg leading-tight">Giảm 30K cho đơn từ 100K</h3>
                    <p className="text-xs text-on-surface-variant font-medium">Toàn sàn Linhfood</p>
                  </div>
                </div>
                <span className="bg-error-container text-on-error-container text-[10px] font-black px-2 py-1 rounded uppercase">Hot</span>
              </div>
              <div className="my-6 border-t-2 border-dashed border-surface-container"></div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">Mã: LINHFOOD30</p>
                  <p className="text-[10px] text-zinc-400">HSD: 31/12/2024</p>
                </div>
                <button className="bg-gradient-to-br from-primary to-primary-container text-white px-5 py-2 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95">Lưu mã</button>
              </div>
            </div>

            {/* Voucher 2 */}
            <div className="group relative bg-surface-container-lowest rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] border-l-8 border-secondary-dim overflow-hidden shadow-sm" style={{maskImage: 'radial-gradient(circle at 0 50%, transparent 12px, black 13px), radial-gradient(circle at 100% 50%, transparent 12px, black 13px)', maskComposite: 'intersect', WebkitMaskComposite: 'destination-in'}}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-secondary-dim">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>delivery_dining</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-extrabold text-lg leading-tight">FreeShip Xtra up to 25K</h3>
                    <p className="text-xs text-on-surface-variant font-medium">Cho đơn từ 50K</p>
                  </div>
                </div>
              </div>
              <div className="my-6 border-t-2 border-dashed border-surface-container"></div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">Mã: FREESHIPNOW</p>
                  <p className="text-[10px] text-zinc-400">HSD: 25/12/2024</p>
                </div>
                <button className="bg-secondary-dim text-white px-5 py-2 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95">Copy mã</button>
              </div>
            </div>

            {/* Voucher 3 */}
            <div className="group relative bg-surface-container-lowest rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] border-l-8 border-tertiary-dim overflow-hidden shadow-sm" style={{maskImage: 'radial-gradient(circle at 0 50%, transparent 12px, black 13px), radial-gradient(circle at 100% 50%, transparent 12px, black 13px)', maskComposite: 'intersect', WebkitMaskComposite: 'destination-in'}}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center text-tertiary-dim">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-extrabold text-lg leading-tight">Giảm 50% max 100K</h3>
                    <p className="text-xs text-on-surface-variant font-medium">Dành cho bạn mới</p>
                  </div>
                </div>
                <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-black px-2 py-1 rounded uppercase">New</span>
              </div>
              <div className="my-6 border-t-2 border-dashed border-surface-container"></div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">Mã: HELLOLINH</p>
                  <p className="text-[10px] text-zinc-400">HSD: 30/12/2024</p>
                </div>
                <button className="bg-gradient-to-br from-primary to-primary-container text-white px-5 py-2 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95">Lưu mã</button>
              </div>
            </div>

            {/* Voucher 4 */}
            <div className="group relative bg-surface-container-lowest rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] border-l-8 border-orange-500 overflow-hidden shadow-sm" style={{maskImage: 'radial-gradient(circle at 0 50%, transparent 12px, black 13px), radial-gradient(circle at 100% 50%, transparent 12px, black 13px)', maskComposite: 'intersect', WebkitMaskComposite: 'destination-in'}}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>payments</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-extrabold text-lg leading-tight">Hoàn xu 15% tối đa 20K</h3>
                    <p className="text-xs text-on-surface-variant font-medium">Thanh toán qua ví LinhPay</p>
                  </div>
                </div>
              </div>
              <div className="my-6 border-t-2 border-dashed border-surface-container"></div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">Mã: LINHPAY15</p>
                  <p className="text-[10px] text-zinc-400">HSD: 31/12/2024</p>
                </div>
                <button className="bg-gradient-to-br from-primary to-primary-container text-white px-5 py-2 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95">Lưu mã</button>
              </div>
            </div>
            
             {/* Voucher 5 */}
             <div className="group relative bg-surface-container-lowest rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] border-l-8 border-zinc-400 overflow-hidden shadow-sm" style={{maskImage: 'radial-gradient(circle at 0 50%, transparent 12px, black 13px), radial-gradient(circle at 100% 50%, transparent 12px, black 13px)', maskComposite: 'intersect', WebkitMaskComposite: 'destination-in'}}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-600">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>restaurant_menu</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-extrabold text-lg leading-tight">Giảm 20% Combo Nhóm</h3>
                    <p className="text-xs text-on-surface-variant font-medium">Tại các nhà hàng đối tác</p>
                  </div>
                </div>
              </div>
              <div className="my-6 border-t-2 border-dashed border-surface-container"></div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">Mã: TEAMFOOD20</p>
                  <p className="text-[10px] text-zinc-400">HSD: 15/01/2025</p>
                </div>
                <button className="bg-gradient-to-br from-primary to-primary-container text-white px-5 py-2 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95">Lưu mã</button>
              </div>
            </div>

            {/* Voucher 6 */}
            <div className="group relative bg-surface-container-lowest rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] border-l-8 border-orange-500 overflow-hidden shadow-sm" style={{maskImage: 'radial-gradient(circle at 0 50%, transparent 12px, black 13px), radial-gradient(circle at 100% 50%, transparent 12px, black 13px)', maskComposite: 'intersect', WebkitMaskComposite: 'destination-in'}}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>fastfood</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-extrabold text-lg leading-tight">Tặng 1 trà sữa 0đ</h3>
                    <p className="text-xs text-on-surface-variant font-medium">Khi đặt đơn từ 150K</p>
                  </div>
                </div>
              </div>
              <div className="my-6 border-t-2 border-dashed border-surface-container"></div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">Mã: MILKTRA0D</p>
                  <p className="text-[10px] text-zinc-400">HSD: 31/12/2024</p>
                </div>
                <button className="bg-gradient-to-br from-primary to-primary-container text-white px-5 py-2 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95">Lưu mã</button>
              </div>
            </div>

          </div>
        </section>

        {/* Terms & Conditions Section */}
        <section className="max-w-7xl mx-auto px-6 mt-16">
          <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/15">
            <h3 className="font-headline text-xl font-bold mb-6">Điều khoản & Điều kiện sử dụng Voucher</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-3 text-sm text-on-surface-variant">
                <li className="flex gap-2"><span className="material-symbols-outlined text-orange-500 text-sm">check_circle</span> Mỗi voucher chỉ áp dụng cho 01 lần sử dụng duy nhất.</li>
                <li className="flex gap-2"><span className="material-symbols-outlined text-orange-500 text-sm">check_circle</span> Không áp dụng đồng thời với các chương trình khuyến mãi khác.</li>
                <li className="flex gap-2"><span className="material-symbols-outlined text-orange-500 text-sm">check_circle</span> Voucher không có giá trị quy đổi thành tiền mặt.</li>
              </ul>
              <ul className="space-y-3 text-sm text-on-surface-variant">
                <li className="flex gap-2"><span className="material-symbols-outlined text-orange-500 text-sm">info</span> Linhfood có quyền từ chối áp dụng voucher nếu phát hiện gian lận.</li>
                <li className="flex gap-2"><span className="material-symbols-outlined text-orange-500 text-sm">info</span> Hạn sử dụng được quy định rõ trên mỗi voucher.</li>
                <li className="mt-4"><a className="text-orange-600 font-bold hover:underline" href="#">Xem chi tiết quy định chung →</a></li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
