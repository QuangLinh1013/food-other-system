import React from 'react';

export default function DashboardPage() {
  return (
    <div className="bg-surface-bright text-on-surface font-body min-h-screen">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 z-40 bg-slate-50 dark:bg-slate-900 flex flex-col h-screen w-64 py-6 px-4">
        <div className="mb-10 px-2 flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-black italic">LF</div>
          <div>
            <h1 className="text-2xl font-black text-orange-600 dark:text-orange-500 uppercase italic leading-none">Linhfood</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Admin Console</p>
          </div>
        </div>
        <nav className="flex-1 space-y-2">
          {/* Active: Overview */}
          <a className="flex items-center gap-3 px-4 py-3 text-orange-600 dark:text-orange-400 font-extrabold border-r-4 border-orange-600 dark:border-orange-500 bg-orange-50 dark:bg-orange-950/30 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
            <span className="font-['Plus_Jakarta_Sans'] text-sm tracking-tight">Overview</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200" href="#">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="font-['Plus_Jakarta_Sans'] text-sm tracking-tight">Orders</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200" href="#">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="font-['Plus_Jakarta_Sans'] text-sm tracking-tight">Products</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200" href="#">
            <span className="material-symbols-outlined">campaign</span>
            <span className="font-['Plus_Jakarta_Sans'] text-sm tracking-tight">Promotions</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-['Plus_Jakarta_Sans'] text-sm tracking-tight">Settings</span>
          </a>
        </nav>
        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3 px-2">
            <img alt="Admin" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmv1FZE8jq9cVKWhv3VYhSG6m7rRgtdjs13eAY2xTWUsVfqK6DhnB-vXcNY7sB6QXn7v3cZon9UjMVhAOKVkewIA4k9Fygh3EY_zfjvbqiAb8gFOxhsii5GRZ6nOCMnEILr0kQrrN-x-jFAxdCMcj5d8Q6myYDyin9voUDMnP9OnBbI6s7yTClv2Jgoe4anzEbk52mDCM1nbNYmSU7TZkJPZsMRCJc9Qq3sygsqOtJoMD9eglwCAP5HbDWjash5a5NLtS-EhjNcYw"/>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Admin User</p>
              <p className="text-xs text-slate-500">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* TopNavBar */}
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] z-30 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 flex justify-between items-center h-16 px-8 ml-64">
        <div className="flex-1 flex items-center gap-4">
          <div className="relative w-full max-w-md group focus-within:ring-2 focus-within:ring-orange-500/20 rounded-lg transition-all">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-0 outline-none" placeholder="Tìm kiếm đơn hàng, khách hàng..." type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-4 ml-6">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-orange-600 rounded-full"></span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">settings</span>
          </button>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-['Plus_Jakarta_Sans'] font-bold text-slate-700 dark:text-slate-200">Linhfood Admin</span>
            <img alt="Admin Avatar" className="w-9 h-9 rounded-full ring-2 ring-orange-500/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjDnpn8gmbHEkPUeSWlZf_sGLVWW6ZZJuPWmH-m6K6QG2vJGJv4ni-2xBJUYoDW6VAt-no4v_j-Oil-Ydnm1U6NLga8-VbmzMfn0rPz1eoFc-VIsQo0HoYuUWzf468yrZ6HH65XwJe8zDPa4NWG_FyIVgjJOjnwk1EeoPtpqCf5EGIDjYldGbLQ7tPRxzFoj6zmnbT9oFjU2T3Nw9gnWEvVtd-TZ7b5TA45YCE2Do42ojNO51kXU9E9c7_2ySaMQLewgNUmK1T28I"/>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 pt-24 px-8 pb-12 min-h-screen bg-surface">
        {/* Welcome Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-black font-headline tracking-tight text-on-surface">Tổng quan hệ thống</h2>
          <p className="text-on-surface-variant font-medium">Chào mừng trở lại! Đây là tóm tắt hoạt động hôm nay.</p>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border-none shadow-sm group hover:scale-[1.02] transition-transform duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-orange-50 rounded-lg text-orange-600">
                <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>payments</span>
              </div>
              <span className="text-xs font-bold px-2 py-1 bg-green-50 text-green-600 rounded-full">+12%</span>
            </div>
            <p className="text-sm font-medium text-on-surface-variant mb-1">Tổng Doanh Thu</p>
            <p className="text-2xl font-black font-headline text-on-surface">24.5M <span className="text-sm font-normal">VNĐ</span></p>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border-none shadow-sm group hover:scale-[1.02] transition-transform duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-orange-50 rounded-lg text-orange-600">
                <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>shopping_bag</span>
              </div>
              <span className="text-xs font-bold px-2 py-1 bg-green-50 text-green-600 rounded-full">+8%</span>
            </div>
            <p className="text-sm font-medium text-on-surface-variant mb-1">Đơn Mới</p>
            <p className="text-2xl font-black font-headline text-on-surface">124 <span className="text-sm font-normal">đơn</span></p>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border-none shadow-sm group hover:scale-[1.02] transition-transform duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-orange-50 rounded-lg text-orange-600">
                <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>query_stats</span>
              </div>
              <span className="text-xs font-bold px-2 py-1 bg-green-50 text-green-600 rounded-full">+0.5%</span>
            </div>
            <p className="text-sm font-medium text-on-surface-variant mb-1">Tỷ lệ chuyển đổi</p>
            <p className="text-2xl font-black font-headline text-on-surface">3.2%</p>
          </div>
          {/* Card 4 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border-none shadow-sm group hover:scale-[1.02] transition-transform duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-orange-50 rounded-lg text-orange-600">
                <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
              </div>
              <span className="text-xs font-bold px-2 py-1 bg-green-50 text-green-600 rounded-full">+15%</span>
            </div>
            <p className="text-sm font-medium text-on-surface-variant mb-1">Khách hàng</p>
            <p className="text-2xl font-black font-headline text-on-surface">1,200</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Line Chart Container */}
          <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="text-lg font-bold font-headline">Doanh Thu Trong Tuần</h3>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">Thống kê theo 7 ngày gần nhất</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs font-bold bg-orange-600 text-white rounded-lg">Tuần</button>
                <button className="px-3 py-1 text-xs font-bold bg-surface-container-low text-on-surface-variant rounded-lg">Tháng</button>
              </div>
            </div>
            {/* Visual Mockup of a Chart */}
            <div className="h-64 w-full relative">
              <svg className="w-full h-full" viewBox="0 0 800 200">
                <line stroke="#f0f1f1" strokeWidth="1" x1="0" x2="800" y1="0" y2="0"></line>
                <line stroke="#f0f1f1" strokeWidth="1" x1="0" x2="800" y1="50" y2="50"></line>
                <line stroke="#f0f1f1" strokeWidth="1" x1="0" x2="800" y1="100" y2="100"></line>
                <line stroke="#f0f1f1" strokeWidth="1" x1="0" x2="800" y1="150" y2="150"></line>
                <line stroke="#f0f1f1" strokeWidth="1" x1="0" x2="800" y1="200" y2="200"></line>
                <path d="M0 160 Q 100 120 200 150 T 400 80 T 600 120 T 800 50 L 800 200 L 0 200 Z" fill="rgba(251, 133, 0, 0.05)"></path>
                <path d="M0 160 Q 100 120 200 150 T 400 80 T 600 120 T 800 50" fill="none" stroke="#fb8500" strokeLinecap="round" strokeWidth="4"></path>
                <circle cx="200" cy="150" fill="#fb8500" r="4"></circle>
                <circle cx="400" cy="80" fill="#fb8500" r="4"></circle>
                <circle cx="600" cy="120" fill="#fb8500" r="4"></circle>
                <circle cx="800" cy="50" fill="#fb8500" r="4"></circle>
              </svg>
              <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>Thứ 2</span>
                <span>Thứ 3</span>
                <span>Thứ 4</span>
                <span>Thứ 5</span>
                <span>Thứ 6</span>
                <span>Thứ 7</span>
                <span>Chủ Nhật</span>
              </div>
            </div>
          </div>
          {/* Donut Chart Container */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col">
            <h3 className="text-lg font-bold font-headline mb-6">Tỷ lệ danh mục</h3>
            <div className="flex-1 flex flex-col justify-center items-center">
              <div className="relative w-48 h-48 mb-8">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#fccc33" strokeDasharray="45 100" strokeWidth="4"></circle>
                  <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#fb8500" strokeDasharray="35 100" strokeDashoffset="-45" strokeWidth="4"></circle>
                  <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#3b5f78" strokeDasharray="20 100" strokeDashoffset="-80" strokeWidth="4"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black font-headline text-on-surface">100%</span>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Tổng thị phần</span>
                </div>
              </div>
              <div className="w-full space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#fccc33]"></span>
                    <span className="font-medium">Đồ uống</span>
                  </div>
                  <span className="font-bold">45%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#fb8500]"></span>
                    <span className="font-medium">Ăn vặt</span>
                  </div>
                  <span className="font-bold">35%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#3b5f78]"></span>
                    <span className="font-medium">Combo</span>
                  </div>
                  <span className="font-bold">20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders Table Section */}
        <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
          <div className="p-8 flex justify-between items-center">
            <h3 className="text-xl font-bold font-headline">Đơn hàng gần đây</h3>
            <button className="text-sm font-bold text-orange-600 hover:underline">Xem tất cả</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low text-on-surface-variant text-[10px] uppercase tracking-[0.2em] font-black">
                  <th className="px-8 py-4">Mã Đơn</th>
                  <th className="px-8 py-4">Khách Hàng</th>
                  <th className="px-8 py-4">Giá Trị</th>
                  <th className="px-8 py-4 text-right">Trạng Thái</th>
                </tr>
              </thead>
              <tbody className="divide-y-0">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-5 font-black text-sm text-on-surface">#ORD-8821</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs">HA</div>
                      <span className="font-medium text-sm">Hoàng Anh</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 font-bold text-sm">250.000đ</td>
                  <td className="px-8 py-5 text-right">
                    <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase rounded-lg">Hoàn tất</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-5 font-black text-sm text-on-surface">#ORD-8822</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs">MT</div>
                      <span className="font-medium text-sm">Minh Tuấn</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 font-bold text-sm">125.000đ</td>
                  <td className="px-8 py-5 text-right">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase rounded-lg">Đang giao</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-5 font-black text-sm text-on-surface">#ORD-8823</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs">LN</div>
                      <span className="font-medium text-sm">Linh Nhi</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 font-bold text-sm">450.000đ</td>
                  <td className="px-8 py-5 text-right">
                    <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase rounded-lg">Hoàn tất</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
