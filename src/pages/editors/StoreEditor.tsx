import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

interface LocationState {
  name: string;
  description: string;
  projectType: string;
}

export function StoreEditor() {
  const navigate = useNavigate();
  const location = useLocation();
  const projectData = location.state as LocationState;

  const handleBack = () => {
    navigate('/projects');
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </button>
            {projectData?.name && (
              <div>
                <h2 className="text-lg font-semibold">{projectData.name}</h2>
                <p className="text-sm text-gray-600">{projectData.description}</p>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mb-4">
            <ShoppingBag className="w-16 h-16 text-blue-600 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Store Editor</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            The store editor is coming soon. You'll be able to design and customize your online store here.
          </p>
        </div>
      </div>
    </div>
  );
}