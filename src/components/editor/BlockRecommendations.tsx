import React from 'react';
import { PlusCircle } from 'lucide-react';
import { Block } from '../../types';
import { useBlockVariants } from '../../hooks/useBlockVariants';

interface BlockRecommendationsProps {
  currentBlocks: Block[];
  onBlockSelect: (block: Block) => void;
}

export function BlockRecommendations({ currentBlocks, onBlockSelect }: BlockRecommendationsProps) {
  const { variants } = useBlockVariants();
  const currentTypes = new Set(currentBlocks.map(block => block.type));

  // Get recommended block types
  const recommendations: Block[] = [];

  // Always recommend header if none exists
  if (!currentTypes.has('header')) {
    const headerVariant = variants.find(v => v.type === 'header');
    if (headerVariant) {
      recommendations.push({
        id: '',
        type: 'header',
        content: headerVariant.content,
        variantId: headerVariant.id
      });
    }
  }

  // Always recommend footer if none exists
  if (!currentTypes.has('footer')) {
    const footerVariant = variants.find(v => v.type === 'footer');
    if (footerVariant) {
      recommendations.push({
        id: '',
        type: 'footer',
        content: footerVariant.content,
        variantId: footerVariant.id
      });
    }
  }

  // Recommend content block if none exists
  if (!currentTypes.has('content')) {
    const contentVariant = variants.find(v => v.type === 'content');
    if (contentVariant) {
      recommendations.push({
        id: '',
        type: 'content',
        content: contentVariant.content,
        variantId: contentVariant.id
      });
    }
  }

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className="bg-blue-50 p-6 rounded-lg mb-6">
      <h3 className="text-lg font-semibold text-blue-800 mb-3">Recommended Blocks</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.map((block) => (
          <button
            key={block.type}
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
          </button>
        ))}
      </div>
    </div>
  );
}