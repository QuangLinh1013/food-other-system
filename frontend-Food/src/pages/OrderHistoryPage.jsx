import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function OrderHistoryPage() {
  const [activeTab, setActiveTab] = useState('all');

  const mockOrders = [
    {
      id: "LF8492",
      date: "08/04/2026",
      status: "delivering",
      statusText: "Đang giao hàng",
      total: "380.000₫",
      items: [
        { name: "Burger Bò Phô Mai Đặc Biệt", qty: 1 },
        { name: "Pizza Hải Sản Sốt Pesto", qty: 1 }
      ],
      estimatedTime: "25 phút nữa"
    },
    {
      id: "LF8231",
      date: "05/04/2026",
      status: "completed",
      statusText: "Đã giao thành công",
      total: "145.000₫",
      items: [
        { name: "Combo Một Mình", qty: 1 },
        { name: "Trà sữa trân châu đường đen", qty: 1 }
      ]
    },
    {
      id: "LF7902",
      date: "01/04/2026",
      status: "cancelled",
      statusText: "Đã hủy",
      total: "55.000₫",
      items: [
        { name: "Cánh gà chiên mắm cay nồng", qty: 1 }
      ]
    }
  ];

  const filteredOrders = mockOrders.filter(order => {
    if (activeTab === 'all') return true;
    if (activeTab === 'active' && order.status === 'delivering') return true;
    if (activeTab === 'completed' && order.status === 'completed') return true;
    return false;
  });

  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen flex flex-col">
      <Header />

      <main className="pt-24 pb-12 px-6 max-w-4xl mx-auto w-full flex-grow">
        <h1 className="text-4xl font-black mb-8 font-headline tracking-tight">Lịch sử đơn hàng</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <button 
            onClick={() => setActiveTab('all')}
            className={`whitespace-nowrap px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === 'all' ? 'bg-on-surface text-surface' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}
          >
            Tất cả đơn
          </button>
          <button 
            onClick={() => setActiveTab('active')}
            className={`whitespace-nowrap px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === 'active' ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}
          >
            Đang giao
          </button>
          <button 
            onClick={() => setActiveTab('completed')}
            className={`whitespace-nowrap px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === 'completed' ? 'bg-green-600 text-white' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}
          >
            Đã hoàn thành
          </button>
        </div>

        {/* Order List */}
        <div className="space-y-6 animate-fade-in-up">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-12 bg-surface-container-lowest rounded-2xl border border-gray-100">
               <span className="material-symbols-outlined text-border text-6xl text-gray-300 mb-4">receipt_long</span>
               <p className="text-gray-500 font-medium">Bạn chưa có đơn hàng nào trong phân loại này.</p>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div key={order.id} className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-50/50 hover:shadow-[0_20px_40px_-15px_rgba(45,47,47,0.06)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-4 mb-4 gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-black font-headline text-lg tracking-tight">Mã đơn: {order.id}</span>
                      <span className="text-sm text-gray-500 font-medium">{order.date}</span>
                    </div>
                    <div>
                      {order.status === 'delivering' && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-orange-50 px-3 py-1 rounded-full uppercase tracking-widest">
                           <span className="material-symbols-outlined text-[14px]">local_shipping</span> {order.statusText}
                        </span>
                      )}
                      {order.status === 'completed' && (
                         <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full uppercase tracking-widest">
                           <span className="material-symbols-outlined text-[14px]">check_circle</span> {order.statusText}
                        </span>
                      )}
                       {order.status === 'cancelled' && (
                         <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-widest">
                           <span className="material-symbols-outlined text-[14px]">cancel</span> {order.statusText}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-sm text-gray-500 mb-1 font-medium">Tổng thanh toán</p>
                    <p className="text-2xl font-black text-primary font-headline leading-none">{order.total}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div className="flex-grow space-y-1">
                     {order.items.map((item, index) => (
                        <p key={index} className="text-gray-700 font-medium text-sm">
                           <span className="font-bold">{item.qty}x</span> {item.name}
                        </p>
                     ))}
                  </div>

                  <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                     {order.status === 'delivering' && (
                        <button className="flex-1 sm:flex-none text-center px-6 py-2.5 bg-primary-container text-on-primary-container font-bold rounded-lg hover:brightness-95 transition-all text-sm">
                           Xem tài xế
                        </button>
                     )}
                     <button className="flex-1 sm:flex-none text-center px-6 py-2.5 bg-surface-container-high text-on-surface font-bold rounded-lg hover:bg-gray-200 transition-all text-sm">
                        {order.status === 'completed' ? 'Mua lại' : 'Chi tiết'}
                     </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
