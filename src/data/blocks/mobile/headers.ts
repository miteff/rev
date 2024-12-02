import { BlockVariant } from '../../../types';

export const headerVariants: BlockVariant[] = [
  {
    id: 'mobile-header-basic',
    name: 'Basic Header',
    type: 'header',
    content: `
      <header class="bg-white px-4 py-3 flex items-center justify-between shadow-sm">
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
      </header>
    `
  }
];