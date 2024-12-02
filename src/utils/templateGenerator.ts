import { Tag, BlockVariant } from '../types';

export async function generateTemplateFromTags(tags: Tag[], variants: BlockVariant[]) {
  const template = [];
  const industryTag = tags.find(tag => tag.category === 'industry');

  // Get variants that match the selected industry tag
  const relevantVariants = variants.filter(variant => {
    const tagMatch = variant.tags?.some(tag => 
      tag.id === industryTag?.id
    );
    return tagMatch;
  });

  // If no relevant variants found, use default variants
  const variantsToUse = relevantVariants.length > 0 ? relevantVariants : variants;

  // Always add header
  const headerVariant = variantsToUse.find(v => v.type === 'header');
  if (headerVariant) {
    template.push({
      id: '',
      type: 'header',
      content: headerVariant.content,
      variantId: headerVariant.id
    });
  }

  // Get content and feature blocks
  const contentVariants = variantsToUse.filter(v => 
    v.type === 'content' || v.type === 'feature' || v.type === 'cta'
  );

  // Randomly select 3-5 content blocks
  const numBlocks = Math.floor(Math.random() * 3) + 3; // 3 to 5 blocks
  const shuffledContent = shuffleArray(contentVariants);
  const selectedContent = shuffledContent.slice(0, numBlocks);

  // Add selected content blocks
  template.push(...selectedContent.map(variant => ({
    id: '',
    type: variant.type,
    content: variant.content,
    variantId: variant.id
  })));

  // Always add footer
  const footerVariant = variantsToUse.find(v => v.type === 'footer');
  if (footerVariant) {
    template.push({
      id: '',
      type: 'footer',
      content: footerVariant.content,
      variantId: footerVariant.id
    });
  }

  return template;
}

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}