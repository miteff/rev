import React from 'react';
import { useBlockVariants } from '../../hooks/useBlockVariants';

interface BlockVariantSelectorProps {
  type: string;
  currentVariantId?: string;
  onSelect: (variantId: string) => void;
}

export function BlockVariantSelector({ 
  type, 
  currentVariantId, 
  onSelect 
}: BlockVariantSelectorProps) {
  const { variants } = useBlockVariants();
  const typeVariants = variants.filter(v => v.type === type);

  return (
    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-50">
      {typeVariants.map(variant => (
        <button
          key={variant.id}
          onClick={() => onSelect(variant.id)}
          className={`w-full text-left px-3 py-2 rounded-md text-sm ${
            currentVariantId === variant.id
              ? 'bg-blue-50 text-blue-600'
              : 'hover:bg-gray-50 text-gray-700'
          }`}
        >
          {variant.name}
        </button>
      ))}
    </div>
  );
}