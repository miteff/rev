import React from 'react';
import { MoveVertical } from 'lucide-react';

export function BlockDragHandle() {
  return (
    <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <MoveVertical className="w-5 h-5 text-gray-400" />
    </div>
  );
}