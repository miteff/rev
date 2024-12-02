import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Preview } from '../components/editor/Preview';
import { useWebsite } from '../hooks/useWebsite';
import { useBlockVariants } from '../hooks/useBlockVariants';

interface LocationState {
  name: string;
  description: string;
  projectType: string;
}

export function Editor() {
  const navigate = useNavigate();
  const location = useLocation();
  const projectData = location.state as LocationState;
  const { variants } = useBlockVariants();
  const { 
    website, 
    addBlock, 
    updateBlock, 
    removeBlock, 
    moveBlock, 
    updateBlockVariant 
  } = useWebsite();

  const handleBack = () => {
    navigate('/projects');
  };

  const handleBlockSelect = (block: any) => {
    const variant = variants.find(v => v.type === block.type);
    if (variant) {
      addBlock({
        ...block,
        content: variant.content,
        variantId: variant.id
      });
    }
  };

  const handleGenerateWebsite = () => {
    navigate(`/projects/editor/new`, { 
      state: { 
        blocks: website.blocks,
        name: projectData?.name,
        description: projectData?.description,
        projectType: projectData?.projectType
      } 
    });
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
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
          <button
            onClick={handleGenerateWebsite}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Generate Website
          </button>
        </div>
      </header>
      <div className="flex-1 flex overflow-hidden">
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
  );
}