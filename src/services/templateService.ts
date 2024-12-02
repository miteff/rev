import { BlockVariant, Tag, Block } from '../types';
import { getVariantsByTag } from '../utils/templates/variants';
import { generateBlockSequence } from '../utils/templates/generator';

export async function generateTemplate(tags: Tag[], variants: BlockVariant[]): Promise<Block[]> {
  const industryTag = tags.find(tag => tag.category === 'industry');
  if (!industryTag) {
    throw new Error('Please select an industry tag');
  }

  // Get variants for the selected industry
  const relevantVariants = getVariantsByTag(variants, industryTag);
  if (relevantVariants.length === 0) {
    console.log('Selected Tags:', tags);
    console.log('Industry Tag:', industryTag);
    console.log('Relevant Variants:', relevantVariants);
    throw new Error(`No templates available for ${industryTag.name}`);
  }

  return generateBlockSequence(relevantVariants);
}