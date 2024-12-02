INSERT INTO "BlockVariant" (id, name, type, content) VALUES (
  'header-modern',  -- Unique identifier
  'Modern Header', -- Display name
  'header',        -- Block type
  '<header class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <h1 class="text-2xl font-bold">Brand</h1>
          <nav class="hidden md:flex space-x-8">
            <a href="#" class="hover:text-blue-200 transition-colors">Home</a>
            <a href="#" class="hover:text-blue-200 transition-colors">Features</a>
            <a href="#" class="hover:text-blue-200 transition-colors">Pricing</a>
            <a href="#" class="hover:text-blue-200 transition-colors">About</a>
          </nav>
        </div>
        <div class="flex items-center space-x-4">
          <button class="px-4 py-2 rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors">
            Sign In
          </button>
          <button class="md:hidden">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>'
);
