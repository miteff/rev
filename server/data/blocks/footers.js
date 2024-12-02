export const footerVariants = [
  {
    name: 'Simple Footer',
    type: 'footer',
    content: `
      <footer class="bg-gray-900 text-gray-300 py-12">
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
            <div class="flex space-x-4">
              <a href="#" class="hover:text-white">
                <span class="sr-only">Facebook</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                </svg>
              </a>
              <a href="#" class="hover:text-white">
                <span class="sr-only">Twitter</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.95,4.57a10,10,0,0,1-2.82.77,4.96,4.96,0,0,0,2.16-2.72,9.9,9.9,0,0,1-3.12,1.19,4.92,4.92,0,0,0-8.39,4.49A14,14,0,0,1,1.64,3.16,4.92,4.92,0,0,0,3.2,9.72,4.86,4.86,0,0,1,.96,9.11v.06a4.93,4.93,0,0,0,3.95,4.83,4.86,4.86,0,0,1-2.22.08,4.93,4.93,0,0,0,4.6,3.42A9.87,9.87,0,0,1,0,19.54a13.94,13.94,0,0,0,7.55,2.21,13.9,13.9,0,0,0,14-13.73c0-.21,0-.42,0-.63A10,10,0,0,0,24,4.59Z"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; 2024 Your Brand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `
  },
  {
    name: 'Footer with Columns',
    type: 'footer',
    content: `
      <footer class="bg-gray-900 text-gray-300 py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 class="text-white text-lg font-semibold mb-4">About Us</h3>
              <p class="text-gray-400">We're on a mission to help businesses grow and succeed in the digital age.</p>
            </div>
            <div>
              <h3 class="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul class="space-y-2">
                <li><a href="#" class="hover:text-white">Home</a></li>
                <li><a href="#" class="hover:text-white">About</a></li>
                <li><a href="#" class="hover:text-white">Services</a></li>
                <li><a href="#" class="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-white text-lg font-semibold mb-4">Legal</h3>
              <ul class="space-y-2">
                <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" class="hover:text-white">Terms of Service</a></li>
                <li><a href="#" class="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-white text-lg font-semibold mb-4">Newsletter</h3>
              <p class="text-gray-400 mb-4">Stay updated with our latest news and updates.</p>
              <div class="flex">
                <input type="email" placeholder="Enter your email" class="px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button class="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; 2024 Your Brand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `
  }
];