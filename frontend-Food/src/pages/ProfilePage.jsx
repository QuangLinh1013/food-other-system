import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProfilePage() {
  const [activeMenu, setActiveMenu] = useState('info');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen flex flex-col">
      <Header />

      <main className="pt-24 pb-12 px-4 md:px-6 max-w-6xl mx-auto w-full flex-grow">
        <h1 className="text-4xl font-black mb-10 font-headline tracking-tight">Hồ sơ của bạn</h1>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 animate-fade-in-up">
          
          {/* Sidebar Menu */}
          <div className="w-full md:w-64 flex-shrink-0">
             <div className="flex flex-col gap-2 bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-gray-50/50">
               <button 
                 onClick={() => setActiveMenu('info')}
                 className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all text-sm w-full text-left ${activeMenu === 'info' ? 'bg-primary-container text-on-primary-container' : 'text-gray-600 hover:bg-surface-container-low'}`}
               >
                 <span className="material-symbols-outlined text-[20px]">person</span>
                 Thông tin cá nhân
               </button>
               <button 
                 onClick={() => setActiveMenu('address')}
                 className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all text-sm w-full text-left ${activeMenu === 'address' ? 'bg-primary-container text-on-primary-container' : 'text-gray-600 hover:bg-surface-container-low'}`}
               >
                 <span className="material-symbols-outlined text-[20px]">location_on</span>
                 Sổ địa chỉ
               </button>
               <button 
                 onClick={() => setActiveMenu('sec')}
                 className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all text-sm w-full text-left ${activeMenu === 'sec' ? 'bg-primary-container text-on-primary-container' : 'text-gray-600 hover:bg-surface-container-low'}`}
               >
                 <span className="material-symbols-outlined text-[20px]">lock</span>
                 Bảo mật
               </button>
               <div className="h-px bg-gray-100 my-2"></div>
               <button 
                 className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all text-sm w-full text-left text-error hover:bg-error/10"
               >
                 <span className="material-symbols-outlined text-[20px]">logout</span>
                 Đăng xuất
               </button>
             </div>
          </div>

          {/* Main Content Form */}
          <div className="flex-grow">
             <div className="bg-surface-container-lowest p-6 md:p-10 rounded-2xl shadow-sm border border-gray-50/50">
               
               {activeMenu === 'info' && (
                  <form onSubmit={handleSave}>
                     <h2 className="text-2xl font-black font-headline mb-8">Chỉnh sửa hồ sơ</h2>
                     
                     {/* Avatar Section */}
                     <div className="flex items-center gap-6 mb-8">
                        <div className="relative">
                           <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-surface-container shadow-md">
                              <img src="https://i.pravatar.cc/150?img=33" alt="Avatar" className="w-full h-full object-cover" />
                           </div>
                           <button type="button" className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined text-[16px]">edit</span>
                           </button>
                        </div>
                        <div>
                           <p className="font-bold text-lg">Thay đổi ảnh đại diện</p>
                           <p className="text-sm text-gray-500 mt-1">JPEG hoặc PNG. Tối đa 2MB.</p>
                        </div>
                     </div>

                     {/* Form Fields */}
                     <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-gray-700">Họ và Tên</label>
                              <input required type="text" className="w-full bg-surface-container-low border-2 border-transparent px-4 py-3 rounded-xl focus:bg-white focus:border-primary focus:outline-none transition-colors font-medium text-gray-900" defaultValue="Michael Williams" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-gray-700">Tên hiển thị (Nickname)</label>
                              <input type="text" className="w-full bg-surface-container-low border-2 border-transparent px-4 py-3 rounded-xl focus:bg-white focus:border-primary focus:outline-none transition-colors font-medium text-gray-900" defaultValue="Mikey" />
                           </div>
                        </div>

                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">Email cá nhân</label>
                           <input disabled type="email" className="w-full bg-gray-100 border-2 border-transparent px-4 py-3 rounded-xl focus:outline-none text-gray-500 cursor-not-allowed" defaultValue="michael.foodie@example.com" />
                           <p className="text-xs text-gray-400">Email không thể thay đổi sau khi đăng ký.</p>
                        </div>

                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">Số điện thoại</label>
                           <div className="flex flex-col sm:flex-row gap-4">
                               <input type="tel" className="flex-1 bg-surface-container-low border-2 border-transparent px-4 py-3 rounded-xl focus:bg-white focus:border-primary focus:outline-none transition-colors font-medium text-gray-900" defaultValue="0901234567" />
                               <button type="button" className="px-6 py-3 bg-surface-container border border-gray-200 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors">Xác thực OTP</button>
                           </div>
                        </div>
                     </div>

                     {/* Save Button */}
                     <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
                         <div>
                            {isSaved && (
                               <span className="flex items-center gap-2 text-green-600 font-bold bg-green-50 px-4 py-2 rounded-lg animate-fade-in-up">
                                  <span className="material-symbols-outlined">check_circle</span>
                                  Đã lưu thay đổi
                               </span>
                            )}
                         </div>
                         <button type="submit" className="btn-primary-gradient text-white px-8 py-3 rounded-xl font-extrabold text-sm shadow-xl shadow-orange-500/20 hover:scale-105 active:scale-95 transition-transform flex items-center gap-2">
                           <span className="material-symbols-outlined text-[20px]">save</span> 
                           Lưu Cài Đặt
                         </button>
                     </div>
                  </form>
               )}

               {activeMenu !== 'info' && (
                 <div className="text-center py-12">
                   <span className="material-symbols-outlined text-focus_color text-6xl text-gray-300 mb-4">construction</span>
                   <p className="text-gray-500 font-bold">Tính năng đang được thiết kế.</p>
                 </div>
               )}
               
             </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
