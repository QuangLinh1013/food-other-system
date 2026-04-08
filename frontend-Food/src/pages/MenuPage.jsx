import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export default function MenuPage() {
  return (
    <div className="bg-surface font-body text-on-background antialiased min-h-screen flex flex-col">
      <Header />

      <div className="max-w-7xl mx-auto pt-24 pb-12 px-6 flex flex-col md:flex-row gap-8 w-full flex-grow">
        {/* SideNavBar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24 bg-gray-50 rounded-xl p-4 border-r border-gray-100">
            <div className="mb-6 px-2">
              <h2 className="text-orange-600 font-bold font-headline text-lg">Danh mục</h2>
              <p className="text-gray-500 text-xs font-body">Linhfood Menu</p>
            </div>
            <nav className="flex flex-col gap-2">
              <a href="#an-vat" className="flex items-center gap-3 py-3 px-4 rounded-lg bg-orange-50 text-orange-600 border-r-4 border-orange-600 transition-all duration-200 hover:translate-x-1 font-headline font-semibold text-sm">
                <span className="material-symbols-outlined text-xl">fastfood</span>
                <span>Ăn vặt</span>
              </a>
              <a href="#do-uong" className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-200 hover:translate-x-1 font-headline font-semibold text-sm">
                <span className="material-symbols-outlined text-xl">local_bar</span>
                <span>Đồ uống</span>
              </a>
              <a href="#combo" className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-200 hover:translate-x-1 font-headline font-semibold text-sm">
                <span className="material-symbols-outlined text-xl">layers</span>
                <span>Combo</span>
              </a>
              <a href="#do-an-chinh" className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-200 hover:translate-x-1 font-headline font-semibold text-sm">
                <span className="material-symbols-outlined text-xl">restaurant</span>
                <span>Đồ ăn chính</span>
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-16">
          {/* Hero Promo Banner */}
          <section className="relative overflow-hidden rounded-2xl hero-gradient p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="z-10 text-white max-w-md">
              <span className="bg-tertiary-container text-on-tertiary-container text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Flash Deal</span>
              <h1 className="text-4xl md:text-5xl font-black font-headline leading-tight mb-4">Combo Bùng Nổ Vị Giác!</h1>
              <p className="text-white/80 mb-8 font-body">Tiết kiệm đến 30% khi đặt các bộ combo ăn vặt và đồ uống đặc biệt chỉ có tại Linhfood.</p>
              <button className="bg-white text-primary font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all font-headline">Khám phá ngay</button>
            </div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
              <img alt="Delicious Burger Combo" className="w-full h-full object-contain drop-shadow-2xl rotate-6 transform hover:rotate-0 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjocqwNnHD7IVA-PUL9sDDxSoiGSQfkB_xwtmC0EqSQts1vlBxRB2CSp-ZQtmvv6Mlh38jW3zTAFDcrZmQKxdqbhYc8jQe3jB4Y2b3CPLkWSBBSDsMpi9Kn6932z5xOdcObdpH4Ka15aJvwq-c074SZauAFrWKKo7NWPCl0Ia4AwsgOakgHTaog7QRi3AzAU5M31DeQ19d75jyQvhDUCbfOQ_8yvJNojRUz-OeVUTVQovTEQKRAoZ2tKGtmVongTgN_srLoFlYOCI"/>
            </div>
          </section>

          {/* Category: Ăn vặt */}
          <section className="scroll-mt-28" id="an-vat">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black font-headline text-on-background tracking-tight">Ăn vặt</h2>
                <div className="h-1.5 w-12 bg-primary-container mt-2 rounded-full"></div>
              </div>
              <a href="#" className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">Xem tất cả <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard 
                id="1"
                title="Cánh gà chiên mắm cay nồng"
                price="55.000đ"
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuD3uycZjgWGLUJDZSrOvgOLEhV99lrp0eXi5Ena1TDyaztCkvemnr8hAqWX594FAKotCuv4LxmzMPkeIeKZcqbmFlVF9UWVdRGH3QsOMMdfUWrnPYY-u36aSSxjXHmkHGZV7k6_XxmJIT0oEkL3nQ1JawAtfnF1mrKWWWPStPgQp0sf0yNZz-hBKQruMO2iWmCbSjeG4ITNtLeyniLlDCnVgJNb7BKQTAJDEH1EHaG_k7wZfW-njWtWQU1QqJMLCdUmV8BTtV1-Psk"
                badge="Hot"
                badgeColor="bg-error"
              />
              <ProductCard 
                id="3"
                title="Khoai tây chiên muối biển"
                price="35.000đ"
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCTcjhiMB02g6C6Ke25JW_i3PJ1J3lvVrM25aSA2wa1P52VLWQzEB_3mcj9WjGbEu9wDdMj2Pq4vpJOlMnmVt9orT2wtqXMWcLMQG-0SUYkU-KcAG2BTiruNAfpfbKnar0HR9yL-7GEi3DfEqk8Ol7Nyu_UDsVqdCLUpuFNnUeNPOLB8ZjqW4BKvrv8EvAnv2iNcg1A3nu16Au_mgqA6P-kGp7ofyVXFLxr1kpZnoEkdL9eLdLZFMGS1SmwdT-ykYFNN4ncHlLVLfg"
              />
              <ProductCard 
                title="Há cảo tôm hùm đặc biệt"
                price="65.000đ"
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBSwNLguUrwKhfOyqROie6-SRWloMBhmTc-H7fcn4tZlt7c8nLcgKIsaHtE3OEu-1QCjC9OtZyDCAwTdcWRNvCgoRK6oKtA7oovvjSw24DPXMVJEY-6yFmQ09TzMMVei-7BG-sHnD6PN4CmZ8djj76QMsTktmoTTwgvNTe-DrGqYqKvbjWXvviQjgXgG70cMPOHWZIlzgR9XmqIMwO5pA4AtCv3EgVihNrBy3XxfSQ2wWPueXLS-Xyv9eOPtwYldCtsbb3jJU8lL9I"
                badge="Best Seller"
              />
            </div>
          </section>

          {/* Category: Đồ uống */}
          <section className="scroll-mt-28" id="do-uong">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black font-headline text-on-background tracking-tight">Đồ uống</h2>
                <div className="h-1.5 w-12 bg-primary-container mt-2 rounded-full"></div>
              </div>
              <a href="#" className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">Xem tất cả <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard 
                id="2"
                title="Trà sữa trân châu đường đen"
                price="45.000đ"
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDjlqw0ELedJEA9i-RKDCaILTbclTl68xPqbAuErGsbVxhZHG-hJunnkx1_j_QRcAA-jI3E_AxCKsgmXYN4TlNg5VjFK903yX3AE1ty1RZARPqj1no3OIE0z8tMetFvKYiunTyZio6GgFl1DI99CgB1uG7LqUpSQtveA86bTaAJffu4-qhl4LK_bVGvFz2IxURNWfYAFBGTx4oBfzxsHRd996F10kr-ObDFPQ7uzGbY1LzaPrtsKeP4WKYPoJ15FYSdrkozwId-n3s"
              />
              <ProductCard 
                title="Trà trái cây nhiệt đới"
                price="49.000đ"
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAdjuI-oPJtWbJLSy9WFGZmR7ljqSfPh4BNO2FhXlru_FWlmcfgBnY6-3LWpgraoysn-DE16CnOSoijcDBPTd0WKArtYI8HT9bUp6EJv5onN4KOm3RN4OrENZXxhQ7C_1_L9mf8xWhC20iC6IZEEYFFbDVLvDVcFUJ0JttPSeIpYiN0UyHcx-rS6GwP0JDOFkFxWwcgPmFSR_TsTKTJ9rQhUIxphN-khcZUeGRjSB4vvj37dd835F6vu4BGtUqb_blzTGhTuMv3rmI"
                badge="Best Seller"
              />
              <ProductCard 
                title="Matcha Latte Nhật Bản"
                price="52.000đ"
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCXR6ug3mkN98trvGzgTA4ILLw97V9zY9GZBnhS3MrFcF_WGrQfQ3MaznAAhSUo7UOymzVZbiuby9QZQcC6BM7tTSAWgtrokjj_i4_7nVuJGoEHWcfCMhA1_OX8umzwLQXM8g2NfYRDCuTdM-lDMWHJRYhFOF5b_9BEQDPnRxTWcCGFgLn6ToyHVZTlizGJNzzePS0_VtY1Aw7xTWLFB-ntqImUY8h7Nz9nUxKJniHMVJLacPEOoIKd7FTDOH6dmHBIi8MKvLWESmQ"
              />
            </div>
          </section>

          {/* Category: Combo */}
          <section className="scroll-mt-28" id="combo">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black font-headline text-on-background tracking-tight">Combo Siêu Tiết Kiệm</h2>
                <div className="h-1.5 w-12 bg-primary-container mt-2 rounded-full"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Big Combo 1 */}
              <div className="group flex flex-col sm:flex-row bg-surface-container-lowest rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_40px_40px_-15px_rgba(0,0,0,0.06)] border-l-4 border-orange-500">
                <div className="w-full sm:w-1/2 aspect-square overflow-hidden bg-surface-container-low">
                  <img alt="Combo Bạn Bè" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPDRyNWWt0PaQQRUi7CHtiAq1g3qRRYrWOqA_GeKUlRZ6LjN_V83Btfd_dX7uAnhMtyRCvibzk8YLUQPHbwmnls6jlo3_JZ-NxFZwxzfPrRe-ilh-vAaT426FM0M8dT9la6vT6UoUXi53i2_bkrG-f8ujgksU4zXAVFBXLnb1-LtlF95R8RS87wE8OexeOllAGYCfr8xgIrUaESAwm8D8wQKzBI8AzgE7Oyc6sVgwd_eu-g1KEMX75km-zzrUie8vTBruTDjVixLo"/>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="bg-primary-container text-white text-[10px] font-black px-2 py-1 rounded-md uppercase mb-4 w-fit">Family Pack</span>
                  <h3 className="text-2xl font-black font-headline text-on-background mb-2">Combo Bạn Bè</h3>
                  <p className="text-on-surface-variant text-sm mb-6">1 Pizza size M + 1 Cánh gà (4 miếng) + 2 Trà sữa size L. Phù hợp cho 2-3 người.</p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-2xl font-black font-headline text-primary-container">185.000đ</span>
                    <span className="text-on-surface-variant line-through text-sm">245.000đ</span>
                  </div>
                  <button className="hero-gradient text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all font-headline">Thêm vào giỏ</button>
                </div>
              </div>
              {/* Big Combo 2 */}
              <div className="group flex flex-col sm:flex-row bg-surface-container-lowest rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_40px_40px_-15px_rgba(0,0,0,0.06)] border-l-4 border-orange-500">
                <div className="w-full sm:w-1/2 aspect-square overflow-hidden bg-surface-container-low">
                  <img alt="Combo Một Mình" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAguky8WiM1I_aDRuJRUUZuTJ1PvekVwCM27sRr1ULHW1cv9pzWhRpimLOOQmAI12k9o2OPtp2F4LtS6i6dpu8FBKdYBEKyY3FGea0_hOzC-QeN9aF26PDF0YVRdD3D7kXgfr4mz7ryrq5j8Wej04mWIcoT4a5oZJz5t6OQzqRNBRsFYLOH6CkjMwchgMkor9ad_8Q82VZYT8difzd8N_KqR0pT0bdGDzton87qy8Zl9UqqdMhtoKWTcJO3HuS1CzkcRRFfFsPCLEg"/>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="bg-primary-container text-white text-[10px] font-black px-2 py-1 rounded-md uppercase mb-4 w-fit">Solo Feast</span>
                  <h3 className="text-2xl font-black font-headline text-on-background mb-2">Combo Một Mình</h3>
                  <p className="text-on-surface-variant text-sm mb-6">1 Pasta đặc biệt + 1 Salad rau củ + 1 Trà trái cây. Năng lượng cho ngày dài.</p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-2xl font-black font-headline text-primary-container">125.000đ</span>
                    <span className="text-on-surface-variant line-through text-sm">165.000đ</span>
                  </div>
                  <button className="hero-gradient text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all font-headline">Thêm vào giỏ</button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />

      {/* Bottom Mobile Nav */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 flex justify-around py-3 z-50">
        <a href="/" className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold">Trang chủ</span>
        </a>
        <a href="/menu" className="flex flex-col items-center gap-1 text-orange-600">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>restaurant_menu</span>
          <span className="text-[10px] font-bold">Menu</span>
        </a>
        <a href="/promotions" className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">local_offer</span>
          <span className="text-[10px] font-bold">Ưu đãi</span>
        </a>
        <a href="/auth" className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold">Tôi</span>
        </a>
      </div>
    </div>
  );
}
