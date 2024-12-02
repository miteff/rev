export const headerVariants = [
  {
    name: 'Minimal Header',
    type: 'header',
    content: `
      <header class="flex justify-between items-center p-5 bg-white shadow-sm">
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
      </header>
    `
  },
  {
    name: 'Dark Header',
    type: 'header',
    content: `
      <header class="flex justify-between items-center p-5 bg-gray-900 text-white">
        <div class="logo">
          <h1 class="text-2xl font-bold">Your Brand</h1>
        </div>
        <nav>
          <ul class="flex space-x-6">
            <li><a href="#" class="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">About</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">Services</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </nav>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </header>
    `
  },
  {
    name: 'Centered Header',
    type: 'header',
    content: `
      <header class="text-center py-8 bg-white shadow-sm">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">Your Brand</h1>
        <nav class="max-w-2xl mx-auto">
          <ul class="flex justify-center space-x-8">
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">About</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Services</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </header>
    `
  }
];