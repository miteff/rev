import React from 'react';

interface TagCheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (id: string) => void;
}

export function TagCheckbox({ id, name, checked, onChange }: TagCheckboxProps) {
  return (
    <label className="inline-flex items-center cursor-pointer group">
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        checked={checked}
        onChange={() => onChange(id)}
      />
      <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900">
        {name}
      </span>
    </label>
  );
}