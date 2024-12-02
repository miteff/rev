import React from 'react';
import { Palette } from 'lucide-react';
import { Block } from '../../types';

interface BlockControlsProps {
  onRemove: () => void;
  onVariantClick: () => void;
}

export function BlockControls({ onRemove, onVariantClick }: BlockControlsProps) {
  return (
    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
      <button
        onClick={onVariantClick}
        className="p-2 text-gray-500 hover:text-blue-500 rounded-md hover:bg-blue-50 flex items-center gap-1"
      >
        <Palette className="w-5 h-5" />
        <span className="text-sm">Change Style</span>
      </button>
      <button
        onClick={onRemove}
        className="p-2 text-gray-500 hover:text-red-500 rounded-md hover:bg-red-50"
      >
        Remove
      </button>
    </div>
  );
}