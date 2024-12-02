import { BlockVariant } from '../../../types';

export const contentVariants: BlockVariant[] = [
  {
    id: 'mobile-content-card',
    name: 'Content Card',
    type: 'content',
    content: `
      <div class="p-4 bg-white rounded-lg shadow-sm">
        <h2 class="text-lg font-semibold mb-2">Card Title</h2>
        <p class="text-gray-600">This is a sample content card that can be used to display various types of information in your mobile app.</p>
        <button class="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
          Action Button
        </button>
      </div>
    `
  }
];