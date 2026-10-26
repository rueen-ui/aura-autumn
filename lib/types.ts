export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;

  sizes: string[];
  stock?: number;

  color?: ProductColor;

  rating?: number;
  reviewsCount?: number;
  isNew?: boolean;
  isSale?: boolean;
  discountPercent?: number;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  itemCount: number;
  totalPrice: number;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  removeItem: (id: string) => void;
  loadFromStorage: () => void; 
}

