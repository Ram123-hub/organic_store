import mongoose, { Schema, Document } from 'mongoose';

export interface Juices extends Document {
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
  
  
  const JuicesSchema: Schema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    category: {
      type: String,
      enum: ['Fruits', 'Vegetables', 'Dairy', 'Grocery'],
      required: true,
    },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, default: null },
    originalPrice: { type: Number, default: null },
    isOnSale: { type: Boolean, default: false },
    description: { type: String, default: null },
  });
  
  export default mongoose.models.Juices || mongoose.model<Juices>('Juices',JuicesSchema);
  