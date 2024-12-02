import React from 'react';
import { BlockVariant } from '../types';
import { useBlockVariants } from '../hooks/useBlockVariants';

interface BlockVariantSelectorProps {
  type: string;
  currentVariantId?: string;
  onSelect: (variant: BlockVariant) => void;
}

export function BlockVariantSelector({ type, currentVariantId, onSelect }: BlockVariantSelectorProps) {
  const { variants, loading, error } = useBlockVariants();
  const typeVariants = variants.filter(v => v.type === type);

  if (loading) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-lg shadow-lg border border-red-200 p-4 z-50">
        <p className="text-red-600 text-sm">Failed to load variants</p>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50">
      <h3 className="text-sm font-medium text-gray-900 mb-3">Select Style</h3>
      <div className="space-y-2">
        {typeVariants.map(variant => (
          <button
            key={variant.id}
            onClick={() => onSelect(variant)}
            className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
              currentVariantId === variant.id
                ? 'bg-blue-50 text-blue-700'
                : 'hover:bg-gray-50 text-gray-700'
            }`}
          >
            <span className="font-medium">{variant.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}