import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { ArrowLeft, Code, Eye, Monitor, Smartphone, Tablet, Download } from 'lucide-react';
import { Preview } from '../../components/editor/Preview';
import { useWebsite } from '../../hooks/useWebsite';
import { useBlockVariants } from '../../hooks/useBlockVariants';
import { Block } from '../../types';
import { useAutoSave } from '../../hooks/useAutoSave';
import { generateHTML } from '../../utils/htmlGenerator';
import { downloadFile } from '../../utils/download';
import { fetchProject } from '../../services/api';

interface LocationState {
  name: string;
  description: string;
  projectType: string;
}

type ViewMode = 'editor' | 'preview' | 'code';
type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export function LandingEditor() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const projectData = location.state as LocationState;
  const { variants } = useBlockVariants();
  const { website, setWebsite, addBlock, updateBlock, removeBlock, moveBlock, updateBlockVariant } = useWebsite();
  const { saving, lastSaved, error, save } = useAutoSave(id || '');
  const [viewMode, setViewMode] = useState<ViewMode>('editor');
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');

  useEffect(() => {
    const loadProject = async () => {
      if (id) {
        try {
          const project = await fetchProject(id);
          setWebsite({ blocks: JSON.parse(project.html) });
        } catch (error) {
          console.error('Failed to load project:', error);
        }
      }
    };

    loadProject();
  }, [id, setWebsite]);

  useEffect(() => {
    if (id && website.blocks.length > 0) {
      save({
        html: JSON.stringify(website.blocks),
      });
    }
  }, [website, id, save]);

  const handleBack = () => {
    navigate('/projects');
  };

  const handleBlockSelect = (block: Block) => {
    const variant = variants.find(v => v.type === block.type);
    if (variant) {
      addBlock({
        ...block,
        content: variant.content,
        variantId: variant.id
      });
    }
  };

  const handleDownload = () => {
    const html = generateHTML(website);
    downloadFile(html, 'index.html');
  };

  const getPreviewWidth = () => {
    switch (deviceMode) {
      case 'mobile':
        return 'max-w-[375px]';
      case 'tablet':
        return 'max-w-[768px]';
      default:
        return 'max-w-none';
    }
  };

  const renderContent = () => {
    switch (viewMode) {
      case 'preview':
        return (
          <div className="flex-1 bg-gray-100 overflow-auto">
            <div className="min-h-full p-8 flex justify-center">
              <div className={`bg-white w-full h-fit shadow-lg ${getPreviewWidth()} transition-all duration-300`}>
                <iframe
                  srcDoc={generateHTML(website)}
                  className="w-full h-full min-h-[calc(100vh-16rem)] border-0"
                  title="Preview"
                />
              </div>
            </div>
          </div>
        );
      case 'code':
        return (
          <div className="flex-1 bg-gray-900 text-gray-100 p-6 overflow-auto">
            <pre className="font-mono text-sm whitespace-pre-wrap">
              {generateHTML(website)}
            </pre>
          </div>
        );
      default:
        return (
          <div className="flex-1 overflow-hidden">
            <div className={`h-full overflow-auto ${getPreviewWidth()} mx-auto`}>
              <div className="p-8">
                <Preview
                  blocks={website.blocks}
                  onBlockEdit={updateBlock}
                  onBlockRemove={removeBlock}
                  onBlockSelect={handleBlockSelect}
                  onBlockMove={moveBlock}
                  onBlockVariantChange={updateBlockVariant}
                />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="bg-white border-b border-gray-200 flex-none">
        <div className="max-w-screen-2xl mx-auto">
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Projects</span>
              </button>
              {projectData?.name && (
                <div>
                  <h2 className="text-lg font-semibold">{projectData.name}</h2>
                  <p className="text-sm text-gray-600">{projectData.description}</p>
                </div>
              )}
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download className="w-5 h-5" />
                <span>Download HTML</span>
              </button>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg mr-4">
                  <button
                    onClick={() => setDeviceMode('desktop')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      deviceMode === 'desktop' ? 'bg-white shadow text-gray-900' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Monitor className="w-4 h-4" />
                    Desktop
                  </button>
                  <button
                    onClick={() => setDeviceMode('tablet')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      deviceMode === 'tablet' ? 'bg-white shadow text-gray-900' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Tablet className="w-4 h-4" />
                    Tablet
                  </button>
                  <button
                    onClick={() => setDeviceMode('mobile')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      deviceMode === 'mobile' ? 'bg-white shadow text-gray-900' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                    Mobile
                  </button>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                  <button
                    onClick={() => setViewMode('editor')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'editor' ? 'bg-white shadow text-gray-900' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Monitor className="w-4 h-4" />
                    Editor
                  </button>
                  <button
                    onClick={() => setViewMode('preview')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'preview' ? 'bg-white shadow text-gray-900' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </button>
                  <button
                    onClick={() => setViewMode('code')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'code' ? 'bg-white shadow text-gray-900' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Code className="w-4 h-4" />
                    Code
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-2 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-sm">
                <span className={`font-medium ${error ? 'text-red-600' : 'text-gray-600'}`}>
                  {saving ? 'Auto-saving' : 'Saved'}
                </span>
                {' • '}
                <span className={error ? 'text-red-600' : 'text-gray-600'}>
                  {error ? error : lastSaved ? `Last saved ${new Date(lastSaved).toLocaleTimeString()}` : 'All changes saved'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {renderContent()}
    </div>
  );
}