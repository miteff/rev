import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Smartphone, MessageSquare, ShoppingBag } from 'lucide-react';

export function NewProject() {
  const navigate = useNavigate();

  const projectTypes = [
    { 
      id: 'landing', 
      icon: Globe, 
      name: 'Landing Page', 
      description: 'Create a stunning landing page',
      path: '/projects/editor/landing'
    },
    { 
      id: 'mobile', 
      icon: Smartphone, 
      name: 'Mobile Application', 
      description: 'Build a mobile app',
      path: '/projects/editor/mobile'
    },
    { 
      id: 'chatbot', 
      icon: MessageSquare, 
      name: 'Chat Bot', 
      description: 'Design a chat bot',
      path: '/projects/editor/chatbot'
    },
    { 
      id: 'store', 
      icon: ShoppingBag, 
      name: 'Online Store', 
      description: 'Set up an e-commerce site',
      path: '/projects/editor/store'
    },
  ];

  const handleTypeSelect = (type: string) => {
    navigate('/projects/new', { state: { projectType: type } });
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Choose Project Type</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectTypes.map(({ id, icon: Icon, name, description }) => (
          <button
            key={id}
            onClick={() => handleTypeSelect(id)}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
          >
            <Icon className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <p className="text-gray-600">{description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}