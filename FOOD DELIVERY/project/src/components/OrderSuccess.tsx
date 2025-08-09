import React from 'react';
import { CheckCircle, Home } from 'lucide-react';

interface OrderSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  orderTotal: number;
}

export const OrderSuccess: React.FC<OrderSuccessProps> = ({ isOpen, onClose, orderTotal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center transform hover:scale-105 transition-transform">
        <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your order. Your delicious meal is being prepared and will be delivered soon.
        </p>
        
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
          <p className="text-green-800 font-semibold">Order Total: ${orderTotal.toFixed(2)}</p>
          <p className="text-green-700 text-sm mt-1">Estimated delivery time: 30-45 minutes</p>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all flex items-center justify-center space-x-2"
        >
          <Home className="h-5 w-5" />
          <span>Continue Shopping</span>
        </button>
      </div>
    </div>
  );
};