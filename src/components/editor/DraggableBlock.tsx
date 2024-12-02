import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Block } from '../../types';
import { BlockTools } from './BlockTools';
import { BlockContent } from './BlockContent';
import { BlockVariantSelector } from './BlockVariantSelector';
import { useBlockVariants } from '../../hooks/useBlockVariants';

interface DraggableBlockProps {
  block: Block;
  index: number;
  totalBlocks: number;
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
  totalBlocks,
  moveBlock,
  onEdit,
  onRemove,
  onVariantChange,
}: DraggableBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [showVariants, setShowVariants] = React.useState(false);
  const { variants } = useBlockVariants();

  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: string | symbol | null }>({
    accept: 'block',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveBlock(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'block',
    item: () => ({ id: block.id, index, type: block.type }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleStyleChange = (changes: { fontSize?: string; margin?: string }) => {
    const contentElement = ref.current?.querySelector('[contenteditable]');
    if (contentElement) {
      if (changes.fontSize) {
        contentElement.classList.remove(...fontSizes);
        contentElement.classList.add(changes.fontSize);
      }
      if (changes.margin) {
        contentElement.classList.remove(...margins);
        contentElement.classList.add(changes.margin);
      }
      onEdit(block.id, contentElement.innerHTML);
    }
  };

  const fontSizes = ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl'];
  const margins = ['my-2', 'my-4', 'my-6', 'my-8', 'my-12', 'my-16'];

  // Only apply drag ref to the container div
  drop(ref);

  return (
    <div
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow mb-4"
      data-handler-id={handlerId}
    >
      {/* Drag handle - apply drag ref only to this element */}
      <div ref={drag} className="absolute left-0 top-0 bottom-0 w-8 cursor-move opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9h8M8 15h8" />
          </svg>
        </div>
      </div>

      <BlockTools
        index={index}
        totalBlocks={totalBlocks}
        onMoveUp={() => moveBlock(index, index - 1)}
        onMoveDown={() => moveBlock(index, index + 1)}
        onRemove={() => onRemove(block.id)}
        onStyleChange={() => setShowVariants(!showVariants)}
        onContentChange={handleStyleChange}
      />

      {showVariants && (
        <BlockVariantSelector
          type={block.type}
          currentVariantId={block.variantId}
          onSelect={(variantId) => {
            const variant = variants.find(v => v.id === variantId);
            if (variant) {
              onVariantChange(block.id, variantId, variant.content);
              setShowVariants(false);
            }
          }}
        />
      )}

      <div className="pl-8"> {/* Add padding to accommodate drag handle */}
        <BlockContent
          content={block.content}
          onEdit={(content) => onEdit(block.id, content)}
        />
      </div>
    </div>
  );
}