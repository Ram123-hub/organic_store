
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Product } from '@/lib/types';


interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      state.totalQuantity++;
      state.totalPrice += product.price;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);
      if (existingItem) {
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== productId);
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && quantity > 0) {
        state.totalPrice -= item.price * item.quantity;
        state.totalQuantity -= item.quantity;
        item.quantity = quantity;
        state.totalPrice += item.price * quantity;
        state.totalQuantity += quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;
export default cartSlice.reducer;