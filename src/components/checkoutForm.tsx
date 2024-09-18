
'use client'
import { z } from 'zod';
import { useState } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';

// Define validation schema using Zod
const schema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  postalCode: z.string().min(1, 'Postal Code is required'),
  paymentMethod: z.enum(['creditCard', 'paypal'], {
    errorMap: () => ({ message: 'Payment Method is required' }),
  }),
});

export default function Checkout() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationResult = schema.safeParse(formData);

    if (!validationResult.success) {
      const newErrors: { [key: string]: string } = {};
      validationResult.error.errors.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log('Form Data:', formData);
      // Process order confirmation logic
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <Label className="text-sm font-semibold text-gray-700">Full Name</Label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div className="flex flex-col">
              <Label className="text-sm font-semibold text-gray-700">Email</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="mt-4">
            <Label className="text-sm font-semibold text-gray-700">Address</Label>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 w-full`}
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <Label className="text-sm font-semibold text-gray-700">City</Label>
              <Input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
              />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
            </div>

            <div className="flex flex-col">
              <Label className="text-sm font-semibold text-gray-700">Postal Code</Label>
              <Input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className={`border ${errors.postalCode ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
              />
              {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
            </div>
          </div>

          <div className="mt-4">
            <Label className="text-sm font-semibold text-gray-700">Payment Method</Label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className={`border ${errors.paymentMethod ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 w-full`}
            >
              <option value="">Select Payment Method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
            {errors.paymentMethod && <p className="text-red-500 text-sm mt-1">{errors.paymentMethod}</p>}
          </div>

          <div className="mt-6">
            <Button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 w-full md:w-auto">
              Confirm Order
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
