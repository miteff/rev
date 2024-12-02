import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Block } from '../../types';
import { DraggableBlock } from './DraggableBlock';
import { BlockSelector } from './BlockSelector';
import { BlockRecommendations } from './BlockRecommendations';

interface PreviewProps {
  blocks: Block[];
  onBlockEdit: (id: string, content: string) => void;
  onBlockRemove: (id: string) => void;
  onBlockSelect: (block: Block) => void;
  onBlockMove: (dragIndex: number, hoverIndex: number) => void;
  onBlockVariantChange: (id: string, variantId: string, content: string) => void;
}

export function Preview({
  blocks,
  onBlockEdit,
  onBlockRemove,
  onBlockSelect,
  onBlockMove,
  onBlockVariantChange,
}: PreviewProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-8">
        {blocks.map((block, index) => (
          <DraggableBlock
            key={block.id}
            block={block}
            index={index}
            totalBlocks={blocks.length}
            moveBlock={onBlockMove}
            onEdit={onBlockEdit}
            onRemove={onBlockRemove}
            onVariantChange={onBlockVariantChange}
          />
        ))}

        <BlockRecommendations
          currentBlocks={blocks}
          onBlockSelect={onBlockSelect}
        />

        <BlockSelector
          onBlockSelect={onBlockSelect}
        />
      </div>
    </DndProvider>
  );
}