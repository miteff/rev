import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { ArrowLeft, Code, Eye, Monitor } from 'lucide-react';
import { Preview } from '../components/editor/Preview';
import { EditorToolbar } from '../components/editor/EditorToolbar';
import { useWebsite } from '../hooks/useWebsite';
import { useAutoSave } from '../hooks/useAutoSave';
import { fetchProject } from '../services/api';
import { generateHTML } from '../utils/htmlGenerator';

interface LocationState {
  name: string;
  description: string;
  projectType: string;
}

type ViewMode = 'editor' | 'preview' | 'code';
type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export function ProjectEditor() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const projectData = location.state as LocationState;
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
          <div className="w-full h-full bg-gray-100 flex items-start justify-center overflow-auto p-8">
            <div className={`bg-white w-full h-full shadow-lg ${getPreviewWidth()} transition-all duration-300`}>
              <iframe
                srcDoc={generateHTML(website)}
                className="w-full h-full border-0"
                title="Preview"
              />
            </div>
          </div>
        );
      case 'code':
        return (
          <div className="w-full h-full bg-gray-900 text-gray-100 p-6 overflow-auto">
            <pre className="font-mono text-sm whitespace-pre-wrap">
              {generateHTML(website)}
            </pre>
          </div>
        );
      default:
        return (
          <div className="flex-1 flex overflow-hidden">
            <div className={`w-full transition-all duration-300 ${getPreviewWidth()} mx-auto`}>
              <Preview
                blocks={website.blocks}
                onBlockEdit={updateBlock}
                onBlockRemove={removeBlock}
                onBlockSelect={addBlock}
                onBlockMove={moveBlock}
                onBlockVariantChange={updateBlockVariant}
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="bg-white border-b border-gray-200">
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
          <EditorToolbar 
            saving={saving} 
            lastSaved={lastSaved} 
            error={error}
            viewMode={deviceMode}
            onViewModeChange={setDeviceMode}
          />
        </div>
      </header>
      
      {renderContent()}
    </div>
  );
}