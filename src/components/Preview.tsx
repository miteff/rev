import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Block } from '../types';
import { EmptyBlock } from './EmptyBlock';
import { BlockSelector } from './BlockSelector';
import { DraggableBlock } from './DraggableBlock';
import { BlockRecommendations } from './BlockRecommendations';
import { useBlockVariants } from '../hooks/useBlockVariants';

interface PreviewProps {
  blocks: Block[];
  onBlockEdit: (id: string, content: string) => void;
  onBlockRemove: (id: string) => void;
  onBlockSelect: (block: Block) => void;
  onBlockMove: (dragIndex: number, hoverIndex: number) => void;
  onBlockVariantChange: (id: string, variantId: string, content: string) => void;
}

export function Preview({ 
  blocks: selectedBlocks, 
  onBlockEdit, 
  onBlockRemove, 
  onBlockSelect,
  onBlockMove,
  onBlockVariantChange
}: PreviewProps) {
  const { variants, loading } = useBlockVariants();
  const hasHeader = selectedBlocks.some(block => block.type === 'header');
  const hasFooter = selectedBlocks.some(block => block.type === 'footer');
  
  const footerBlocks = selectedBlocks.filter(block => block.type === 'footer');
  const nonFooterBlocks = selectedBlocks.filter(block => block.type !== 'footer');

  if (loading) {
    return (
      <div className="flex-1 bg-gray-50 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading blocks...</p>
        </div>
      </div>
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex-1 bg-gray-50 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          {!hasHeader && (
            <EmptyBlock 
              type="header" 
              onAdd={() => {
                const headerVariant = variants.find(v => v.type === 'header');
                if (headerVariant) {
                  onBlockSelect({
                    id: '',
                    type: 'header',
                    content: headerVariant.content,
                    variantId: headerVariant.id
                  });
                }
              }} 
            />
          )}

          {nonFooterBlocks.map((block, index) => (
            <DraggableBlock
              key={`${block.id}-${block.variantId}`}
              block={block}
              index={index}
              moveBlock={onBlockMove}
              onEdit={onBlockEdit}
              onRemove={onBlockRemove}
              onVariantChange={onBlockVariantChange}
            />
          ))}

          <BlockRecommendations
            currentBlocks={selectedBlocks}
            onBlockSelect={onBlockSelect}
          />

          <BlockSelector 
            onBlockSelect={onBlockSelect}
            availableBlocks={variants}
          />

          {footerBlocks.map((block, index) => (
            <DraggableBlock
              key={`${block.id}-${block.variantId}`}
              block={block}
              index={nonFooterBlocks.length + index}
              moveBlock={onBlockMove}
              onEdit={onBlockEdit}
              onRemove={onBlockRemove}
              onVariantChange={onBlockVariantChange}
            />
          ))}

          {!hasFooter && (
            <EmptyBlock 
              type="footer" 
              onAdd={() => {
                const footerVariant = variants.find(v => v.type === 'footer');
                if (footerVariant) {
                  onBlockSelect({
                    id: '',
                    type: 'footer',
                    content: footerVariant.content,
                    variantId: footerVariant.id
                  });
                }
              }} 
            />
          )}
        </div>
      </div>
    </DndProvider>
  );
}