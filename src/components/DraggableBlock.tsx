import React, { useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Block } from '../types';
import { MoveVertical, Palette } from 'lucide-react';
import { TemplateSelector } from './TemplateSelector';

interface DraggableBlockProps {
  block: Block;
  index: number;
  moveBlock: (dragIndex: number, hoverIndex: number) => void;
  onEdit: (id: string, content: string) => void;
  onRemove: (id: string) => void;
  onVariantChange: (id: string, variantId: string, content: string) => void;
}

interface DragItem {
  id: string;
  index: number;
  type: string;
}

export function DraggableBlock({ 
  block, 
  index, 
  moveBlock, 
  onEdit, 
  onRemove,
  onVariantChange 
}: DraggableBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [showTemplateSelector, setShowTemplateSelector] = useState(false);

  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: string | symbol | null }>({
    accept: 'BLOCK',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveBlock(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'BLOCK',
    item: () => ({ id: block.id, index, type: block.type }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <>
      <div
        ref={ref}
        style={{ opacity: isDragging ? 0.5 : 1 }}
        className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-move mb-4"
        data-handler-id={handlerId}
      >
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
          <button
            onClick={() => setShowTemplateSelector(true)}
            className="p-2 text-gray-500 hover:text-blue-500 rounded-md hover:bg-blue-50 flex items-center gap-1"
          >
            <Palette className="w-5 h-5" />
            <span className="text-sm">Change Template</span>
          </button>
          <button
            onClick={() => onRemove(block.id)}
            className="p-2 text-gray-500 hover:text-red-500 rounded-md hover:bg-red-50"
          >
            Remove
          </button>
        </div>
        <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <MoveVertical className="w-5 h-5 text-gray-400" />
        </div>
        <div
          className="p-6"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => onEdit(block.id, e.currentTarget.innerHTML)}
          dangerouslySetInnerHTML={{ __html: block.content }}
        />
      </div>

      {showTemplateSelector && (
        <TemplateSelector
          blockType={block.type}
          currentVariantId={block.variantId}
          onSelect={(variant) => {
            onVariantChange(block.id, variant.id, variant.content);
            setShowTemplateSelector(false);
          }}
          onClose={() => setShowTemplateSelector(false)}
        />
      )}
    </>
  );
}