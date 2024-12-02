import { Block, BlockVariant } from '../../types';
import { getVariantsByType, getRandomVariants } from './variants';
import { createBlock } from './blocks';

export function generateBlockSequence(variants: BlockVariant[]): Block[] {
  const template: Block[] = [];
  const usedVariantIds = new Set<string>();

  // Add header (required)
  const headerVariant = getVariantsByType(variants, 'header')[0];
  if (!headerVariant) {
    throw new Error('No header template available');
  }
  template.push(createBlock(headerVariant));
  usedVariantIds.add(headerVariant.id);

  // Get content blocks (3-5 unique blocks)
  const contentVariants = variants.filter(v => 
    ['content', 'feature', 'cta'].includes(v.type)
  );

  if (contentVariants.length === 0) {
    throw new Error('No content templates available');
  }

  // Select random content blocks (3-5)
  const numBlocks = Math.floor(Math.random() * 3) + 3; // 3-5 blocks
  const selectedContent = getRandomVariants(contentVariants, numBlocks, usedVariantIds);
  
  selectedContent.forEach(variant => {
    template.push(createBlock(variant));
    usedVariantIds.add(variant.id);
  });

  // Add footer (required)
  const footerVariant = getVariantsByType(variants, 'footer')[0];
  if (!footerVariant) {
    throw new Error('No footer template available');
  }
  template.push(createBlock(footerVariant));

  return template;
}