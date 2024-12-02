export const featureVariants = [
  {
    name: 'Grid Features',
    type: 'feature',
    content: `
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Our Features</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-6 bg-gray-50 rounded-lg">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p class="text-gray-600">Experience blazing fast performance with our optimized platform.</p>
            </div>
            <div class="p-6 bg-gray-50 rounded-lg">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Secure by Default</h3>
              <p class="text-gray-600">Your data is protected with enterprise-grade security measures.</p>
            </div>
            <div class="p-6 bg-gray-50 rounded-lg">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Highly Customizable</h3>
              <p class="text-gray-600">Tailor every aspect to match your unique requirements.</p>
            </div>
          </div>
        </div>
      </section>
    `
  },
  {
    name: 'Feature Cards',
    type: 'feature',
    content: `
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Us</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
              <div class="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4">Premium Quality</h3>
              <p class="text-gray-600 leading-relaxed">Experience unmatched quality in every aspect of our service.</p>
            </div>
            <div class="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
              <div class="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4">24/7 Support</h3>
              <p class="text-gray-600 leading-relaxed">Our dedicated team is always here to help you succeed.</p>
            </div>
          </div>
        </div>
      </section>
    `
  }
];