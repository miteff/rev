import React from 'react';
import { Block } from '../types';
import { Plus } from 'lucide-react';

interface EmptyBlockProps {
  type: Block['type'];
  onAdd: (type: Block['type']) => void;
}

export function EmptyBlock({ type, onAdd }: EmptyBlockProps) {
  const labels = {
    header: 'Add Header Section',
    content: 'Add Content Section',
    feature: 'Add Features Section',
    cta: 'Add Call-to-Action',
    footer: 'Add Footer Section',
  };

  return (
    <div 
      className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group"
      onClick={() => onAdd(type)}
    >
      <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center mb-3">
        <Plus className="w-6 h-6 text-gray-500 group-hover:text-blue-500" />
      </div>
      <span className="text-gray-600 group-hover:text-blue-600 font-medium">
        {labels[type]}
      </span>
    </div>
  );
}