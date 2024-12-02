import React from 'react';
import { useBlockVariants } from '../hooks/useBlockVariants';
import { BlockVariant } from '../types';

interface TemplateSelectorProps {
  blockType: string;
  currentVariantId?: string;
  onSelect: (variant: BlockVariant) => void;
  onClose: () => void;
}

export function TemplateSelector({ blockType, currentVariantId, onSelect, onClose }: TemplateSelectorProps) {
  const { variants, loading } = useBlockVariants();
  const typeVariants = variants.filter(v => v.type === blockType);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Select Template</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto max-h-[calc(90vh-8rem)]">
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {typeVariants.map(variant => (
                <div
                  key={variant.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    currentVariantId === variant.id
                      ? 'border-blue-500 ring-2 ring-blue-200'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => onSelect(variant)}
                >
                  <h3 className="font-medium mb-2">{variant.name}</h3>
                  <div className="bg-gray-50 rounded-lg p-4 max-h-48 overflow-y-auto">
                    <div dangerouslySetInnerHTML={{ __html: variant.content }} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}