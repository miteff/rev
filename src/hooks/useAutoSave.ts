import { useState, useCallback, useRef } from 'react';
import { debounce } from 'lodash';
import { updateProject } from '../services/api';

interface AutoSaveState {
  saving: boolean;
  lastSaved: Date | null;
  error: string | null;
}

export function useAutoSave(projectId: string) {
  const [state, setState] = useState<AutoSaveState>({
    saving: false,
    lastSaved: null,
    error: null,
  });

  const saveRef = useRef<ReturnType<typeof debounce>>();

  const save = useCallback(
    (data: any) => {
      if (!projectId) return;

      // Cancel previous save if it exists
      if (saveRef.current) {
        saveRef.current.cancel();
      }

      // Create new debounced save function
      saveRef.current = debounce(async () => {
        try {
          setState(prev => ({ ...prev, saving: true, error: null }));
          await updateProject(projectId, data);
          setState(prev => ({
            ...prev,
            saving: false,
            lastSaved: new Date(),
            error: null,
          }));
        } catch (error) {
          console.error('Autosave error:', error);
          setState(prev => ({
            ...prev,
            saving: false,
            error: 'Failed to save changes. Please try again.',
            lastSaved: prev.lastSaved,
          }));
        }
      }, 1000);

      // Execute the debounced save
      saveRef.current();
    },
    [projectId]
  );

  // Cleanup on unmount
  useCallback(() => {
    return () => {
      if (saveRef.current) {
        saveRef.current.cancel();
      }
    };
  }, []);

  return {
    ...state,
    save,
  };
}