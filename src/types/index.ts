export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlockVariant {
  id: string;
  name: string;
  type: 'header' | 'content' | 'feature' | 'cta' | 'footer';
  content: string;
}

export interface Block {
  id: string;
  type: 'header' | 'content' | 'feature' | 'cta' | 'footer';
  content: string;
  variantId?: string;
}

export interface Website {
  blocks: Block[];
}

export interface Tag {
  id: string;
  name: string;
  category: 'industry' | 'purpose' | 'style';
  projectType: 'landing' | 'mobile' | 'chatbot' | 'store';
  createdAt?: string;
  updatedAt?: string;
}

export interface Project {
  id: string;
  name: string;
  type: string;
  html: string;
  tags: Tag[];
  userId: string;
  createdAt: string;
  updatedAt: string;
}