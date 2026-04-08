import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ 
  id = '1',
  imageUrl, 
  title, 
  price, 
  badge, 
  badgeColor = 'bg-tertiary-container' 
}) {
  return (
    <div className="bg-surface-container-lowest p-4 rounded-xl group transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_40px_40px_-15px_rgba(45,47,47,0.06)] flex flex-col h-full">
      <Link to={`/product/${id}`} className="block relative aspect-square overflow-hidden rounded-lg mb-4 bg-surface-container-low shrink-0 cursor-pointer">
        {badge && (
          <span className={`absolute top-2 left-2 z-10 ${badgeColor} ${badgeColor === 'bg-error' ? 'text-white' : 'text-on-tertiary-fixed'} font-headline font-extrabold text-[10px] uppercase px-2 py-1 rounded`}>
            {badge}
          </span>
        )}
        <img alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={imageUrl} />
      </Link>
      <Link to={`/product/${id}`}>
        <h3 className="font-headline font-bold text-lg leading-tight mb-2 line-clamp-2 hover:text-primary transition-colors cursor-pointer">{title}</h3>
      </Link>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-primary-fixed font-headline font-extrabold text-xl">{price}</span>
        <button className="bg-surface-container-high p-2 rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-colors focus:ring-2 ring-primary">
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </button>
      </div>
    </div>
  );
}
