import { BlockVariant } from '../../types';

export const contentVariants: BlockVariant[] = [
  {
    id: 'content-basic',
    name: 'Basic Content',
    type: 'content',
    content: `
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Welcome to Our Platform</h2>
            <p class="text-xl text-gray-600 leading-relaxed mb-8">
              We're dedicated to providing the best possible experience for our users. Our platform combines ease of use with powerful features to help you achieve your goals.
            </p>
            <a href="#" class="text-blue-600 hover:text-blue-700 font-semibold">Learn More →</a>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 'content-two-column',
    name: 'Two Column Content',
    type: 'content',
    content: `
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                   alt="Team Collaboration" 
                   class="rounded-lg shadow-lg" />
            </div>
            <div class="md:w-1/2">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                We believe in creating solutions that make a difference. Our team is passionate about delivering excellence and innovation in everything we do.
              </p>
              <ul class="space-y-4">
                <li class="flex items-center text-gray-700">
                  <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Customer-focused approach
                </li>
                <li class="flex items-center text-gray-700">
                  <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Innovative solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    `,
  }
];