import React from 'react';
import { Plus, ShoppingCart } from 'lucide-react';
import { FoodItem } from '../types';

interface MenuProps {
  foodItems: FoodItem[];
  onAddToCart: (item: FoodItem) => void;
}

export const Menu: React.FC<MenuProps> = ({ foodItems, onAddToCart }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Delicious Menu</h1>
        <p className="text-gray-600 text-lg">Choose from our selection of mouth-watering dishes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                {item.category}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-orange-600">${item.price.toFixed(2)}</span>
                <button
                  onClick={() => onAddToCart(item)}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};