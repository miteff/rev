import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Trash2, Palette, Type, ArrowsUpDown } from 'lucide-react';

interface BlockToolsProps {
  index: number;
  totalBlocks: number;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onRemove: () => void;
  onStyleChange: () => void;
  onContentChange: (changes: { fontSize?: string; margin?: string }) => void;
}

export function BlockTools({
  index,
  totalBlocks,
  onMoveUp,
  onMoveDown,
  onRemove,
  onStyleChange,
  onContentChange,
}: BlockToolsProps) {
  const [showStyleTools, setShowStyleTools] = useState(false);
  
  const fontSizes = ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl'];
  const margins = ['my-2', 'my-4', 'my-6', 'my-8', 'my-12', 'my-16'];

  return (
    <div className="absolute -top-12 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2">
        <div className="flex items-center justify-between">
          {/* Move Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={onMoveUp}
              disabled={index === 0}
              className={`p-1.5 rounded hover:bg-gray-100 ${
                index === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600'
              }`}
              title="Move Up"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
            <button
              onClick={onMoveDown}
              disabled={index === totalBlocks - 1}
              className={`p-1.5 rounded hover:bg-gray-100 ${
                index === totalBlocks - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600'
              }`}
              title="Move Down"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Style Tools */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setShowStyleTools(!showStyleTools)}
                className="p-1.5 rounded hover:bg-gray-100 text-gray-600"
                title="Style Options"
              >
                <Type className="w-4 h-4" />
              </button>
              
              {showStyleTools && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-10 w-64">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
                    <div className="grid grid-cols-3 gap-2">
                      {fontSizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => onContentChange({ fontSize: size })}
                          className="px-2 py-1 text-sm rounded hover:bg-blue-50 hover:text-blue-600"
                        >
                          {size.replace('text-', '')}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Margin</label>
                    <div className="grid grid-cols-3 gap-2">
                      {margins.map((margin) => (
                        <button
                          key={margin}
                          onClick={() => onContentChange({ margin })}
                          className="px-2 py-1 text-sm rounded hover:bg-blue-50 hover:text-blue-600"
                        >
                          {margin.replace('my-', '')}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <button
              onClick={onStyleChange}
              className="p-1.5 rounded hover:bg-gray-100 text-gray-600"
              title="Change Template"
            >
              <Palette className="w-4 h-4" />
            </button>
            
            <button
              onClick={onRemove}
              className="p-1.5 rounded hover:bg-gray-100 text-gray-600"
              title="Remove Block"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}