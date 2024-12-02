import React from 'react';
import { Smartphone, Monitor, Tablet, Eye } from 'lucide-react';

interface EditorToolbarProps {
  saving: boolean;
  lastSaved: Date | null;
  error: string | null;
  viewMode: 'desktop' | 'tablet' | 'mobile';
  onViewModeChange: (mode: 'desktop' | 'tablet' | 'mobile') => void;
}

export function EditorToolbar({ 
  saving, 
  lastSaved, 
  error,
  viewMode,
  onViewModeChange 
}: EditorToolbarProps) {
  const getStatusText = () => {
    if (error) return error;
    if (saving) return 'Saving...';
    if (lastSaved) {
      const timeAgo = Math.floor((Date.now() - lastSaved.getTime()) / 60000);
      return `Last saved ${timeAgo === 0 ? 'just now' : `${timeAgo} minute${timeAgo === 1 ? '' : 's'} ago`}`;
    }
    return 'All changes saved';
  };

  return (
    <div className="px-6 py-2 border-t border-gray-200 flex items-center justify-between bg-white">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 border-r border-gray-200 pr-4">
          <button 
            onClick={() => onViewModeChange('desktop')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'desktop' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-400 hover:bg-gray-50'
            }`}
          >
            <Monitor className="w-5 h-5" />
          </button>
          <button 
            onClick={() => onViewModeChange('tablet')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'tablet' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-400 hover:bg-gray-50'
            }`}
          >
            <Tablet className="w-5 h-5" />
          </button>
          <button 
            onClick={() => onViewModeChange('mobile')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'mobile' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-400 hover:bg-gray-50'
            }`}
          >
            <Smartphone className="w-5 h-5" />
          </button>
        </div>
        <div className="text-sm">
          <span className={`font-medium ${error ? 'text-red-600' : 'text-gray-600'}`}>
            {saving ? 'Auto-saving' : 'Saved'}
          </span>
          {' • '}
          <span className={error ? 'text-red-600' : 'text-gray-600'}>
            {getStatusText()}
          </span>
        </div>
      </div>
    </div>
  );
}