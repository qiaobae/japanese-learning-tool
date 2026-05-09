import { useState, useCallback } from 'react';

const KEY = 'jp-favourites-v1';

function load() {
  try { return new Set(JSON.parse(localStorage.getItem(KEY) || '[]')); }
  catch { return new Set(); }
}

function save(set) {
  localStorage.setItem(KEY, JSON.stringify([...set]));
}

export function useFavourites() {
  const [favs, setFavs] = useState(load);

  const toggle = useCallback((id) => {
    setFavs(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      save(next);
      return next;
    });
  }, []);

  return { favs, toggle, count: favs.size };
}
