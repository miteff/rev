import { Block } from '../types';
import { blocks } from '../data/blocks';

export function getRecommendedBlocks(currentBlocks: Block[]): Block[] {
  const recommendations: Block[] = [];
  const currentTypes = new Set(currentBlocks.map(block => block.type));

  // Only recommend header if none exists
  if (!currentTypes.has('header')) {
    recommendations.push(blocks.find(b => b.type === 'header')!);
  }

  // Only recommend footer if none exists
  if (!currentTypes.has('footer')) {
    recommendations.push(blocks.find(b => b.type === 'footer')!);
  }

  return recommendations;
}

export function getBlockPlaceholder(type: Block['type']): string {
  switch (type) {
    case 'header':
      return 'Add a header to introduce your website';
    case 'content':
      return 'Add content to tell your story';
    case 'feature':
      return 'Showcase your key features';
    case 'cta':
      return 'Add a call-to-action to engage users';
    case 'footer':
      return 'Complete your website with a footer';
    default:
      return 'Select a block to add content';
  }
}