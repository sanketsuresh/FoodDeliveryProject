import React from 'react';
import { ShoppingCart, User, LogOut, Shield } from 'lucide-react';

interface HeaderProps {
  currentUser: any;
  isAdmin: boolean;
  cartItemCount: number;
  onCartClick: () => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentUser,
  isAdmin,
  cartItemCount,
  onCartClick,
  onLogout
}) => {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">🍕 FoodieExpress</div>
          </div>
          
          <div className="flex items-center space-x-4">
            {isAdmin ? (
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span className="font-medium">Admin Panel</span>
              </div>
            ) : currentUser ? (
              <>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span className="font-medium">{currentUser.username}</span>
                </div>
                
                <button
                  onClick={onCartClick}
                  className="relative flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Cart</span>
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </button>
              </>
            ) : null}
            
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};