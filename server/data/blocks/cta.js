export const ctaVariants = [
  {
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
    `
  },
  {
    name: 'CTA with Image',
    type: 'cta',
    content: `
      <section class="py-20 bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="md:w-1/2 mb-10 md:mb-0">
              <h2 class="text-4xl font-bold text-white mb-6">Transform Your Business Today</h2>
              <p class="text-gray-300 mb-8 text-lg">Take your business to the next level with our powerful platform.</p>
              <div class="flex flex-col sm:flex-row gap-4">
                <button class="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button class="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div class="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                   alt="Business Growth" 
                   class="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
    `
  }
];