import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Pencil, Trash2, Globe, Smartphone, MessageSquare, ShoppingBag } from 'lucide-react';
import { fetchProjects, deleteProject } from '../services/api';
import { Project, Tag } from '../types';

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const data = await fetchProjects();
      setProjects(data);
    } catch (err) {
      setError('Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteProject(id);
        setProjects(projects.filter(project => project.id !== id));
      } catch (err) {
        setError('Failed to delete project');
      }
    }
  };

  const handleCreateProject = () => {
    navigate('/projects/type');
  };

  const handleEditProject = (project: Project) => {
    navigate(`/projects/editor/${project.type}/${project.id}`, {
      state: {
        name: project.name,
        description: project.description,
        projectType: project.type
      }
    });
  };

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'landing':
        return Globe;
      case 'mobile':
        return Smartphone;
      case 'chatbot':
        return MessageSquare;
      case 'store':
        return ShoppingBag;
      default:
        return Globe;
    }
  };

  const getProjectTypeName = (type: string) => {
    switch (type) {
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

  const renderTags = (tags: Tag[]) => {
    if (!tags || tags.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map(tag => (
          <label key={tag.id} className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300"
              checked
              readOnly
            />
            <span className="ml-2 text-sm text-gray-600">{tag.name}</span>
          </label>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Projects</h1>
          <button
            onClick={handleCreateProject}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Create Project</span>
          </button>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Projects</h1>
          <button
            onClick={handleCreateProject}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Create Project</span>
          </button>
        </div>
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button
          onClick={handleCreateProject}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Create Project</span>
        </button>
      </div>
      
      {projects.length === 0 ? (
        <div className="text-center py-12">
          <div className="mb-4">
            <Globe className="w-12 h-12 text-gray-400 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
          <p className="text-gray-500 mb-6">Get started by creating your first project</p>
          <button
            onClick={handleCreateProject}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Create Project</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = getProjectIcon(project.type);
            return (
              <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{project.name}</h3>
                      <p className="text-sm text-gray-500">{getProjectTypeName(project.type)}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditProject(project)}
                      className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50"
                    >
                      <Pencil className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                {project.description && (
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                )}
                {renderTags(project.tags)}
                <div className="text-sm text-gray-500 mt-4">
                  Created {new Date(project.createdAt).toLocaleDateString()}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}