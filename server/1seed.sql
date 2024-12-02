-- Clear existing data
DELETE FROM "BlockVariant";
DELETE FROM "MobileBlockVariant";

-- Web Templates
INSERT INTO "BlockVariant" (id, name, type, content) VALUES
-- Headers
('header-minimal', 'Minimal Header', 'header', 
'<header class="flex justify-between items-center p-5 bg-white shadow-sm">
  <div class="logo">
    <h1 class="text-2xl font-bold text-gray-800">Your Brand</h1>
  </div>
  <nav>
    <ul class="flex space-x-6">
      <li><a href="#" class="text-gray-600 hover:text-gray-900">Home</a></li>
      <li><a href="#" class="text-gray-600 hover:text-gray-900">About</a></li>
      <li><a href="#" class="text-gray-600 hover:text-gray-900">Services</a></li>
      <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact</a></li>
    </ul>
  </nav>
</header>'),

('header-centered', 'Centered Header', 'header',
'<header class="text-center py-8 bg-white shadow-sm">
  <h1 class="text-3xl font-bold text-gray-800 mb-4">Your Brand</h1>
  <nav class="max-w-2xl mx-auto">
    <ul class="flex justify-center space-x-8">
      <li><a href="#" class="text-gray-600 hover:text-gray-900">Home</a></li>
      <li><a href="#" class="text-gray-600 hover:text-gray-900">About</a></li>
      <li><a href="#" class="text-gray-600 hover:text-gray-900">Services</a></li>
      <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact</a></li>
    </ul>
  </nav>
</header>'),

-- Content Sections
('content-basic', 'Basic Content', 'content',
'<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">Welcome to Our Platform</h2>
      <p class="text-xl text-gray-600 leading-relaxed mb-8">
        We''re dedicated to providing the best possible experience for our users. Our platform combines ease of use with powerful features to help you achieve your goals.
      </p>
      <a href="#" class="text-blue-600 hover:text-blue-700 font-semibold">Learn More →</a>
    </div>
  </div>
</section>'),

-- Features
('features-grid', 'Feature Grid', 'feature',
'<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Our Features</h2>
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
    </div>
  </div>
</section>'),

-- CTA
('cta-simple', 'Simple CTA', 'cta',
'<section class="py-20 bg-blue-600">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
    <p class="text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers and transform your business today.</p>
    <button class="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
      Start Free Trial
    </button>
  </div>
</section>'),

-- Footer
('footer-simple', 'Simple Footer', 'footer',
'<footer class="bg-gray-900 text-gray-300 py-12">
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="mb-6 md:mb-0">
        <h2 class="text-2xl font-bold text-white">Your Brand</h2>
      </div>
      <nav class="mb-6 md:mb-0">
        <ul class="flex space-x-8">
          <li><a href="#" class="hover:text-white">About</a></li>
          <li><a href="#" class="hover:text-white">Services</a></li>
          <li><a href="#" class="hover:text-white">Contact</a></li>
          <li><a href="#" class="hover:text-white">Privacy</a></li>
        </ul>
      </nav>
    </div>
    <div class="border-t border-gray-800 mt-8 pt-8 text-center">
      <p>&copy; 2024 Your Brand. All rights reserved.</p>
    </div>
  </div>
</footer>');

-- Mobile Templates
INSERT INTO "MobileBlockVariant" (id, name, type, content) VALUES
-- Mobile Headers
('mobile-header-basic', 'Basic Mobile Header', 'header',
'<header class="bg-white px-4 py-3 flex items-center justify-between shadow-sm">
  <button class="p-2 hover:bg-gray-100 rounded-lg">
    <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
  <h1 class="text-lg font-semibold">App Name</h1>
  <button class="p-2 hover:bg-gray-100 rounded-lg">
    <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </button>
</header>'),

-- Mobile Navigation
('mobile-nav-tabs', 'Bottom Tab Navigation', 'navigation',
'<nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
  <div class="flex justify-around py-2">
    <button class="flex flex-col items-center px-3 py-2">
      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      <span class="text-xs mt-1 text-blue-600">Home</span>
    </button>
    <button class="flex flex-col items-center px-3 py-2">
      <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <span class="text-xs mt-1 text-gray-500">Search</span>
    </button>
    <button class="flex flex-col items-center px-3 py-2">
      <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <span class="text-xs mt-1 text-gray-500">Profile</span>
    </button>
  </div>
</nav>'),

-- Mobile Content
('mobile-content-card', 'Content Card', 'content',
'<div class="p-4 bg-white rounded-lg shadow-sm">
  <h2 class="text-lg font-semibold mb-2">Card Title</h2>
  <p class="text-gray-600">This is a sample content card that can be used to display various types of information in your mobile app.</p>
  <button class="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
    Action Button
  </button>
</div>'),

-- Mobile Lists
('mobile-list-basic', 'Basic List', 'list',
'<div class="divide-y divide-gray-200">
  <div class="px-4 py-3 flex items-center justify-between">
    <div>
      <h3 class="text-sm font-medium text-gray-900">List Item 1</h3>
      <p class="text-sm text-gray-500">Description text</p>
    </div>
    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </div>
  <div class="px-4 py-3 flex items-center justify-between">
    <div>
      <h3 class="text-sm font-medium text-gray-900">List Item 2</h3>
      <p class="text-sm text-gray-500">Description text</p>
    </div>
    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </div>
</div>');