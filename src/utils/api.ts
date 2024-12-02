const API_URL = 'http://localhost:3001/api';

export async function saveProject(projectData: {
  name: string;
  description: string;
  type: string;
  html: string;
}) {
  const response = await fetch(`${API_URL}/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projectData),
  });
  return response.json();
}

export async function getProjects() {
  const response = await fetch(`${API_URL}/projects`);
  return response.json();
}

export async function getProject(id: string) {
  const response = await fetch(`${API_URL}/projects/${id}`);
  return response.json();
}

export async function updateProject(id: string, projectData: {
  name: string;
  description: string;
  type: string;
  html: string;
}) {
  const response = await fetch(`${API_URL}/projects/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projectData),
  });
  return response.json();
}

export async function deleteProject(id: string) {
  const response = await fetch(`${API_URL}/projects/${id}`, {
    method: 'DELETE',
  });
  return response.json();
}

export async function getTemplates() {
  const response = await fetch(`${API_URL}/templates`);
  return response.json();
}

export async function getTemplate(id: string) {
  const response = await fetch(`${API_URL}/templates/${id}`);
  return response.json();
}