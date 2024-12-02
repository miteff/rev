export const mobileHeaderVariants = [
  {
    name: 'Simple Header',
    type: 'header',
    content: `
      <header class="bg-white shadow-sm px-4 py-3 flex items-center justify-between">
        <h1 class="text-lg font-semibold text-gray-900">App Name</h1>
        <button class="p-2 text-gray-600 hover:text-gray-900">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
    `
  },
  {
    name: 'Search Header',
    type: 'header',
    content: `
      <header class="bg-white shadow-sm px-4 py-3">
        <div class="flex items-center gap-3">
          <button class="p-2 text-gray-600 hover:text-gray-900">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div class="flex-1">
            <div class="relative">
              <input 
                type="search" 
                placeholder="Search..." 
                class="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg class="w-5 h-5 text-gray-500 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </header>
    `
  }
];