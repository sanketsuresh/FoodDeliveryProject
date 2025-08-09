import React, { useEffect, useState } from 'react';
import { Package, Clock, CheckCircle, User, Mail, Calendar } from 'lucide-react';
import { Order } from '../types';

export const AdminPanel: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'confirmed': return <Package className="h-4 w-4" />;
      case 'delivered': return <CheckCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
        <p className="text-gray-600">Manage customer orders and track deliveries</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Orders</p>
              <p className="text-3xl font-bold text-gray-800">{orders.length}</p>
            </div>
            <Package className="h-12 w-12 text-orange-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Pending Orders</p>
              <p className="text-3xl font-bold text-yellow-600">
                {orders.filter(o => o.status === 'pending').length}
              </p>
            </div>
            <Clock className="h-12 w-12 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Delivered Orders</p>
              <p className="text-3xl font-bold text-green-600">
                {orders.filter(o => o.status === 'delivered').length}
              </p>
            </div>
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 bg-gradient-to-r from-orange-500 to-red-600">
          <h2 className="text-xl font-bold text-white">Recent Orders</h2>
        </div>

        <div className="divide-y divide-gray-200">
          {orders.length === 0 ? (
            <div className="text-center py-12">
              <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No orders yet</p>
              <p className="text-gray-500">Orders will appear here when customers place them</p>
            </div>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">Order #{order.id}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="capitalize">{order.status}</span>
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{order.username}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Mail className="h-4 w-4" />
                        <span>{order.email}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(order.date).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="text-2xl font-bold text-orange-600 mb-4">
                      Total: ${order.total.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Order Items:</h4>
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>{item.name} x{item.quantity}</span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => updateOrderStatus(order.id, 'confirmed')}
                    disabled={order.status !== 'pending'}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      order.status === 'pending'
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Confirm Order
                  </button>
                  <button
                    onClick={() => updateOrderStatus(order.id, 'delivered')}
                    disabled={order.status === 'delivered'}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      order.status !== 'delivered'
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Mark Delivered
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};