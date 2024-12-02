import { BlockVariant } from '../../types';
import { headerVariants } from './headers';
import { contentVariants } from './content';
import { featureVariants } from './features';
import { ctaVariants } from './cta';
import { footerVariants } from './footers';

export const blockVariants: BlockVariant[] = [
  ...headerVariants,
  ...contentVariants,
  ...featureVariants,
  ...ctaVariants,
  ...footerVariants,
];