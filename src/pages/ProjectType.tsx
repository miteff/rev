import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Smartphone, MessageSquare, ShoppingBag } from 'lucide-react';

export function ProjectType() {
  const navigate = useNavigate();

  const projectTypes = [
    { 
      id: 'landing', 
      icon: Globe, 
      name: 'Landing Page', 
      description: 'Create a stunning landing page with drag-and-drop blocks',
      editor: '/projects/editor/landing'
    },
    { 
      id: 'mobile', 
      icon: Smartphone, 
      name: 'Mobile Application', 
      description: 'Build a mobile app with our visual app builder',
      editor: '/projects/editor/mobile'
    },
    { 
      id: 'chatbot', 
      icon: MessageSquare, 
      name: 'Chat Bot', 
      description: 'Design conversational flows for your chatbot',
      editor: '/projects/editor/chatbot'
    },
    { 
      id: 'store', 
      icon: ShoppingBag, 
      name: 'Online Store', 
      description: 'Set up a fully-featured e-commerce website',
      editor: '/projects/editor/store'
    },
  ];

  const handleTypeSelect = (type: string) => {
    navigate('/projects/new', { state: { projectType: type } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Project Type</h1>
        <p className="text-gray-600 mb-8">Select the type of project you want to create</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectTypes.map(({ id, icon: Icon, name, description }) => (
            <button
              key={id}
              onClick={() => handleTypeSelect(id)}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-left group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}