import { Block, BlockVariant } from '../../types';

export function createBlock(variant: BlockVariant): Block {
  return {
    id: '',
    type: variant.type as Block['type'],
    content: variant.content,
    variantId: variant.id
  };
}