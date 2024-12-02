import React from 'react';

interface BlockContentProps {
  content: string;
  onEdit: (content: string) => void;
}

export function BlockContent({ content, onEdit }: BlockContentProps) {
  return (
    <div
      className="p-6"
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => onEdit(e.currentTarget.innerHTML)}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}