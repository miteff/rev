import { BlockVariant } from '../../../types';
import { headerVariants } from './headers';
import { navigationVariants } from './navigation';
import { contentVariants } from './content';
import { listVariants } from './lists';

export const mobileBlockVariants: BlockVariant[] = [
  ...headerVariants,
  ...navigationVariants,
  ...contentVariants,
  ...listVariants,
];