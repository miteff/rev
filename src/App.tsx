import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';
import { Dashboard } from './pages/Dashboard';
import { Projects } from './pages/Projects';
import { ProjectType } from './pages/ProjectType';
import { ProjectDetails } from './pages/ProjectDetails';
import { ProjectEditor } from './pages/ProjectEditor';
import { MobileEditor } from './pages/editors/MobileEditor';
import { LandingEditor } from './pages/editors/LandingEditor';
import { ChatbotEditor } from './pages/editors/ChatbotEditor';
import { StoreEditor } from './pages/editors/StoreEditor';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Editor Routes */}
          <Route path="/projects/editor/landing/:id" element={
            <PrivateRoute>
              <LandingEditor />
            </PrivateRoute>
          } />
          <Route path="/projects/editor/mobile/:id" element={
            <PrivateRoute>
              <MobileEditor />
            </PrivateRoute>
          } />
          <Route path="/projects/editor/chatbot/:id" element={
            <PrivateRoute>
              <ChatbotEditor />
            </PrivateRoute>
          } />
          <Route path="/projects/editor/store/:id" element={
            <PrivateRoute>
              <StoreEditor />
            </PrivateRoute>
          } />
          
          <Route path="/" element={<Layout />}>
            <Route index element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="projects" element={
              <PrivateRoute>
                <Projects />
              </PrivateRoute>
            } />
            <Route path="projects/type" element={
              <PrivateRoute>
                <ProjectType />
              </PrivateRoute>
            } />
            <Route path="projects/new" element={
              <PrivateRoute>
                <ProjectDetails />
              </PrivateRoute>
            } />
            <Route path="profile" element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;