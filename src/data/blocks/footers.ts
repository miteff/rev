import { BlockVariant } from '../../types';

export const footerVariants: BlockVariant[] = [
  {
    id: 'footer-simple',
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
          </div>
          <div class="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; 2024 Your Brand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `,
  }
];