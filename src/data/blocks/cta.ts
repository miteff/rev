import { BlockVariant } from '../../types';

export const ctaVariants: BlockVariant[] = [
  {
    id: 'cta-simple',
    name: 'Simple CTA',
    type: 'cta',
    content: `
      <section class="py-20 bg-blue-600">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p class="text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers and transform your business today.</p>
          <button class="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Start Free Trial
          </button>
        </div>
      </section>
    `,
  }
];