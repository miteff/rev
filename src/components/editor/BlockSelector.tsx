import React from 'react';
import { Plus } from 'lucide-react';
import { Block } from '../../types';
import { useBlockVariants } from '../../hooks/useBlockVariants';

interface BlockSelectorProps {
  onBlockSelect: (block: Block) => void;
}

export function BlockSelector({ onBlockSelect }: BlockSelectorProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { variants } = useBlockVariants();

  const blockTypes = Array.from(new Set(variants.map(block => block.type)))
    .filter(type => type !== 'header' && type !== 'footer');

  if (blockTypes.length === 0) return null;

  const handleBlockSelect = (type: string) => {
    const variant = variants.find(v => v.type === type);
    if (variant) {
      onBlockSelect({
        id: '',
        type: type as Block['type'],
        content: variant.content,
        variantId: variant.id
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all group"
      >
        <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center">
          <Plus className="w-6 h-6 text-gray-500 group-hover:text-blue-500" />
        </div>
        <span className="font-medium">Add a new block</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-10">
          <div className="space-y-2">
            {blockTypes.map(type => (
              <button
                key={type}
                onClick={() => handleBlockSelect(type)}
                className="w-full text-left px-4 py-3 rounded-md hover:bg-blue-50 transition-colors capitalize"
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}