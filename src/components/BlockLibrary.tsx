import React from 'react';
import { Block } from '../types';
import { blocks } from '../data/blocks';

interface BlockLibraryProps {
  onBlockSelect: (block: Block) => void;
}

export function BlockLibrary({ onBlockSelect }: BlockLibraryProps) {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Blocks</h2>
      <div className="space-y-4">
        {blocks.map((block) => (
          <div
            key={block.id}
            className="p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition-colors"
            onClick={() => onBlockSelect(block)}
          >
            <h3 className="text-sm font-medium capitalize">{block.type}</h3>
            <div className="text-xs text-gray-500 mt-1">Click to add</div>
          </div>
        ))}
      </div>
    </div>
  );
}