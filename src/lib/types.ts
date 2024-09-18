// File: types.ts
'use client'
export interface Product {
    id: string;
    name: string;
    category: 'Fruits' | 'Vegetables' | 'Dairy' | 'Grocery';
    image: string;
    price: number;
    rating?: number;
    originalPrice?: number;
    isOnSale?: boolean;
    description?: string;
  }
  