import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  return (
    <div className="bg-surface font-body text-on-background antialiased min-h-screen flex flex-col">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold leading-[1.1] text-on-background mb-6">
                Đồ ăn ngon – <br/>
                <span className="text-primary-fixed">Giao nhanh tận cửa</span>
              </h1>
              <p className="text-xl text-on-surface-variant mb-10 max-w-md">
                Đặt món chỉ trong 30 giây. Thưởng thức hương vị tuyệt hảo ngay tại nhà bạn.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/menu" className="btn-primary-gradient text-white px-8 py-4 rounded-lg font-headline font-bold text-lg shadow-xl transition-all hover:scale-105 active:scale-95">
                  Xem menu
                </a>
                <a href="/promotions" className="bg-surface-container-high text-on-surface px-8 py-4 rounded-lg font-headline font-bold text-lg transition-all hover:scale-105 active:scale-95">
                  Ưu đãi hôm nay
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary-fixed/20 rounded-full blur-3xl group-hover:bg-primary-fixed/30 transition-colors duration-500"></div>
              <img alt="Hero Food" className="relative w-full h-auto object-contain drop-shadow-2xl scale-110 transform -rotate-6 group-hover:rotate-0 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2G75a5kynYBX-ff6FrojUBkcP56B4YP7-4JcS5x9DO6_MqtH9I9pMFPHOwVtoB-cjV7ki0mQvd2DjVhgbURdbrEptvTPGsqUlpCOXsMwwzjyxXiN78HXTaS9u4PnLmcpkNtW1LOnajpVywWEJma79UjOS1qJkkG6ux0Cn22VAtf7yeu9dL_E-8urWifiJfEQLL-0zkkhNfMcfKaf9sOQGO10zZq3fPur5ic-7SHgwds__an40j0OH4GPn-Kt65SJ4EjhKKcVLUjs"/>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="px-6 py-12 max-w-7xl mx-auto">
          <h2 className="font-headline text-3xl font-extrabold mb-8">Khám phá theo danh mục</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low p-6 rounded-xl transition-all hover:bg-surface-container-high cursor-pointer group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">cookie</span>
              </div>
              <span className="font-headline font-bold text-xl block">Ăn vặt</span>
              <p className="text-on-surface-variant text-sm mt-2">Giòn tan & Đậm đà</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl transition-all hover:bg-surface-container-high cursor-pointer group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">local_bar</span>
              </div>
              <span className="font-headline font-bold text-xl block">Nước uống</span>
              <p className="text-on-surface-variant text-sm mt-2">Tươi mát & Sảng khoái</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl transition-all hover:bg-surface-container-high cursor-pointer group col-span-2 md:col-span-1">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">fastfood</span>
              </div>
              <span className="font-headline font-bold text-xl block">Combo</span>
              <p className="text-on-surface-variant text-sm mt-2">Tiết kiệm & Đầy đủ</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
