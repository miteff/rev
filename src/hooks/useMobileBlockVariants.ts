import { useState, useEffect } from 'react';
import { BlockVariant } from '../types';
import { fetchMobileBlockVariants } from '../services/api';

export function useMobileBlockVariants() {
  const [variants, setVariants] = useState<BlockVariant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadVariants = async () => {
      try {
        setLoading(true);
        const data = await fetchMobileBlockVariants();
        setVariants(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load variants');
      } finally {
        setLoading(false);
      }
    };

    loadVariants();
  }, []);

  return {
    variants,
    loading,
    error,
  };
}