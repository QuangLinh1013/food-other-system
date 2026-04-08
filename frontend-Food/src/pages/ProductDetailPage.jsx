import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock data based on id, but simplified
  const productData = {
    1: {
      title: "Cánh gà chiên mắm cay nồng",
      price: "55.000đ",
      stockStatus: "Còn hàng",
      rating: 4.8,
      reviews: 124,
      description: "Cánh gà chiên mắm cay nồng chuẩn vị, lớp vỏ ngoài giòn rụm đẫm xốt mắm tỏi ớt đậm đà, bên trong thịt gà mềm ẩm, ngọt nước. Từng miếng cánh gà được tẩm ướp kỹ lưỡng, mang lại trải nghiệm bùng nổ vị giác, cay tê nhẹ nơi đầu lưỡi nhưng càng ăn càng cuốn.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3uycZjgWGLUJDZSrOvgOLEhV99lrp0eXi5Ena1TDyaztCkvemnr8hAqWX594FAKotCuv4LxmzMPkeIeKZcqbmFlVF9UWVdRGH3QsOMMdfUWrnPYY-u36aSSxjXHmkHGZV7k6_XxmJIT0oEkL3nQ1JawAtfnF1mrKWWWPStPgQp0sf0yNZz-hBKQruMO2iWmCbSjeG4ITNtLeyniLlDCnVgJNb7BKQTAJDEH1EHaG_k7wZfW-njWtWQU1QqJMLCdUmV8BTtV1-Psk",
      badge: "Hot",
      badgeColor: "bg-error",
      calories: "450 kcal",
      prepTime: "15 phút"
    },
    2: {
      title: "Trà sữa trân châu đường đen",
      price: "45.000đ",
      stockStatus: "Còn hàng",
      rating: 4.9,
      reviews: 342,
      description: "Trà sữa với lớp trân châu dẻo thơm, nấu kỹ cùng đường đen đậm vị hoà quyện cùng sữa tươi mộc bản thanh khiết. Mang đến cảm giác béo ngậy ngọt ngào, xua tan ngay cơn khát và là lựa chọn hoàn hảo để bắt đầu một buổi tụ tập cùng bạn bè.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjlqw0ELedJEA9i-RKDCaILTbclTl68xPqbAuErGsbVxhZHG-hJunnkx1_j_QRcAA-jI3E_AxCKsgmXYN4TlNg5VjFK903yX3AE1ty1RZARPqj1no3OIE0z8tMetFvKYiunTyZio6GgFl1DI99CgB1uG7LqUpSQtveA86bTaAJffu4-qhl4LK_bVGvFz2IxURNWfYAFBGTx4oBfzxsHRd996F10kr-ObDFPQ7uzGbY1LzaPrtsKeP4WKYPoJ15FYSdrkozwId-n3s",
      badge: "Best Seller",
      badgeColor: "bg-tertiary-container",
      calories: "280 kcal",
      prepTime: "5 phút"
    }
  };

  const currentProduct = productData[id] || {
    title: "Món ngon bí mật của Chef",
    price: "85.000đ",
    stockStatus: "Còn ít",
    rating: 4.5,
    reviews: 56,
    description: "Một món ăn bí mật mang đầy tính bất ngờ được bếp trưởng đích thân chuẩn bị, kết hợp tinh hoa ẩm thực Á - Âu, nguyên liệu tươi mới mỗi ngày. Hãy đặt thử để trải nghiệm điều bất ngờ chúng tôi dành cho bạn nhé!",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    badge: "Mới",
    badgeColor: "bg-primary-container",
    calories: "Vô chừng kcal",
    prepTime: "20 phút"
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="bg-surface font-body text-on-background antialiased min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-24">
        
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8 font-medium">
          <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
          <span className="material-symbols-outlined text-[16px] mx-2">chevron_right</span>
          <Link to="/menu" className="hover:text-primary transition-colors">Thực đơn</Link>
          <span className="material-symbols-outlined text-[16px] mx-2">chevron_right</span>
          <span className="text-gray-900">{currentProduct.title}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mb-20 animate-fade-in-up">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex-shrink-0 relative group">
            <div className="absolute -inset-4 bg-primary-container/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 group-hover:shadow-[0_40px_40px_-15px_rgba(0,0,0,0.06)] transition-all duration-300">
               {currentProduct.badge && (
                  <span className={`absolute top-6 left-6 z-10 ${currentProduct.badgeColor} ${currentProduct.badgeColor === 'bg-error' || currentProduct.badgeColor === 'bg-primary-container' ? 'text-white' : 'text-on-tertiary-fixed'} font-headline font-extrabold text-sm uppercase px-4 py-1.5 rounded-full shadow-md`}>
                    {currentProduct.badge}
                  </span>
                )}
              <img 
                src={currentProduct.imageUrl} 
                alt={currentProduct.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            {/* Thumbnail Gallery Mock */}
            <div className="flex gap-4 mt-6">
              <div className="w-20 h-20 rounded-xl overflow-hidden cursor-pointer ring-2 ring-primary ring-offset-2">
                <img src={currentProduct.imageUrl} alt="thumb" className="w-full h-full object-cover" />
              </div>
              <div className="w-20 h-20 rounded-xl overflow-hidden cursor-pointer border border-gray-200 hover:border-primary transition-colors opacity-60 hover:opacity-100">
                <img src={currentProduct.imageUrl} alt="thumb" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="w-20 h-20 rounded-xl overflow-hidden cursor-pointer border border-gray-200 hover:border-primary transition-colors opacity-60 hover:opacity-100 flex items-center justify-center bg-gray-50">
                 <span className="material-symbols-outlined text-gray-400">add_photo_alternate</span>
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="w-full lg:w-1/2 flex flex-col pt-2">
            <div className="mb-2 flex items-center gap-4">
              <div className="flex items-center text-amber-500">
                <span className="material-symbols-outlined text-xl" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined text-xl" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined text-xl" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined text-xl" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined text-xl" style={{fontVariationSettings: "'FILL' 1"}}>half_star</span>
                <span className="ml-2 font-bold text-gray-700">{currentProduct.rating}</span>
                <span className="text-gray-400 mx-2">•</span>
                <Link to="#reviews" className="text-sm text-gray-500 hover:text-primary transition-colors underline-offset-4 hover:underline">{currentProduct.reviews} đánh giá</Link>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black font-headline text-gray-900 leading-tight mb-4">
              {currentProduct.title}
            </h1>

            <div className="text-4xl font-black font-headline text-primary mb-6">
              {currentProduct.price}
            </div>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              {currentProduct.description}
            </p>

            {/* Micro Info */}
            <div className="flex items-center gap-6 mb-8 py-4 border-y border-gray-100 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <span>{currentProduct.prepTime}</span>
                </div>
                <div className="h-4 w-px bg-gray-300"></div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="material-symbols-outlined text-primary">local_fire_department</span>
                  <span>{currentProduct.calories}</span>
                </div>
                <div className="h-4 w-px bg-gray-300"></div>
                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>{currentProduct.stockStatus}</span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Quantity Selector */}
              <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-2 bg-white w-full sm:w-auto shrink-0 justify-between sm:justify-start">
                <button 
                  onClick={handleDecrease}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-primary hover:bg-orange-50 rounded-lg transition-colors focus:ring-2 ring-primary"
                >
                  <span className="material-symbols-outlined font-bold">remove</span>
                </button>
                <span className="w-12 text-center font-bold text-xl font-headline text-gray-900 select-none">
                  {quantity}
                </span>
                <button 
                   onClick={handleIncrease}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-primary hover:bg-orange-50 rounded-lg transition-colors focus:ring-2 ring-primary"
                >
                  <span className="material-symbols-outlined font-bold">add</span>
                </button>
              </div>

              {/* Add to Cart */}
              <button className="flex-1 btn-primary-gradient text-white flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-headline font-bold text-lg shadow-xl shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                <span className="material-symbols-outlined mb-0.5">shopping_bag</span>
                Thêm vào giỏ ({currentProduct.price})
              </button>
            </div>

            {/* Extra Benefits */}
            <div className="bg-surface-container-low p-4 rounded-xl flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <span className="material-symbols-outlined text-green-500">local_shipping</span>
                <span>Giao hàng cực tốc trong 30 phút.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <span className="material-symbols-outlined text-blue-500">verified</span>
                <span>Nguyên liệu tươi sạch 100% nhập mới mỗi ngày.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Section (Description / Reviews) */}
        <div className="border-b border-gray-200 mb-10">
          <nav className="flex gap-8">
             <button className="border-b-2 border-primary py-4 px-1 text-primary font-bold font-headline text-lg mb-[-1px]">
               Mô tả chi tiết
             </button>
             <button className="border-b-2 border-transparent py-4 px-1 text-gray-500 hover:text-gray-700 font-bold font-headline text-lg mb-[-1px] transition-colors">
               Đánh giá ({currentProduct.reviews})
             </button>
          </nav>
        </div>
        <div className="prose prose-orange max-w-none text-gray-600 mb-20 animate-fade-in-up">
           <p className="lead">
             Món ăn này không chỉ mang hương vị ngon miệng mà còn là một tác phẩm nghệ thuật ẩm thực. Chúng tôi cẩn thận trong việc lựa chọn gia vị, kết hợp các loại xốt công thức bí truyền để đem lại một cảm giác bùng nổ, đánh thức mọi giác quan.
           </p>
           <p>
             Linhfood cam kết không sử dụng chất bảo quản, chỉ sử dụng nguyên liệu hữu cơ an toàn cho sức khoẻ. Hãy kết hợp món này cùng các loại đồ uống thanh mát từ cửa hàng sẽ nhân đôi sự ngon miệng.
           </p>
        </div>

        {/* Related Products */}
        <section className="mb-20 animate-fade-in-up">
           <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black font-headline text-gray-900 tracking-tight">Sản phẩm có thể bạn thích</h2>
                <div className="h-1.5 w-12 bg-primary mt-2 rounded-full"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
               <ProductCard 
                 id="3"
                 title="Khoai tây chiên muối biển"
                 price="35.000đ"
                 imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCTcjhiMB02g6C6Ke25JW_i3PJ1J3lvVrM25aSA2wa1P52VLWQzEB_3mcj9WjGbEu9wDdMj2Pq4vpJOlMnmVt9orT2wtqXMWcLMQG-0SUYkU-KcAG2BTiruNAfpfbKnar0HR9yL-7GEi3DfEqk8Ol7Nyu_UDsVqdCLUpuFNnUeNPOLB8ZjqW4BKvrv8EvAnv2iNcg1A3nu16Au_mgqA6P-kGp7ofyVXFLxr1kpZnoEkdL9eLdLZFMGS1SmwdT-ykYFNN4ncHlLVLfg"
               />
               <ProductCard 
                 id="4"
                 title="Há cảo tôm hùm đặc biệt"
                 price="65.000đ"
                 imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBSwNLguUrwKhfOyqROie6-SRWloMBhmTc-H7fcn4tZlt7c8nLcgKIsaHtE3OEu-1QCjC9OtZyDCAwTdcWRNvCgoRK6oKtA7oovvjSw24DPXMVJEY-6yFmQ09TzMMVei-7BG-sHnD6PN4CmZ8djj76QMsTktmoTTwgvNTe-DrGqYqKvbjWXvviQjgXgG70cMPOHWZIlzgR9XmqIMwO5pA4AtCv3EgVihNrBy3XxfSQ2wWPueXLS-Xyv9eOPtwYldCtsbb3jJU8lL9I"
                 badge="Hết nửa"
                 badgeColor="bg-primary-container"
               />
               <ProductCard 
                 id="5"
                  title="Trà trái cây nhiệt đới"
                  price="49.000đ"
                  imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAdjuI-oPJtWbJLSy9WFGZmR7ljqSfPh4BNO2FhXlru_FWlmcfgBnY6-3LWpgraoysn-DE16CnOSoijcDBPTd0WKArtYI8HT9bUp6EJv5onN4KOm3RN4OrENZXxhQ7C_1_L9mf8xWhC20iC6IZEEYFFbDVLvDVcFUJ0JttPSeIpYiN0UyHcx-rS6GwP0JDOFkFxWwcgPmFSR_TsTKTJ9rQhUIxphN-khcZUeGRjSB4vvj37dd835F6vu4BGtUqb_blzTGhTuMv3rmI"
                  badge="Best Seller"
               />
               <ProductCard 
                  id="6"
                  title="Matcha Latte Nhật Bản"
                  price="52.000đ"
                  imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCXR6ug3mkN98trvGzgTA4ILLw97V9zY9GZBnhS3MrFcF_WGrQfQ3MaznAAhSUo7UOymzVZbiuby9QZQcC6BM7tTSAWgtrokjj_i4_7nVuJGoEHWcfCMhA1_OX8umzwLQXM8g2NfYRDCuTdM-lDMWHJRYhFOF5b_9BEQDPnRxTWcCGFgLn6ToyHVZTlizGJNzzePS0_VtY1Aw7xTWLFB-ntqImUY8h7Nz9nUxKJniHMVJLacPEOoIKd7FTDOH6dmHBIi8MKvLWESmQ"
               />
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
