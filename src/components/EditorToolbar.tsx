import React from 'react';
import { Smartphone, Monitor, Eye } from 'lucide-react';

interface EditorToolbarProps {
  saving: boolean;
  lastSaved: Date | null;
  error: string | null;
}

export function EditorToolbar({ saving, lastSaved, error }: EditorToolbarProps) {
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
    <div className="px-4 py-2 border-t border-gray-200 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 border-r border-gray-200 pr-4">
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
            <Monitor className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:bg-blue-50 rounded-lg">
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
      <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900">
        <Eye className="w-4 h-4" />
        <span>Preview</span>
      </button>
    </div>
  );
}