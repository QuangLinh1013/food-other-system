import React from 'react';

export default function AuthPage() {
  return (
    <div className="bg-surface text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <main className="min-h-screen flex flex-col md:flex-row">
        {/* Left Side: Hero Image */}
        <section className="relative w-full md:w-1/2 h-[409px] md:h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Linhfood Signature Dish" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzHJ_5hhRwWdgEpCkoA7Gal5PAIo3HT0TE61FSwOhg72LSwVYXdQKDA_zqvju8XVtjM2Nmm2vCbmAB1SOZTzJdZZ0vuHj7M0V_SEYxoMHtfazmPQFjXGWogDzIosZyndeRcRsmip-Mfecjj6i9Kh9uw8W0yGHzyne43YEjzOk1lXhd87on47wVGa_xLjvhxsJlHhnpF8T2U0UTpFBc5sI_l3fXWuTov3MDMUG9hlKhhRt6QPxiwmgrovPVdiSYe-9a_dZlAsohg6U"/>
            <div className="absolute inset-0" style={{backdropFilter: 'blur(8px)', background: 'rgba(15, 4, 0, 0.4)'}}></div>
          </div>
          {/* Branding on Hero */}
          <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
            <div className="flex items-center gap-2">
              <span className="text-white text-3xl font-black tracking-tighter font-headline">Linhfood</span>
            </div>
            <div className="max-w-md">
              <h2 className="text-white text-4xl md:text-5xl font-extrabold font-headline leading-tight mb-4">
                  Trải nghiệm tinh hoa <span className="text-primary-fixed">ẩm thực</span> ngay tại nhà.
              </h2>
              <p className="text-white/80 text-lg">
                  Tốc độ vượt trội. Hương vị tuyệt đỉnh. Sẵn sàng phục vụ bạn trong 30 phút.
              </p>
            </div>
          </div>
        </section>
        
        {/* Right Side: Auth Panel */}
        <section className="w-full md:w-1/2 min-h-[614px] md:h-screen bg-surface flex items-center justify-center p-6 md:p-16">
          <div className="w-full max-w-md space-y-10">
            {/* Header */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-extrabold font-headline text-on-surface tracking-tight mb-2">
                  Chào mừng bạn
              </h1>
              <p className="text-on-surface-variant font-medium">
                  Đăng nhập hoặc tạo tài khoản mới
              </p>
            </div>
            
            {/* Social Logins */}
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-surface-container-lowest rounded-lg font-semibold text-on-surface hover:bg-surface-container transition-colors duration-200">
                <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNto5vhF7koUxTVO8xNeykUBR-DhBByj8DpZgOb7opi5HUqO1iL-RAh32FCEjmXPCANVcNmAoCxPmdLjY_HMPBkfaiocJfUUQT5s-Qob_eoqf6hUdGTqBTxV9yUeD9elaXdrwz2F7nn_ywMzsvyG1Mu-Zb9PMRsb_s_2WPzD5qDIFka2mR9HGQ3_uKGe6h2Gk0iDtTcroEgrdpIY7DAod0JG5Yvg1oc7sapStTaQsmwWGvKn4BRXFgDQoj0s25k9p1bj0mr_bgtDY"/>
                Tiếp tục với Google
              </button>
              <button className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-[#1877F2] rounded-lg font-semibold text-white hover:opacity-90 transition-opacity duration-200">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.46h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                Tiếp tục với Facebook
              </button>
              <button className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-black rounded-lg font-semibold text-white hover:opacity-90 transition-opacity duration-200">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.05 20.28c-.96.95-2.06 1.72-3.32 1.72-1.2 0-1.64-.74-3.03-.74-1.42 0-1.91.72-3.03.72-1.23 0-2.4-.82-3.43-1.87C2.11 18.02.5 14.19.5 10.51c0-3.69 2.39-5.63 4.67-5.63 1.19 0 2.13.71 3.03.71.86 0 1.57-.71 3.03-.71 2.04 0 3.82 1.05 4.88 2.6-4.14 1.71-3.45 7.15.54 8.76-.78 1.9-1.64 3.1-2.6 4.05zM12.03 4.83c-.02-2.58 2.13-4.67 4.57-4.83.25 2.87-2.74 5.06-4.57 4.83z"></path></svg>
                Tiếp tục với Apple
              </button>
            </div>
            
            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-[1px] bg-outline-variant/20"></div>
              <span className="text-outline text-xs font-bold uppercase tracking-widest">Hoặc sử dụng</span>
              <div className="flex-1 h-[1px] bg-outline-variant/20"></div>
            </div>
            
            {/* Manual Form */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">Số điện thoại hoặc Email</label>
                  <input className="w-full px-6 py-4 bg-surface-container-high rounded-lg border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="linhfood@example.com" type="text"/>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-sm font-bold text-on-surface-variant">Mật khẩu</label>
                    <a className="text-xs font-bold text-primary hover:text-primary-dim transition-colors" href="#">Quên mật khẩu?</a>
                  </div>
                  <input className="w-full px-6 py-4 bg-surface-container-high rounded-lg border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="••••••••" type="password"/>
                </div>
              </div>
              {/* Primary Action */}
              <button className="w-full py-5 bg-gradient-to-br from-primary to-primary-fixed text-on-primary font-extrabold text-lg rounded-lg shadow-xl shadow-primary/20 active:scale-[0.98] transition-transform duration-100" type="submit">
                  Đăng nhập
              </button>
            </form>
            
            {/* Footer Link */}
            <div className="text-center">
              <p className="text-on-surface-variant font-medium">
                  Chưa có tài khoản? 
                  <a className="text-primary font-bold hover:underline ml-1" href="#">Đăng ký ngay</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Support Help Anchor */}
      <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 hidden md:block">
        <button className="bg-surface-container-lowest p-4 rounded-full shadow-lg flex items-center justify-center text-on-surface hover:bg-white transition-all group border border-outline-variant/10">
          <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">help</span>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 group-hover:ml-2 font-bold whitespace-nowrap">Hỗ trợ</span>
        </button>
      </div>
    </div>
  );
}
