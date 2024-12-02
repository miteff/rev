export const mobileCardVariants = [
  {
    name: 'Basic Card',
    type: 'card',
    content: `
      <div class="p-4">
        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Card Image" 
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-900">Card Title</h3>
            <p class="mt-1 text-gray-600">Card description goes here. This is a brief explanation of the card content.</p>
            <button class="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-medium">
              Action Button
            </button>
          </div>
        </div>
      </div>
    `
  }
];