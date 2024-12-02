import { Block, Website } from '../types';

export function generateHTML(website: Website): string {
  const { blocks } = website;
  
  const head = `
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Generated Website</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
  `;

  const body = `
    <body>
      ${blocks.map(block => block.content).join('\n')}
    </body>
  `;

  return `
<!DOCTYPE html>
<html lang="en">
  ${head}
  ${body}
</html>
  `.trim();
}

export function createPreviewIframe(html: string): HTMLIFrameElement {
  const iframe = document.createElement('iframe');
  iframe.className = 'w-full h-full border-0';
  iframe.srcdoc = html;
  return iframe;
}