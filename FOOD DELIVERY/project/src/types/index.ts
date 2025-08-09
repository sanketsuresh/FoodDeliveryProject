export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  username: string;
  email: string;
  items: CartItem[];
  total: number;
  date: string;
  status: 'pending' | 'confirmed' | 'delivered';
}