export const API_BASE_URL = 'http://localhost:3001/api';

export const ENDPOINTS = {
  BLOCK_VARIANTS: '/block-variants',
  BLOCK_VARIANTS_BY_TYPE: (type: string) => `/block-variants/${type}`,
  PROJECTS: '/projects',
  PROJECT: (id: string) => `/projects/${id}`,
};