import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { createProject, fetchTagsByProjectType } from '../services/api';
import { generateTemplate } from '../services/templateService';
import { Tag } from '../types';
import { TagSelector } from '../components/tags/TagSelector';
import { useBlockVariants } from '../hooks/useBlockVariants';

interface LocationState {
  projectType: string;
}

export function ProjectDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { projectType } = location.state as LocationState || { projectType: '' };
  const [name, setName] = useState('');
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [templateError, setTemplateError] = useState<string | null>(null);
  const { variants, loading: loadingVariants } = useBlockVariants();

  useEffect(() => {
    const loadTags = async () => {
      try {
        setLoading(true);
        const fetchedTags = await fetchTagsByProjectType(projectType);
        setTags(fetchedTags);
      } catch (err) {
        setError('Failed to load tags');
      } finally {
        setLoading(false);
      }
    };

    if (projectType) {
      loadTags();
    }
  }, [projectType]);

  const handleTagToggle = (tagId: string) => {
    setSelectedTags(prev =>
      prev.includes(tagId)
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
    setTemplateError(null); // Clear template error when tags change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTemplateError(null);
    
    if (!name.trim()) {
      setError('Project name is required');
      return;
    }

    try {
      const selectedTagObjects = tags.filter(tag => selectedTags.includes(tag.id));
      const template = await generateTemplate(selectedTagObjects, variants);

      const project = await createProject({
        name,
        type: projectType,
        tags: selectedTags,
        html: JSON.stringify(template)
      });

      navigate(`/projects/editor/${projectType}/${project.id}`, {
        state: {
          name,
          projectType,
          tags: selectedTags
        }
      });
    } catch (err) {
      if (err instanceof Error) {
        setTemplateError(err.message);
      } else {
        setTemplateError('Failed to generate template');
      }
    }
  };

  if (loading || loadingVariants) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const getProjectTypeTitle = () => {
    switch (projectType) {
      case 'landing':
        return 'Landing Page';
      case 'mobile':
        return 'Mobile Application';
      case 'chatbot':
        return 'Chat Bot';
      case 'store':
        return 'Online Store';
      default:
        return 'Project';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto py-12 px-4">
        <button
          onClick={() => navigate('/projects/type')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Project Types</span>
        </button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">New {getProjectTypeTitle()}</h1>
          <p className="text-gray-600 mt-2">Enter project details and select relevant tags</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm">
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}

          {templateError && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
              {templateError}
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Project Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter project name"
              required
            />
          </div>

          {tags.length > 0 && (
            <TagSelector
              tags={tags}
              selectedTags={selectedTags}
              onTagToggle={handleTagToggle}
            />
          )}

          <button
            type="submit"
            className="w-full mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Continue to Editor
          </button>
        </form>
      </div>
    </div>
  );
}