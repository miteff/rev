import React, { useEffect, useRef } from 'react';
import { Website } from '../types';
import { generateHTML, createPreviewIframe } from '../utils/htmlGenerator';

interface WebsitePreviewProps {
  website: Website;
}

export function WebsitePreview({ website }: WebsitePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous content
    containerRef.current.innerHTML = '';

    // Generate and insert new preview
    const html = generateHTML(website);
    const iframe = createPreviewIframe(html);
    containerRef.current.appendChild(iframe);
  }, [website]);

  return (
    <div ref={containerRef} className="w-full h-full bg-white" />
  );
}