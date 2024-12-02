import React from 'react';
import { Tag } from '../../types';
import { TagCheckbox } from './TagCheckbox';

interface TagSectionProps {
  category: string;
  tags: Tag[];
  selectedTags: string[];
  onTagToggle: (tagId: string) => void;
}

export function TagSection({ category, tags, selectedTags, onTagToggle }: TagSectionProps) {
  if (tags.length === 0) return null;

  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-700 mb-3 capitalize">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <TagCheckbox
            key={tag.id}
            id={tag.id}
            name={tag.name}
            checked={selectedTags.includes(tag.id)}
            onChange={onTagToggle}
          />
        ))}
      </div>
    </div>
  );
}