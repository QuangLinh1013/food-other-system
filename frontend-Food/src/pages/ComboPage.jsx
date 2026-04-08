import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ComboPage() {
  return (
    <div className="bg-surface font-body text-on-background antialiased min-h-screen flex flex-col">
      <Header />

      <main className="pt-20 flex-grow">
        {/* Hero Banner */}
        <section className="relative h-[500px] overflow-hidden bg-zinc-900">
          <img alt="Siêu Combo" className="absolute inset-0 w-full h-full object-cover opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACmQ-MgSIGzS1rnTsYXJdK9FeoFfDu5dtTJ2CMrhZdVxdZN-lDpZ_DvI3LTCq6K2oKl5WKnoyvuLPH-X_bowAESY1v6yVaLizqxqkw4j5LTtBrlJp3B90gBVGWLiwo5skRBJR9GC96st_Hrs7E5g7Ue23Y7HOJeKQRejVNv4tbBuvrGtO8ItTdaSzISirRUT7oZxx6SUVvkSsE7NKdymGPD095I_4UuycwFGqF-SFQUyit0qWueG0oU8KTJvGORO2efqY0-eXpnoc"/>
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-start">
            <span className="bg-tertiary-container text-on-tertiary-container font-headline font-extrabold px-4 py-1 rounded-full text-sm mb-6 tracking-wider">LIMITED TIME ONLY</span>
            <h1 className="text-white font-headline font-extrabold text-5xl md:text-7xl leading-tight mb-8 max-w-2xl">
                Siêu Combo <br/>
              <span className="text-primary-fixed">Tiết Kiệm Tới 50%</span>
            </h1>
            <button className="bg-gradient-to-br from-primary to-primary-fixed text-white font-headline font-bold px-10 py-4 rounded-lg text-xl hover:scale-105 transition-transform shadow-2xl">
              Khám phá ngay
            </button>
          </div>
        </section>

        {/* Section 1: Combo Bán Chạy */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline font-extrabold text-4xl mb-2">Combo Bán Chạy</h2>
              <p className="text-on-surface-variant text-lg">Những lựa chọn được yêu thích nhất tuần này</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Combo Card 1 */}
            <div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:scale-[1.03] transition-all duration-300 hover:shadow-[0_40px_40px_-20px_rgba(45,47,47,0.06)]">
              <div className="aspect-square overflow-hidden relative">
                <img alt="Combo Gà Rán & Pepsi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbnd1UsStZe08A4c2Ums7VZAhZ7DtbvA5OLVteV48WnHxDwM_8a26eDKGZ1OWWF3UhuuAlEuY5OB4UalUIN1RujSPxy-zajlzffbC230OOUjydL1pa6G3eCpXTPXbiZo0URjJiUFqgrKbvF7V08zmCnegnXSPjKM4PkeJW-nKvB0gjr8BWvUI4FZWf4wzQjlzod9xN9Jnn_fnNXJK3j-0ezRVA44WYC0Zo5gvfN26c1U99ulgW5kwBHMwj_j4VVKZcOiCAxD8L390"/>
                <div className="absolute top-4 right-4 bg-error text-white font-headline font-extrabold px-3 py-1 rounded-lg text-xs">HOT SELLER</div>
              </div>
              <div className="p-8">
                <h3 className="font-headline font-bold text-2xl mb-2">Combo Gà Rán & Pepsi</h3>
                <p className="text-on-surface-variant mb-6 line-clamp-2">2 miếng gà giòn cay, 1 khoai tây chiên size M và 1 ly Pepsi mát lạnh.</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-on-surface-variant line-through text-sm">120.000đ</span>
                    <span className="text-primary-fixed font-headline font-extrabold text-2xl">89.000đ</span>
                  </div>
                  <button className="bg-gradient-to-br from-primary to-primary-fixed text-white font-headline font-bold px-6 py-3 rounded-lg active:scale-90 transition-transform">Đặt ngay</button>
                </div>
              </div>
            </div>
            
            {/* Combo Card 2 */}
            <div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:scale-[1.03] transition-all duration-300 hover:shadow-[0_40px_40px_-20px_rgba(45,47,47,0.06)]">
              <div className="aspect-square overflow-hidden relative">
                <img alt="Combo Burger Đôi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrDDt8js2WFNLo8YzPMBSf4RgKqsfITPKcMpSxoHjoAd_1UhXWFR8dPwdPUxsUDsL2FaOcjVDsD1NBHuw7lG5G4k-U-u14rcVhTIyP-HeysMUBAEV7M98c0joi8JLqbICrAbTLNOJVzFz2ro7isjCOGL5ESDhzwu6O458a8r4GeufRXanCztjPKYlFtJT0J_eL3mEPYVQQoZnKaNgPg7QBLoWG4RMspHyYM9VEpndtDEIWvZcteIBhdqmPAeJDLCtfVq-pVwoDZgY"/>
                <div className="absolute top-4 right-4 bg-tertiary-container text-on-tertiary-container font-headline font-extrabold px-3 py-1 rounded-lg text-xs">BEST VALUE</div>
              </div>
              <div className="p-8">
                <h3 className="font-headline font-bold text-2xl mb-2">Combo Burger Đôi</h3>
                <p className="text-on-surface-variant mb-6 line-clamp-2">2 Burger bò phô mai, 2 phần khoai và 2 trà đào sả tắc thơm lừng.</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-on-surface-variant line-through text-sm">250.000đ</span>
                    <span className="text-primary-fixed font-headline font-extrabold text-2xl">149.000đ</span>
                  </div>
                  <button className="bg-gradient-to-br from-primary to-primary-fixed text-white font-headline font-bold px-6 py-3 rounded-lg active:scale-90 transition-transform">Đặt ngay</button>
                </div>
              </div>
            </div>

            {/* Combo Card 3 */}
            <div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:scale-[1.03] transition-all duration-300 hover:shadow-[0_40px_40px_-20px_rgba(45,47,47,0.06)]">
              <div className="aspect-square overflow-hidden relative">
                <img alt="Combo Gia Đình" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFT9R1pF0nWAazuX8TUxMpMuCGjweOlcdnf9tJpBg47qTuSfENNJL7MNdUV7bAV4JagTrQtLCp9myk1ct9mNo1SjopWRDRVGb2rvDyrsCKDAexUAhAcZO9Tg_OMwuJd3lZNyWWhUnmsWGFdwz4DpV_ITVOZRJP0ljMWbzFRfYrwC4wNtYAEqX5xzliFlXxL6OSX2pOqz-C5sGM7GPh0Km4qdA94_Dc8jzbqCtrmHuP9RqjdcHy1gGG2tgmmv1QshpSiNPz79mqjfY"/>
              </div>
              <div className="p-8">
                <h3 className="font-headline font-bold text-2xl mb-2">Combo Gia Đình</h3>
                <p className="text-on-surface-variant mb-6 line-clamp-2">1 Pizza size L, 6 cánh gà chiên mắm, salad Nga và Pepsi 1.5L.</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-on-surface-variant line-through text-sm">450.000đ</span>
                    <span className="text-primary-fixed font-headline font-extrabold text-2xl">299.000đ</span>
                  </div>
                  <button className="bg-gradient-to-br from-primary to-primary-fixed text-white font-headline font-bold px-6 py-3 rounded-lg active:scale-90 transition-transform">Đặt ngay</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Ưu Đãi Đặc Biệt */}
        <section className="bg-surface-container-low py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <h2 className="font-headline font-extrabold text-5xl leading-tight">Ưu Đãi Đặc Biệt <br/> <span className="text-error">Chỉ Trong 2 Giờ!</span></h2>
                <p className="text-on-surface-variant text-xl max-w-lg">Flash Deal đặc biệt dành riêng cho khách hàng đặt app. Giảm thêm 20% khi nhập mã LINHFRESH.</p>
                <div className="flex gap-4">
                  <div className="bg-surface-container-lowest p-4 rounded-xl text-center min-w-[80px]">
                    <span className="block font-headline font-extrabold text-3xl">01</span>
                    <span className="text-xs uppercase font-bold text-outline">Giờ</span>
                  </div>
                  <div className="bg-surface-container-lowest p-4 rounded-xl text-center min-w-[80px]">
                    <span className="block font-headline font-extrabold text-3xl">42</span>
                    <span className="text-xs uppercase font-bold text-outline">Phút</span>
                  </div>
                  <div className="bg-surface-container-lowest p-4 rounded-xl text-center min-w-[80px]">
                    <span className="block font-headline font-extrabold text-3xl">18</span>
                    <span className="text-xs uppercase font-bold text-outline">Giây</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="absolute -inset-4 bg-primary-fixed opacity-10 blur-3xl rounded-full"></div>
                <div className="relative bg-surface-container-lowest rounded-3xl p-8 flex gap-6 items-center shadow-xl">
                  <img alt="Flash Deal" className="w-32 h-32 rounded-2xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA8iT-zQFjJuxlGOBzWmz9Me4NZmvFsiClXVh0P-NWx8WgW1R4QaB-ilC3sSRMwmOHsd_2rM6k4UTt9NNnsUKaXBUC7rGplUTA7jZqWJG5Dt-NpByng0MNpy22hSNwW4zZLS9H1FgjfPuuEB9pcFFhBN0IKSOKmP_qNs6Y6K2-lbjXCoIbDT3N0AmYvv_8rMT1sF9QdVYYj2GFwM0fb_jCbvL7WMMjkapPhEskC87iss4KRo-YKYLXmnA99Z8ALM0VsQEFrXpG8x0"/>
                  <div className="flex-1">
                    <h4 className="font-headline font-bold text-xl mb-1">Double Cheese Flash</h4>
                    <p className="text-on-surface-variant text-sm mb-4">Mua 1 tặng 1 duy nhất hôm nay</p>
                    <button className="bg-primary text-white font-headline font-bold px-6 py-2 rounded-lg text-sm w-full">Lấy ưu đãi ngay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Gợi Ý Hôm Nay */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="font-headline font-extrabold text-3xl mb-12">Gợi Ý Hôm Nay</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Suggestion Item 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-white relative shadow-sm">
                <img alt="Khoai tây chiên" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABXfBO8QYsTyWm-kaHrGCQd9RTWOH_pq2ByRpe61blEKAUozITRLuh3b1T0oVG5luYrcERWf22I_FbG7HWO4OkqQXUEGwal1eVPCLfBDmX1IZYfHRJu4OmgxArbYg99zcjcrgLXzyEGHUvwn3dkkU4X_1gLAIxpgFbqnlBFfHeKatdVRCXz3QEnyR66kk6BP0GkMpNiaQi_1MKFFo3_i3ZQ5DoNWSCPiwCkF3Cs8YPlOynQ9y--8hwkfdVghGqZsUnbeVk8qNtkeI"/>
                <button className="absolute bottom-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg text-primary hover:bg-primary hover:text-white transition-colors">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <h4 className="font-headline font-bold">Khoai tây lắc phô mai</h4>
              <p className="text-primary-fixed font-bold">35.000đ</p>
            </div>
            {/* Suggestion Item 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-white relative shadow-sm">
                <img alt="Trà đào" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp_KwW84rP7nXHj7siraygwpLz1v8MfYb-4eBQtvWr3ETyp6lU5RndGsKLmG0wZYHGCGC4ooMk4tm7Pz0rqw9G-hLRjXn7tuQwoIQisSj_i4gsz7YdF9CcG6ebM0wMcK7oHLCbH6Tq94WGLhNOqm63TgnAMtviJhn7UwXad2mZWkgwy202aNBRsAXN18FXNJqbm_IFtFecZvnaNbmxm-5gGWt4cDpf--YwXnjduYegPis376dA3TYiDyXr0cgDiYMTdXVjCDOsNs8"/>
                <button className="absolute bottom-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg text-primary hover:bg-primary hover:text-white transition-colors">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <h4 className="font-headline font-bold">Trà đào sả tắc</h4>
              <p className="text-primary-fixed font-bold">29.000đ</p>
            </div>
            {/* Suggestion Item 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-white relative shadow-sm">
                <img alt="Cánh gà" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0gIjlsPAZE6ZAYn55upDnD6roZglEQe9DAaQECw90Ba1AqQFww0jpy3u9l-vQ-XagbAnUY14gV95_A1dyrYQIphwV94Fm29J4SXWaF1v4aTzLuCbqvLO4ILbYjspHmy5k-mUjhEOCKdq1UbV8dAwDdKP0WhVzR90vUvBzXOjijKzCpjj0jtUcpbx2gu4rJJK1m3rOztmM7DC2UmSjh3e6gLrvsMfYv34pWrtV4JCbGwClB6gGjskVU4zkRAwZKBZWVZBde8mxYQI"/>
                <button className="absolute bottom-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg text-primary hover:bg-primary hover:text-white transition-colors">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <h4 className="font-headline font-bold">Cánh gà sốt cay (2pcs)</h4>
              <p className="text-primary-fixed font-bold">45.000đ</p>
            </div>
            {/* Suggestion Item 4 */}
            <div className="group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-white relative shadow-sm">
                <img alt="Salad" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYiD85MxxvgT_GUuTvRImoVI9nkss1aDbsQSr1XifzIPcTuJnz0gdTElNkARV3M-vHLoMSOT_aBUgtC5qeilKtXasn0di3-sWuy9IJVF3wrR_wmdKICHBLmm7c-Ov3n4UkLY41Q3KOp57uaoNYwB-OQgFfLLMscJEEv6eEvjzmdFQHed2XQiPXxd9gY7Bm38BMF_MFD6dAJAXutHz_QU0-Tdbf9b3VsKCMgUtQkLQ-fEeK7IjOM2G8qlym2ELhhky2L53HNtSV_hA"/>
                <button className="absolute bottom-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg text-primary hover:bg-primary hover:text-white transition-colors">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <h4 className="font-headline font-bold">Salad vườn rau củ</h4>
              <p className="text-primary-fixed font-bold">39.000đ</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
