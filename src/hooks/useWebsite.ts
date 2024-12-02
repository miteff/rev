import { useState } from 'react';
import { Block, Website } from '../types';

export function useWebsite() {
  const [website, setWebsite] = useState<Website>({ blocks: [] });

  const generateUniqueId = (type: string) => {
    return `${type}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  };

  const addBlock = (block: Block) => {
    const newBlock = { 
      ...block, 
      id: generateUniqueId(block.type)
    };
    setWebsite((prev) => ({
      ...prev,
      blocks: [...prev.blocks, newBlock],
    }));
  };

  const updateBlock = (id: string, content: string) => {
    setWebsite((prev) => ({
      ...prev,
      blocks: prev.blocks.map((block) =>
        block.id === id ? { ...block, content } : block
      ),
    }));
  };

  const updateBlockVariant = (id: string, variantId: string, content: string) => {
    setWebsite((prev) => ({
      ...prev,
      blocks: prev.blocks.map((block) =>
        block.id === id ? { ...block, variantId, content } : block
      ),
    }));
  };

  const removeBlock = (id: string) => {
    setWebsite((prev) => ({
      ...prev,
      blocks: prev.blocks.filter((block) => block.id !== id),
    }));
  };

  const moveBlock = (dragIndex: number, hoverIndex: number) => {
    setWebsite((prev) => {
      const blocks = [...prev.blocks];
      const [removed] = blocks.splice(dragIndex, 1);
      blocks.splice(hoverIndex, 0, removed);
      return { ...prev, blocks };
    });
  };

  return {
    website,
    setWebsite,
    addBlock,
    updateBlock,
    updateBlockVariant,
    removeBlock,
    moveBlock,
  };
}