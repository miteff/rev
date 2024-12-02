import React from 'react';
import { Tag } from '../../types';
import { TagSection } from './TagSection';

interface TagSelectorProps {
  tags: Tag[];
  selectedTags: string[];
  onTagToggle: (tagId: string) => void;
}

export function TagSelector({ tags, selectedTags, onTagToggle }: TagSelectorProps) {
  const groupedTags = tags.reduce((acc, tag) => {
    if (!acc[tag.category]) {
      acc[tag.category] = [];
    }
    acc[tag.category].push(tag);
    return acc;
  }, {} as Record<string, Tag[]>);

  return (
    <div className="space-y-6">
      {Object.entries(groupedTags).map(([category, categoryTags]) => (
        <TagSection
          key={category}
          category={category}
          tags={categoryTags}
          selectedTags={selectedTags}
          onTagToggle={onTagToggle}
        />
      ))}
    </div>
  );
}