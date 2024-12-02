import React from 'react';
import { Block } from '../types';
import { getRecommendedBlocks } from '../utils/recommendations';
import { PlusCircle } from 'lucide-react';

interface BlockRecommendationsProps {
  currentBlocks: Block[];
  onBlockSelect: (block: Block) => void;
}

export function BlockRecommendations({ currentBlocks, onBlockSelect }: BlockRecommendationsProps) {
  const recommendations = getRecommendedBlocks(currentBlocks);

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className="bg-blue-50 p-6 rounded-lg mb-6">
      <h3 className="text-lg font-semibold text-blue-800 mb-3">Recommended Blocks</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.map((block) => (
          <div
            key={block.id}
            onClick={() => onBlockSelect(block)}
            className="flex items-center gap-3 p-4 bg-white rounded-lg cursor-pointer hover:bg-blue-50 transition-colors"
          >
            <PlusCircle className="w-5 h-5 text-blue-600" />
            <div>
              <h4 className="font-medium capitalize">{block.type}</h4>
              <p className="text-sm text-gray-600">
                Add a {block.type} section to enhance your website
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}