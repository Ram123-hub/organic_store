'use client'
import { useEffect } from 'react';

export default function InsertPage() {
  useEffect(() => {
    const insertData = async () => {
      try {
        const res = await fetch('/api/insert-data', { method: 'POST' });
        const result = await res.json();
        console.log(result);
      } catch (error) {
        console.error('Error inserting data:', error);
      }
    };

    insertData();
  }, []);

  return (
    <div>
      <h1>Data Insertion Page</h1>
      <p>Inserting data into the database...</p>
    </div>
  );
}
