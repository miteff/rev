import { BlockVariant, Tag } from '../../types';

export function getVariantsByTag(variants: BlockVariant[], tag: Tag): BlockVariant[] {
  return variants.filter(variant => 
    variant.tags?.some(t => t.id === tag.id)
  );
}

export function getVariantsByType(variants: BlockVariant[], type: string): BlockVariant[] {
  return variants.filter(v => v.type === type);
}

export function getRandomVariants(
  variants: BlockVariant[], 
  count: number, 
  exclude: Set<string> = new Set()
): BlockVariant[] {
  const available = variants.filter(v => !exclude.has(v.id));
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, available.length));
}