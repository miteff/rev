import { Block } from '../types';

const generateId = (type: string) => `${type}-template`;

export const blocks: Block[] = [
  {
    id: generateId('header'),
    type: 'header',
    content: `
      <header class="flex justify-between items-center p-5 bg-gray-800 text-white">
        <div class="logo">
            <h1 class="text-2xl font-bold">Мой Сайт</h1>
        </div>
        <nav>
            <ul class="flex space-x-6">
                <li><a href="#home" class="hover:text-blue-400">Главная</a></li>
                <li><a href="#about" class="hover:text-blue-400">О нас</a></li>
                <li><a href="#services" class="hover:text-blue-400">Услуги</a></li>
                <li><a href="#contact" class="hover:text-blue-400">Контакты</a></li>
            </ul>
        </nav>
        <div class="search flex items-center">
            <input type="text" placeholder="Поиск..." class="p-2 border border-gray-300 rounded-lg" />
            <button class="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">Найти</button>
        </div>
    </header>
    `,
  },
  {
    id: generateId('content'),
    type: 'content',
    content: `
      <div class="prose lg:prose-xl">
        <h2>About Us</h2>
        <p>Edit this section to tell your story. Share your mission, values, and what makes you unique.</p>
      </div>
    `,
  },
  {
    id: generateId('feature'),
    type: 'feature',
    content: `
     <section class="py-20 bg-white">
    <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">Наши Преимущества</h2>
        <div class="flex flex-wrap justify-center">
            <div class="max-w-xs mx-4 mb-8">
                <div class="bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-2">Качество</h3>
                    <p>Мы гарантируем высокое качество нашей продукции, соответствуя всем стандартам.</p>
                </div>
            </div>
            <div class="max-w-xs mx-4 mb-8">
                <div class="bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-2">Надежность</h3>
                    <p>Наша компания зарекомендовала себя как надежный партнер с многолетним опытом работы.</p>
                </div>
            </div>
            <div class="max-w-xs mx-4 mb-8">
                <div class="bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-2">Доступные цены</h3>
                    <p>Мы предлагаем конкурентоспособные цены без ущерба для качества.</p>
                </div>
            </div>
            <div class="max-w-xs mx-4 mb-8">
                <div class="bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-2">Поддержка клиентов</h3>
                    <p>Наша команда всегда готова помочь вам с любыми вопросами и предложениями.</p>
                </div>
            </div>
        </div>
    </div>
</section>
    `,
  },
  {
    id: generateId('cta'),
    type: 'cta',
    content: `
      <div class="text-center bg-blue-50 p-8 rounded-lg">
        <h2 class="text-2xl font-bold">Ready to Get Started?</h2>
        <p class="mt-4">Join thousands of satisfied customers today</p>
        <button class="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>
    `,
  },
  {
    id: generateId('footer'),
    type: 'footer',
    content: `
      <footer class="text-center text-gray-600 py-8">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    `,
  },
];